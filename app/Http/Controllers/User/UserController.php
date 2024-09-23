<?php

namespace App\Http\Controllers\User;

use App\Core\User\IUserService;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    private $service;

    public function __construct(IUserService $service)
    {
        $this->service = $service;
    }

    public function registerUser(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'email' => 'required|unique:users|max:255|email',
                'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
                'password_confirmation' => 'min:6',
                'name' => 'required|min:3|unique:users|max:50|regex:/^[a-z0-9A-Z]+$/',
                'hoten' => 'required|min:3|max:150',
                'role_active' => 'required'
            ]);
            $credentials = $request->only('email', 'password','name', 'hoten','password_confirmation', 'role_active');
            $pwd = $credentials['password'];
            $credentials['password'] = bcrypt($credentials['password']);
            $credentials['role'] = 0;
            $credentials['pwd'] = $pwd;
            $credentials['hoten'] = $request->hoten;
            if ($credentials['role_active'] == 1 || $credentials['role_active'] == "1") return "Không được đâu";
            $this->service->registerUser($credentials);
            $user = User::where('email', $request->email)->first();
            Auth::login($user);
            return redirect()->route('profile.edit');
        } catch (\Exception $e) {
            return back()->withErrors(['error' => 'Thông tin không hợp lệ.']);
        }
    }
    // public function registerUser(Request $request)
    // {
    //     try {
    //         $validatedData = $request->validate([
    //             'email' => 'required|unique:users|max:255|email',
    //             'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
    //             'password_confirmation' => 'min:6',
    //             'name' => 'required|min:3|max:50|unique:users|regex:/^[a-z0-9A-Z]+$/',
    //             'hoten' => 'required|min:3|max:255',
    //             'role_active' => 'required'
    //         ]);

    //         $credentials = $request->only('email', 'password', 'name', 'password_confirmation', 'hoten', 'role_active');
    //         $pwd = $credentials['password'];
    //         $credentials['password'] = bcrypt($credentials['password']);
    //         $credentials['role'] = 0;
    //         $credentials['hoten'] = $request->hoten;
    //         $credentials['pwd'] = $pwd;

    //         if ($credentials['role_active'] == 1 || $credentials['role_active'] == "1") {
    //             return "Không được đâu";
    //         }

    //         $this->service->registerUser($credentials);
    //         return redirect()->route('verify.otp.form', ['email' => $credentials['email']]); 
    //     } catch (\Exception $e) {
    //         Auth::logout();
    //         return back()->withErrors(['error' => 'Thông tin không hợp lệ.']);
    //     }
    // }

    public function verifyOtp(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required'
        ]);

        $isVerified = $this->service->verifyOtp($request->email, $request->otp);

        if ($isVerified) {
            $user = User::where('email', $request->email)->first();
            Auth::login($user);
            // return redirect('/admin')->with(['alert-success' => 'Xác nhận thành công.']);
            return redirect()->route('profile.edit');
        } else {
            return redirect()->back()->withErrors(['otp' => 'Mã OTP không hợp lệ.']);
        }
    }


    public function showVerifyOtpForm()
    {
        $email = session('pending_user.email');
        return view('user.verify_otp', compact('email'));
    }
    
    public function resendOtp(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $isResent = $this->service->resendOtp($request->email);

        if ($isResent) {
            return response()->json(['message' => 'Mã OTP đã được gửi lại.'], 200);
        } else {
            return response()->json(['message' => 'Có lỗi xảy ra.'], 400);
        }
    }


    public function edit()
    {
        $user = Auth::user();
        return view('adminlte.user.profile', compact('user'));
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                function($attribute, $value, $fail) use ($user) {
                    if ($user->name !== $value && User::where('name', $value)->exists()) {
                        $fail('Tên này đã được sử dụng.');
                    }
                },
                'regex:/^[a-z0-9A-Z]+$/'
            ],
            'hoten' => 'nullable|string|max:255',
            'sdt' => 'nullable|string|max:15',
            'diachi' => 'nullable|string|max:255',
        ]);

        $user->update($request->all());

        return redirect()->route('profile.edit')->with('success', 'Hồ sơ được cập nhật thành công');
    }


}
