<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Invoices;
use App\InvoiceMoney;
use App\Page;
use App\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Mpdf\Mpdf;

class InvoiceController extends Controller
{

    public function getAll()
    {
        $userId = auth()->user()->id;
        $invoices = Invoices::query()->where('user_id', $userId)->paginate(10);
        return view('user.invoice.show')->with(['invoices' => $invoices]);
    }

    public function showDetail($id)
    {
        $invoice = Invoices::query()->where('id', $id)->first();
        $banks = Payment::query()->where('user_id' , 1)
            ->where('active', 1)
            ->get()->groupBy('type');
        return view('user.invoice.show-detail')->with(['invoice' => $invoice, 'banks' => $banks]);
    }

    public function pay(Request $request) {
        try {
            $id = $request->get('id', -1);
            if (empty($id) || $id == -1) {
                throw new \Exception('đã có lỗi xảy ra');
            }
            DB::beginTransaction();
            Invoices::query()->where('id', intval($id))->update(['payment_method'=>
                $request->get('payment_method', ''),
                "status" => 6
                ]);
            $pages = Page::query()->where('invoice_id', intval($id))->get();
            foreach ($pages as $page) {
                $page->status = 6;
                $page->save();
            }
            DB::commit();
            return "Hệ thống đang xử  lý.";
        } catch (\Exception $e){
            DB::rollBack();
            return response()->json(['message' => $e->getMessage()],500);
        }
    }
    
    public function showInvoice($id)
    {
        $invoice = InvoiceMoney::find($id);
        
        if (!$invoice) {
            return redirect()->back()->with('error', 'Hóa đơn không tồn tại!');
        }
        
        $user = auth()->user();
    
        return view('user.invoice.invoice', compact('user', 'invoice'));
    }
    
    public function downloadInvoice($id)
    {
        $invoice = InvoiceMoney::find($id);
        
        if (!$invoice) {
            return redirect()->back()->with('error', 'Hóa đơn không tồn tại!');
        }

        $user = auth()->user();

        $mpdf = new Mpdf([
            'tempDir' => sys_get_temp_dir(),
            'margin_left' => -5,
            'margin_right' => -5, 
            'margin_top' => 0, 
            'margin_bottom' => 0, 
        ]);

        // Lấy nội dung HTML từ view và ghi vào Mpdf
        $mpdf->WriteHTML(view('user.invoice.invoice', compact('user', 'invoice'))->render());

        // Đặt tên cho file PDF
        $filename = 'invoice_' . $invoice->id . '.pdf';

        // Xuất PDF để tải về
        $mpdf->Output($filename, 'D');

        exit;
    }

    
}
