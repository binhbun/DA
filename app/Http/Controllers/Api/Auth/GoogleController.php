<?php
namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Core\User\IUserService;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use App\Mail\Subscribe; // Thêm dòng này
use Illuminate\Support\Facades\Mail; // Thêm dòng này

class GoogleController extends Controller
{
    private $service;

    public function __construct(IUserService $service)
    {
        $this->service = $service;
    }

    public function loginUrl()
    {
        return redirect()->to(Socialite::driver('google')->stateless()->redirect()->getTargetUrl());
    }

    public function loginCallback(Request $request)
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();
            
            $user = User::where('email', $googleUser->getEmail())->first();
        
            if (!$user) {
                return view('user.role_google', [
                    'hoten' => $googleUser->getName(),
                    'name' => $googleUser->getName(),
                    'email' => $googleUser->getEmail(),
                ]);
            }

            Auth::login($user);

            if (Auth::check()) {
                return redirect('admin');
            } else {
                return redirect('/login')->withErrors(['msg' => 'Authentication failed. Please try again.']);
            }
        
        } catch (\Exception $e) {
            \Log::error('Google login error: ' . $e->getMessage(), [
                'code' => $e->getCode(),
                'trace' => $e->getTraceAsString(),
            ]);
            return redirect('/login')->withErrors(['msg' => 'Login failed. Please try again.']);
        }        
    }

    public function registerWithGoogle(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'hoten' => 'required|string',
            'role_active' => 'required|integer'
        ]);
    
        $randomPassword = Str::random(16);
        $randomName = 'Google' . rand(01, 99999);;
    
        $userData = [
            'name' => $randomName,
            'email' => $request->input('email'),
            'password' => bcrypt($randomPassword),
            'pwd' => $randomPassword,
            'hoten' => $request->input('hoten'),
            'role_active' => $request->input('role_active')
        ];
    
        $this->service->registerWithGoogle($userData);
    
        $user = User::where('email', $request->input('email'))->first();
        
        // Mail::to($user->email)->send(new Subscribe($user->email, $randomPassword));
    
        Auth::login($user);
    
        // return redirect('admin');
        return redirect()->route('profile.edit');
    }
}
