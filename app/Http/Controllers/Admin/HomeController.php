<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Money;
use App\Setting;
use App\ViewOfLinks;
use Carbon\Carbon;
use Hamcrest\Core\Set;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function __construct()
    {
    }

    public function index(Request $request)
    {
        $role = auth()->user()->role;
        if ($role == 3) {
            return redirect()->route('page.get-all-page');
        }
        $month = $request->get('month', 0);
        $currentDate = date('Y-m-d');
        if (!empty($month)) {
            $currentDate = Carbon::today()->subMonths($month)->format('Y-m-d');
        }
        $firstDayOfMonth = date('Y-m-01', strtotime($currentDate));
        $lastDayOfMonth = date('Y-m-t', strtotime($currentDate));
        $userId = auth()->user()->id;

        $setting = Setting::query()->where('name', 'price')->first();
        $configPrice = intval($setting->value);
        $totalMoney = ViewOfLinks::query()->where('user_id', $userId)
            ->where('created_at', '>=', $firstDayOfMonth)
            ->where('created_at', '<=', $lastDayOfMonth)
            ->whereIn('status', [1,2])
            ->selectRaw('SUM(input_coded * price) as total_view')
            ->value('total_view');
        $totalMoney = number_format($totalMoney,0,",",'.').'đ';
        $totalView = ViewOfLinks::query()->where('user_id', $userId)
            ->where('created_at', '>=', $firstDayOfMonth)
            ->where('created_at', '<=', $lastDayOfMonth)
            ->whereIn('status', [1,2])
            ->sum('input_coded');
        $cpm = number_format($configPrice * 1000,0,",",'.').'đ';
        // Tạo mảng dữ liệu

        // Truy vấn dữ liệu từ cơ sở dữ liệu
        $results = DB::table('view_of_links')
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('SUM(clicked) as total_click'), DB::raw('SUM(input_coded) as total_input'))
            ->where('user_id', $userId)
            ->whereIn('status', [1,2])
            ->where('created_at', '>=', $firstDayOfMonth)
            ->where('created_at', '<=', $lastDayOfMonth)
            ->groupBy('created_at')
            ->get();
        // Tạo mảng dữ liệu
        $expectations = [];
        $actuals = [];
        foreach (range(1, date('t')) as $day) {

            $date = date('Y-m-d', strtotime($firstDayOfMonth . ' +' . ($day - 1) . ' day'));
            $totalClick = 0;
            $totalInput = 0;
            foreach ($results as $result) {
                if ($result->date == $date) {
                    $totalClick = intval($result->total_click);
                    $totalInput = intval($result->total_input);
                    break;
                }
            }
            $expectations[] = $totalClick;
            $actuals[] = $totalInput;
        }
        $expectations = json_encode($expectations);
        $actuals = json_encode($actuals);

        return view('home')->with(['totalView' => $totalView, 'totalMoney' => $totalMoney, 'cpm' => $cpm, 'expectations' => $expectations,'actuals' => $actuals]);
    }

    public function configPrice(Request $request)
    {
        $role = $request->get('role');
        if ($role == 0) return 'Unauthorize';
        return view('adminlte.config');
    }

}
