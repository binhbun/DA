<?php

namespace App\Http\Controllers\User;

use App\Core\Services\QuickLinkService;
use App\Http\Controllers\Controller;
use App\Link;
use App\Models\TokenModel;
use App\UserAttributes;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class QuickLinkController extends Controller
{
    private $quickLinkService;

    public function __construct()
    {
        $this->quickLinkService = new QuickLinkService();
    }

    public function index()
    {
        $tokenApi = Link::query()
            ->where('type', 2)
            ->where('user_id', auth()->user()->id)
            ->get();
        return view('user.quick-link', compact('tokenApi'));
    }

    public function createLink(Request $req): JsonResponse
    {
        try {
            if (!$req->ajax()) {
                throw new \Exception('Type request not match');
            }

            if ($req->get('_token') !== $req->session()->token()) {
                throw new \Exception('csrf token not match');
            }
            $token = $this->quickLinkService->createLink(auth()->user());

            return response()->json([
                'token' => $token
            ], 200);

        } catch (\Exception $ex) {
            return response()->json([
                "message" => $ex->getMessage()
            ], 400);
        }
    }

}
