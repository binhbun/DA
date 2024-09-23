<?php

namespace App\Core\Services;

use App\Link;
use App\Models\TokenModel;
use App\User;
use App\UserAttributes;
use Illuminate\Support\Str;

class QuickLinkService
{
    public function createLink(User $user): string
    {
        $token = $this->generateToken();
        $dataInsert = [
            'user_id' => $user->id,
            'title' =>Str::random(5),
            'aliases' => !empty($data['link-user-aliases']) ? str_replace(" ", "", $data['link-user-aliases']) : Str::random(5),
            'token' => $token,
            'type' => 2
        ];
        Link::query()->create($dataInsert);
        return $token;
    }

    private function generateToken(): string
    {
        return strtolower(Str::random(32));
    }

}
