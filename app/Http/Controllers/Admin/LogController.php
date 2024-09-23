<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Mongo\UserLog;
use Carbon\Carbon;

class LogController extends Controller
{
    public function index()
    {
        $rangeDefault = Carbon::now()->format('Y-m-d');
        $createdAt =  request()->get('date', $rangeDefault);
        try {
            $createdAt = Carbon::createFromFormat('Y-m-d', $createdAt)->format('Y-m-d');
        }catch (\Exception $e) {
            $createdAt = $rangeDefault;
        }
        $logQuery = UserLog::query()->where('created_at', $createdAt);
        $id =  request()->get('q', 0);
        if (intval($id) > 0) {
            $logQuery = $logQuery->where('user_id', intval($id));
        } else {
            $logQuery = $logQuery->where('user_id', '!=', 0);
        }
        $logs = $logQuery->paginate(15);
        return view('adminlte.logs.logs-list')->with(
            [
                'loggings' => $logs,
                'rangeDefault' => $rangeDefault
            ]);
    }
}
