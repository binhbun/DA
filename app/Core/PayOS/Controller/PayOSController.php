<?php

namespace App\Core\PayOS\Controller;

use App\Core\Page\PageService;
use App\Core\PayOS\PayOS;
use App\Http\Controllers\Controller;
use App\InvoiceMoney;
use App\User;
use App\WebhookDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PayOSController extends Controller
{
    public function handlePayOSWebhook(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $webhookDetail = WebhookDetail::query()->create(['detail' => $request->getContent()]);
            DB::beginTransaction();
            $body = json_decode($request->getContent(), true);
            // Check webhook data integrity
            $payOS = new PayOS();
            $data = $payOS->verifyPaymentWebhookData($body);
            if ($body['code'] === "00" && $body['desc'] === "success") {
                $this->updateInvoice($data);
            }
            $webhookDetail->status = 1;
            $webhookDetail->save();
            PageService::flushCache();
            DB::commit();
            return response()->json([
                "error" => 0,
                "message" => "Ok",
                "data" => $body
            ]);
        }catch (\Throwable $ex) {
            DB::rollBack();
            $webhookDetail->status = 0;
            $webhookDetail->save();
            return response()->json([
                "error" => 0,
                "message" => "error",
                "data" => []
            ]);
        }
    }

    // private function updateInvoice($data)
    // {
    //     $invoice = InvoiceMoney::query()
    //         ->where('order_code', $data['orderCode'])
    //         ->where('status', 2)
    //         ->first();

    //     $invoice->update([
    //             'status' => 3,
    //             'money' => $data['amount']
    //         ]);

    //     User::query()->where('id',$invoice->user_id)->update([
    //         'money' => DB::raw('money + ' . $data['amount'])
    //     ]);
    // }

    private function updateInvoice($data)
    {
        // Tìm hóa đơn bằng order_code và trạng thái là 2
        $invoice = InvoiceMoney::query()
            ->where('order_code', $data['orderCode'])
            ->where('status', 2)
            ->first();

        if ($invoice) {
            // Cập nhật số tiền và trạng thái hóa đơn
            $invoice->update([
                'status' => 3,
                'money' => $invoice->money  // Sử dụng số tiền gốc từ hóa đơn
            ]);

            // Cập nhật số tiền cho người dùng
            User::query()->where('id', $invoice->user_id)->increment('money', $invoice->money);
        }
    }
}
