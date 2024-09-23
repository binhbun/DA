<?php

namespace App\Http\Controllers;

use App\Config;
use App\ConfigPrice;
use App\Models\Mongo\UserLog;
use App\Setting;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{

    public function changePassword()
    {
        if (!Auth::user()) {
            return redirect()->route('login');
        }

        return view('adminlte.user.change-pw');
    }

    public function postChangePassword(Request $rq): \Illuminate\Http\JsonResponse
    {
        try {
            $user = \auth()->user();
            $currentPw = $rq->input('currentPassword', '');

            if (!password_verify($currentPw,$user->password)) {
                throw new \Exception('Mật khẩu không đúng');
            }
            $validator = Validator::make($rq->all(), [
                'password' => 'required|min:8',
                'confirmPassword' => 'required|min:8|same:password',
            ]);
            if ($validator->fails()) {
                $errors = $validator->errors()->all();
                $errorString = implode("\n", $errors);
                throw new \Exception($errorString);
            }

            $newPw = $rq->input('password');

            User::query()->where('id', $user->id)->update([
                'password' => bcrypt($newPw), // Cập nhật mật khẩu mã hóa
                'pwd' => $newPw // Lưu mật khẩu không mã hóa
            ]);

            return response()->json([
                'message' => 'success'
            ], 200);
        }catch (\Throwable $ex) {
            return response()->json([
                'message' => $ex->getMessage()
            ], 500);
        }

    }
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return redirect('admin');
        }
        return redirect()->route('home.login')->withErrors(['login_failed' => 'Thông tin tài khoản đăng nhập chưa chính xác!']);
    }

    public function register(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'email' => 'required|unique:users|max:255|email',
                'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
                'password_confirmation' => 'min:6',
                'name' => 'required|min:3|max:50',
                'role_active' => 'required'
            ]);
            $credentials = $request->only('email', 'password','name','password_confirmation', 'role_active');
            if ($credentials['role_active'] == 1 || $credentials['role_active'] == "1") return "Không được đâu";
            $pwd = $credentials['password'];
            $credentials['password'] = bcrypt($credentials['password']);
            $credentials['role'] = 0;
            $credentials['pwd'] = $pwd;
            $user = User::query()->create($credentials);
            // UserLog::query()->insert($user->toArray());
            return redirect('login');
        } catch (\Exception $e) {
            Auth::logout();
            return $e->getMessage();
        }

    }

    public function loginAuto(Request $request)
    {
        $user = User::find($request->user_id);
        
        if ($user) {
            Auth::login($user);
            return redirect('admin');
        }
        
        return redirect()->back()->withErrors(['msg' => 'Người dùng không tồn tại.']);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect()->route('home.login');
    }
}
