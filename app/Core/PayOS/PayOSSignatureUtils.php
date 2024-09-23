<?php

namespace App\Core\PayOS;

class PayOSSignatureUtils
{
    public static function createSignatureFromObj($checksumKey, $obj): string
    {
        ksort($obj);
        $queryStrArr = [];
        foreach ($obj as $key => $value) {
            if (in_array($value, ["undefined", "null"]) || gettype($value) == "NULL") {
                $value = "";
            }

            if (is_array($value)) {
                $valueSortedElementObj = array_map(function ($ele) {
                    ksort($ele);
                    return $ele;
                }, $value);
                $value = json_encode($valueSortedElementObj, JSON_UNESCAPED_UNICODE);
            }
            $queryStrArr[] = $key . "=" . $value;
        }
        $queryStr = implode("&", $queryStrArr);
        return hash_hmac('sha256', $queryStr, $checksumKey);
    }

    public static function createSignatureOfPaymentRequest($checksumKey, $obj): string
    {
        $dataStr = "amount={$obj["amount"]}&cancelUrl={$obj["cancelUrl"]}&description={$obj["description"]}&orderCode={$obj["orderCode"]}&returnUrl={$obj["returnUrl"]}";
        return hash_hmac("sha256", $dataStr, $checksumKey);
    }
}
