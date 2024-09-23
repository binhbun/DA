<?php

namespace App\Http\Controllers\Admin;

use App\Core\Page\PageService;
use App\Http\Controllers\Controller;
use App\InvoiceMoney;
use App\Invoices;
use App\Page;
use App\Types;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PageController extends Controller
{
    public function accept()
    {
        $users = User::query()->get();
        return view('adminlte.page.accept')->with(['users' => $users]);
    }

    public function settingPage(): \Illuminate\Http\JsonResponse
    {
        try {
            $now = now()->format('Y-m-d');
            $data = request()->get('options', []);
            $data = array_map(function ($item) {
                return intval($item);
            }, $data);
            $type = request()->get('type', 0);
            $query = Page::query()->whereIn('id', $data);
            if ($type == 1) {
                $query->update(['status' => 1, 'end_date' => now()->addYear()->format('Y-m-d')]);
            } elseif ($type == 2) {
                $query->update(['status' => 2, 'end_date' => $now]);
            } elseif ($type == 4) {
                $query->update(['status' => 4, 'end_date' => $now]);
            } elseif ($type == 6) {
                $query->update(['status' => 6, 'end_date' => $now]);
            }
            PageService::flushCache();
            return response()->json([], 200);
        } catch (\Exception $e) {
            return response()->json([], 500);
        }
    }

    public function active(Request $request): \Illuminate\Http\RedirectResponse
    {
        try {
            DB::beginTransaction();
            $data = $request->all();
            $type = $data['_type'] ?? 1;
            if ($type == 2) {
                $q = InvoiceMoney::query();
            } else {
                $q = Invoices::query();
            }
            $q->where('id', intval($data['_id']))
                ->update(
                    ['status' => intval($data['status']),
                        'description' => $data['invoice-description'],
                        'date_pay' => $data['invoice-date']
                    ]);
            if ($type == 1) {
                if (intval($data['status']) == 3) {
                    Page::query()->where('invoice_id', intval($data['_id']))->update(['status' => 1]);

                } else {
                    Page::query()->where('invoice_id', intval($data['_id']))->update(['status' => 6]);
                }
            }
            if ($type == 2) {
                $invoice = $q->where('id', intval($data['_id']))->first();
                if (intval($data['status']) == 3 && !empty($invoice)) {
                    User::query()->where('id', $invoice->user_id)->update([
                        'money' => DB::raw('money + ' . $invoice->money)
                    ]);
                }
            }
            PageService::flushCache();
            DB::commit();
            return redirect()->back()
                ->with(['alert-success' => "Sửa thành công."]);
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()
                ->with(['alert-danger' => $e->getMessage()]);
        }

    }

    public function editPage($id)
    {
        $page = Page::query()->where('id', $id)->first();
        $types = Types::query()->pluck('name', 'id')->toArray();
        if ($page->type_page == Page::TYPE_AVAILABLE) {
            return view('adminlte.page.edit1')->with(['page' => $page, 'types' => $types]);
        }
        return view('adminlte.page.edit')->with(['page' => $page, 'types' => $types]);
    }

    public function edit(Request $request): \Illuminate\Http\RedirectResponse
    {
        try {
            $url = $request->get('link_page');
            $id = $request->get('__id', 0);
            $parsedUrl = parse_url($url);
            $scheme = $parsedUrl['scheme'];
            $host = $parsedUrl['host'];
            Page::query()->where('id', $id)->update([
                'status' => 1,
                'title' => $request->get('title', ''),
                'description' => $request->get('image', ''),
                "link_page" => $host,
                'next_link_page' => $request->get('next_link_page', ''),
                'type_id' => $request->get('type', 0),
                'view_per_day' => intval($request->get('view_per_day', 0)),
            ]);
            PageService::flushCache();
            return redirect()->back()->with(['alert-success' => "Sửa thành công."]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['alert-danger' => $e->getMessage()]);
        }
    }

    public function delete(Request $q): \Illuminate\Http\RedirectResponse
    {
        $id = $q->get('id', 0);
        Page::query()->where('id', intval($id))->delete();
        PageService::flushCache();
        return redirect()->back()->with(['alert-success' => "Xóa thành công."]);
    }

    public function pending(Request $q): \Illuminate\Http\RedirectResponse
    {
        $now = now()->format('Y-m-d');
        $id = $q->get('id', 0);
        $s = $q->get('status', 1);
        if ($s == 1) {
            $status = 2;
            Page::query()->where('id', intval($id))
                ->update([
                    'status' => $status,
                    'end_date' => $now
                ]);
        } else {
            $status = 1;
            Page::query()->where('id', intval($id))
                ->update([
                    'status' => $status,
                    'end_date' => now()->addYear()->format('Y-m-d')
                ]);
        }
        PageService::flushCache();
        return redirect()->back()->with(['alert-success' => "update thành công."]);
    }
}
