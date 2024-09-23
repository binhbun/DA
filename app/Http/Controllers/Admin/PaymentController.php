<?php

namespace App\Http\Controllers\Admin;

use App\History;
use App\Http\Controllers\Controller;
use App\InvoiceUser;
use App\Money;
use App\Payment;
use App\Setting;
use App\ViewOfLinks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

const STATUS = [
    0 => 'Pending',
    1 => 'Active',
    2 => 'Success'
];
class PaymentController extends Controller
{

    public function getPaymentUser($userid)
    {
        $pays = Payment::query()
            ->where('user_id', $userid)
            ->where('active', 1)
            ->get();
        return $pays;
    }

    public function editUserPayemnt(Request $request)
    {
        try {
            DB::beginTransaction();
            $id = $request->get('_id');
            $status = $request->get('status');
            if (!in_array(intval($status),[1,3,6])) {
                return redirect()->back()->with(['alert-danger' => 'Không hợp lệ']);
            }
            InvoiceUser::query()->where('id', intval($id))->update([
                'status' => intval($status)
            ]);
            $historys = History::query()->where('invoice_id', intval($id))->pluck('view_of_link_id');
            foreach ($historys as $viewID){
                ViewOfLinks::query()->where('id', $viewID)->update([
                    'status' => intval($status)
                ]);
            }
            DB::commit();
            return redirect()->route('admin.get-all-payment');
        } catch (\Exception $exception) {
            DB::rollBack();
            return redirect()->back()->with(['alert-danger' => 'Có lỗi xảy ra.']);
        }
    }
    public function getAllPayemnt(Request $request)
    {
        $ID = $request->get('ID', 0);
        $query = InvoiceUser::query()->whereIn('status' ,[3, 6]);
        if (!empty($ID)) $query->where('id', intval($ID));
        $invoice = $query->orderByDesc('id')->paginate(10);
        return view('adminlte.allpayment')->with(['payments' => $invoice]);
    }
    public function withdrawalView(Request $request)
    {
        $userId = auth()->user()->id;
        $setting = Setting::query()->where('name', 'price')->first();
        $configPrice = intval($setting->value);
        $totalMoney = ViewOfLinks::query()->where('user_id', $userId)
            ->where('status', 1)
            ->selectRaw('SUM(input_coded * price) as total_view')
            ->value('total_view');
        $totalView = ViewOfLinks::query()->where('user_id', $userId)
            ->where('status', 1)
            ->sum('input_coded');
        $totalMoney = number_format($totalMoney,0,",",'.').'đ';
        $setting = Setting::query()->where('name', 'min')->first();
        $pending = InvoiceUser::query()->where('user_id', $userId)->where('status', 6)->sum('total_money');
        $pending = number_format($pending,0,",",'.').'đ';
        // $money = ViewOfLinks::query()->where('user_id', $userId)->sum('input_coded');
        $money = ViewOfLinks::query()->where('user_id', $userId)->where('status', 1)->sum('input_coded');
        // $done = 0;
        $done = ViewOfLinks::query()->where('user_id', $userId)
            ->where('status', 3)
            ->selectRaw('SUM(input_coded * price) as total_view')
            ->value('total_view');
        $done = number_format($done,0,",",'.').'đ';
        $query = InvoiceUser::query()->whereIn('status' ,[3, 6])->where('user_id', $userId);
        $invoice = $query->orderByDesc('id')->paginate(10);
        return view('site.withdrawal-view')
                ->with(['pending'=> $pending,
                    'current' => $totalMoney,
                    'done' => $done,
                    'money' => $money,
                    'setting' => $setting,
                    'totalView' => $totalView,
                    'payments' => $invoice
                    ]);
    }
    public function withdrawal(Request $request)
    {
        try {
            DB::beginTransaction();
            $userId = $request->get('user_id');
            $dataMoney = ViewOfLinks::query()->where('user_id', $userId)
                ->where('status', 1)->get();
            $view = 0;
            $invoice = InvoiceUser::query()->create([
                'user_id' => $userId,
                'status' => 6,
            ]);
            $totalMoney = 0;
            foreach ($dataMoney as $value) {
                History::create([
                    'view_of_link_id' => $value->id,
                    'invoice_id' => $invoice->id,
                ]);
                $totalMoney += ($value->input_coded * $value->price);
                $value->status = 2;
                $value->save();
            }
//            $setting = Setting::query()->where('name', 'price')->first();
//            $configPrice = intval($setting->value);
//            $totalMoney = $configPrice * $view;
            $invoice->total_money = $totalMoney;
            $invoice->save();
            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            return response()->json([$exception->getMessage()], 500);
        }

    }
    public function getPayment(Request $request)
    {
        $userId = $request->get('user_id');
        $payment = Payment::query()->where('user_id', $userId)->get();
        return view('site.payment-method')->with(['payments' => $payment]);
    }

