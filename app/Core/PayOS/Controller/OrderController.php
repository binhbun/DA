<?php

namespace App\Core\PayOS\Controller;

use App\Core\PayOS\PayOS;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function createOrder(Request $request)
    {
        $body = $request->input();
        $body["amount"] = intval($body["amount"]);
        $body["orderCode"] = intval(substr(strval(microtime(true) * 100000), -6));
        $payOS = new PayOS();
        try {
            dd($body);
            $response = $payOS->createPaymentLink($body);
            return response()->json([
                "error" => 0,
                "message" => "Success",
                "data" => $response["checkoutUrl"]
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "error" => $th->getCode(),
                "message" => $th->getMessage(),
                "data" => null
            ]);
        }
    }

    public function getPaymentLinkInfoOfOrder(string $id)
    {
        $payOS = new PayOS();
        try {
            $response = $payOS->getPaymentLinkInfomation($id);
            return response()->json([
                "error" => 0,
                "message" => "Success",
                "data" => $response["data"]
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "error" => $th->getCode(),
                "message" => $th->getMessage(),
                "data" => null
            ]);
        }
    }

    public function cancelPaymentLinkOfOrder(Request $request, string $id)
    {
        $body = json_decode($request->getContent(), true);
        $payOS = new PayOS();
        try {
            $cancelBody = is_array($body) && $body["cancellationReason"] ? $body : null;
            $response = $payOS->cancelPaymentLink($id, $cancelBody);
            return response()->json([
                "error" => 0,
                "message" => "Success",
                "data" => $response["data"]
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "error" => $th->getCode(),
                "message" => $th->getMessage(),
                "data" => null
            ]);
        }
    }
}
