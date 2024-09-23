<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Setting;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class AdminController extends Controller
{

    function activeUser(Request $q)
    {
        try {
            $user = User::query()->where('id', $q->get('user_id_1', 0))->first();
            if (!$user) {
                return redirect()->back()->with(['alert-warning' => "Không tồn tại."]);
            }
            if ($q->get('status', 1) == 1) {
                $user->role = 0;
            } else {
                $user->role = $user->role_active;
            }
            $user->save();
            return redirect()->back()->with(['alert-success' => "Thành công."]);
        } catch (\Exception $e) {
            redirect()->back()->with(['alert-error' => "Co loi xay ra."]);
        }
    }

    public function getAllUsers(Request $request)
    {
        // dd(1);
        // dd(auth()->user()->role);
        if (auth()->user()->role != 1) {
            return redirect()->route('/admin');
        }
        $allUsers = User::query()->whereIn('role', [0, 1, 2, 3])->get()->groupBy('role');
        $name = [
            0 => "Pending (Chờ duyệt)",
            1 => 'Admin (Quản trị viên)',
            2 => 'Publishers (Người kiếm tiền)',
            3 => 'Advertisers (Người mua traffic)'
        ];
        return view('adminlte.allusers')->with(['allUsers' => $allUsers, 'name' => $name]);
    }

    public function flushCache()
    {
        try {
            Cache::flush();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
