<?php

namespace App\Core\PayOS\Controller;

use App\Core\PayOS\PayOS;
use App\Http\Controllers\Controller;
use App\InvoiceMoney;
use Illuminate\Http\Request;

class CheckoutController extends Controller
{

    public function createPaymentLink(Request $request) {
        $YOUR_DOMAIN = env('APP_URL');
        $amount1 = intval($request->input('amount1', 0));  // Số tiền gốc
        $data = [
            "orderCode" => intval(substr(strval(microtime(true) * 10000), -6)),
            "amount" => intval($request->input('amountz', 0)),
            "description" => " ",
            // "description" => substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'), 0, 6),
            "returnUrl" => $YOUR_DOMAIN . "/payos/success",
            "cancelUrl" => $YOUR_DOMAIN . "/payos/cancel"
        ];
        error_log($data['orderCode']);

        $payOS = new PayOS();
        try {
            $response = $payOS->createPaymentLink($data);
            $this->createInvoice($response, $amount1);
            return redirect($response['checkoutUrl']);
        } catch (\Throwable $th) {
            return $th->getMessage().$th->getFile().$th->getLine();
        }
    }

    private function createInvoice($data, $amount1)
    {
        $dataInsert = [
            'money' => $amount1,
            'money1' => $data['amount'] ?? 0,
            'user_id' => \auth()->user()->id,
            'status' => 2,
            'order_code' => $data['orderCode'] ?? 0,
            'description' => json_encode($data)
        ];
        InvoiceMoney::query()->create($dataInsert);
    }

    
    // public function createPaymentLink(Request $request) {
    //     $YOUR_DOMAIN = env('APP_URL');
    //     $data = [
    //         "orderCode" => intval(substr(strval(microtime(true) * 10000), -6)),
    //         "amount" => intval($request->input('amount', 0)),
    //         "description" => " ",
    //         // "description" => substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'), 0, 6),
    //         "returnUrl" => $YOUR_DOMAIN . "/payos/success",
    //         "cancelUrl" => $YOUR_DOMAIN . "/payos/cancel"
    //     ];
    //     error_log($data['orderCode']);

    //     $payOS = new PayOS();
    //     try {
    //         $response = $payOS->createPaymentLink($data);
    //         $this->createInvoice($response);
    //         return redirect($response['checkoutUrl']);
    //     } catch (\Throwable $th) {
    //         return $th->getMessage().$th->getFile().$th->getLine();
    //     }
    // }

    // private function createInvoice($data)
    // {
    //     $dataInsert = [
    //         'money' => $data['amount'] ?? 0,
    //         'user_id' => \auth()->user()->id,
    //         'status' => 2,
    //         'order_code' => $data['orderCode'] ?? 0,
    //         'description' => json_encode($data)
    //     ];
    //     InvoiceMoney::query()->create($dataInsert);
    // }
}
