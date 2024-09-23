<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\InvoiceMoney;
use App\Payment;
use App\Package;
use App\Coupon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PayMoneyController extends Controller
{
    public function index()
    {
        $packages = Package::all();
        $coupons = Coupon::all();
        $userId = Auth::user()->id;
        $invoices = InvoiceMoney::query()->where('user_id', $userId)->orderBy('id','DESC')->paginate(10);
        $banks = Payment::query()->where('user_id' , 8)
            ->where('active', 1)
            ->get()->groupBy('type');
        return view('user.pay.index')->with(['invoices' => $invoices, 'banks' => $banks, 'packages' => $packages, 'coupons' => $coupons]);
    }

    public function addInvoice(Request $q): \Illuminate\Http\RedirectResponse
    {
        InvoiceMoney::query()->create([
                    'payment_method' => $q->get('payment_method', ''),
                    'money' => intval($q->get('money', 0)),
                    'money1' => intval($q->get('money1', 0)),
                    'user_id' => \auth()->user()->id,
                    'status' => 2,
                ]);
                return redirect()->back()->with(['alert-success' => "Thêm thành công."]);
    }

    // public function addInvoice(Request $q): \Illuminate\Http\RedirectResponse
    // {
    //     InvoiceMoney::query()->create([
    //         'payment_method' => $q->get('payment_method', ''),
    //         'money' => intval($q->get('money', 0)),
    //         'user_id' => \auth()->user()->id,
    //         'status' => 2,
    //     ]);
    //     return redirect()->back()->with(['alert-success' => "Thêm thành công."]);
    // }
}
