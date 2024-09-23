<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\RessetPass;

class ForgotPasswordController extends Controller
{
    public function showLinkRequestForm()
    {
        return view('user.resetpassword'); // Tạo view này cho form nhập email
    }

    public function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();

        if ($user) {
            // Gửi email với mật khẩu gốc
            Mail::to($user->email)->send(new RessetPass($user->email, $user->pwd, $user->name));

            return back()->with('status', 'Mật khẩu đã được gửi đến email của bạn.');
        }

        return back()->withErrors(['email' => 'Email không tồn tại.']);
    }
}
