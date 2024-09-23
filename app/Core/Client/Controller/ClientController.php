<?php

namespace App\Core\Client\Controller;

use App\Core\Client\Interfaces\ClientServiceInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    private $service;

    public function __construct(ClientServiceInterface $service)
    {
        $this->service = $service;
    }

    public function generateCode(Request $request): JsonResponse
    {
        try {
            $dataRes = $request->all();
            $dataRes['ip'] = $request->ip();

            $this->service->generateCode($dataRes);

            return response()->json([]);
        } catch (\Exception $exp) {
            return response()->json(["debug" => [
                $exp->getMessage(), $exp->getCode()
            ]], 500);
        }
    }

    public function checkClientVisit(Request $request): JsonResponse
    {
        try {
            $ip = $request->ip();
            $id = $request->get('id', 0);
            $linkId = $request->get('linkId', 0);
            $keyCheckClient = "check_client_$linkId";

            $this->service->setIpClientCookie($this->getCookie($request, $keyCheckClient));

            $data = $this->service->checkClientVisit($ip, $id, $linkId);

            $name = "check_client_$linkId";

            $resp = response()->json(['isVisit' => $data[0]]);

            if (isset($data[1])) {
                $resp = $resp->cookie(
                    $name,
                    json_encode($data[1]),
                    $this->service
                        ->getMinuteDiffHaftNight());
            }

            return $resp;

        } catch (\Exception $exp) {

            return response()->json(["debug" => [
                $exp->getMessage(), $exp->getLine(), $exp->getFile()
            ]], 500);
        }

    }


    private function getCookie($request, $name)
    {
        return $request->cookie($name);
    }
}
