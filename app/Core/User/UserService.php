<?php

namespace App\Core\User;

use App\Setting;
use App\Traits\CacheTrait;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendOtpMail; 

class UserService implements IUserService
{
    use CacheTrait;

    public function registerUser($user)
    {
        $settingPending = $this->getCache('SETTING_PENDING', Setting::class, ['name' => 'is_pending_user']);
        if (!$settingPending) {
            throw new \Exception('Not found setting');
        }
        $isPending = $settingPending->value;
        
        if (intval($isPending)) {
            $user['role'] = $user['role_active'];
        }
        User::query()->create($user);
    }

    // public function registerUser($user)
    // {
    //     $settingPending = $this->getCache('SETTING_PENDING', Setting::class, ['name' => 'is_pending_user']);
    //     if (!$settingPending) {
    //         throw new \Exception('Not found setting');
    //     }
    //     $isPending = $settingPending->value;

    //     $otp = rand(100000, 999999);
    //     $user['otp'] = $otp;

    //     Mail::to($user['email'])->send(new SendOtpMail($otp));

    //     session(['pending_user' => $user]);
        
    //     return true; 
    // }

    public function verifyOtp($email, $otp)
    {
        $pendingUser = session('pending_user');

        if ($pendingUser && $pendingUser['email'] == $email && $pendingUser['otp'] == $otp) {
            $pendingUser['role'] = $pendingUser['role_active'];
            User::query()->create($pendingUser);
            session()->forget('pending_user');
            return true; 
        }

        return false;
    }

    public function resendOtp($email)
    {
        $pendingUser = session('pending_user');

        if ($pendingUser && $pendingUser['email'] == $email) {
           
            $otp = rand(100000, 999999);
            $pendingUser['otp'] = $otp;

            Mail::to($pendingUser['email'])->send(new SendOtpMail($otp));

            session(['pending_user' => $pendingUser]);

            return true; 
        }

        return false; 
    }


    public function registerWithGoogle($user)
    {
        $settingPending = $this->getCache('SETTING_PENDING', Setting::class, ['name' => 'is_pending_user']);
        if (!$settingPending) {
            throw new \Exception('Not found setting');
        }
        $isPending = $settingPending->value;

        if (intval($isPending)) {
            $user['role'] = $user['role_active'];
        }

        User::query()->create($user);
    }
}