    public function addPaymentMethod(Request $request): \Illuminate\Http\RedirectResponse
    {
        try {
            $data = $request->all();
            $count = Payment::query()->where('user_id', $data['user_id'])->where('active', 1)->count();
            if ($count > 5) return redirect()->route('admin.home.index')->with('error', 'Bạn có quá nhiều tài khoản!');
            $payment = new Payment();
            $type = $data['type'] ?? '';
            $payment->type = intval($type);
            if ($type == 1) {
                $request->validate([
                    'phone' => ['required', 'max:255'],
                    'bank_mono_name' => ['required'],
                ]);
                $payment->user_id = $data['user_id'];
                $payment->bank_account = $data['bank_mono_name'];
                $payment->phone = $data['phone'];
                $payment->data_source = $data['data_source'];
                $payment->save();
            } else if ($type == 2) {
                $request->validate([
                'bank_account' => ['required', 'max:255'],
                'bank_name' => ['required'],
                'bank_number' => ['required','numeric']
            ]);
                $payment->user_id = $data['user_id'];
                $payment->bank_account = $data['bank_account'];
                $payment->bank_name = $data['bank_name'];
                $payment->bank_number = $data['bank_number'];
                $payment->data_source = $data['data_source'];
                $payment->save();
            }
            return redirect()->route('site.get-payment')->with('success', 'add payment success');
        } catch (\Exception $exception) {
            return redirect()->route('site.get-payment')->with('error', 'add payment fail'. $exception->getMessage());
        }

    }

    public function editPaymentMethod(Request $request): \Illuminate\Http\RedirectResponse
    {
        try {
            $data = $request->all();
            $payment = Payment::query()->where('id', $data['_id'])->first();
            if (empty($payment) ) throw new \Exception('$payment not found');
            $type = $data['type1'] ?? '';
            $active = intval($data['active'] ?? 1);
            $payment->type = intval($type);
            $payment->active = $active;
            if ($type == 1) {
                $request->validate([
                    'phone1' => ['required', 'max:255'],
                    'bank_mono_name1' => ['required'],
                ]);
                $payment->user_id = $data['user_id'];
                $payment->bank_account = $data['bank_mono_name1'];
                $payment->phone = $data['phone1'];
                $payment->data_source = $data['data_source'];
                $payment->save();
            } else if ($type == 2) {
                $request->validate([
                'bank_account1' => ['required', 'max:255'],
                'bank_name1' => ['required'],
                'bank_number1' => ['required','numeric']
            ]);
                $payment->user_id = $data['user_id'];
                $payment->bank_account = $data['bank_account1'];
                $payment->bank_name = $data['bank_name1'];
                $payment->data_source = $data['data_source'];
                $payment->bank_number = $data['bank_number1'];
                $payment->save();
            }
            return redirect()->route('site.get-payment')->with('success', 'edit payment success');
        } catch (\Exception $exception) {
            return redirect()->route('site.get-payment')->with('error', $exception->getMessage());
        }
    }

    public function delPayment(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $id = intval($request->get('id') ?? 0);
            Payment::query()->where('id', $id)->delete();
            return response()->json([], 200);
        } catch (\Exception $e) {
            return response()->json([], 500);
        }
    }

}
