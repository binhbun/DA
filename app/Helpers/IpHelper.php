<?php

namespace App\Helpers;

use GuzzleHttp\Client;

class IpHelper
{
    public static function getCountryByIp($ip): string
    {
        try {
            $client = new Client();
            $response = $client->get("http://ip-api.com/json/{$ip}");
            $data = json_decode($response->getBody(), true);
            return strtolower($data['country']);
        }catch (\Exception $e) {
            return "unknown";
        }
    }
}
