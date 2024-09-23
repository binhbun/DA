<?php

namespace App\Http\Controllers\Admin;

use App\Config;
use App\Core\Page\PageService;
use App\Http\Controllers\Controller;
use App\Models\ConfigJob;
use App\Page;
use App\Setting;
use App\User;
use App\UserAttributes;
use App\ViewPartner;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;

class ConfigController extends Controller
{
    public function getViewConfigJob()
    {
//dd(2);
        $currentDateTotal = ViewPartner::whereDate('created_at', now()->toDateString())->sum('total'); 
        $users = User::query()
            ->with(['configJob'])
            ->where('role', 3)
            ->paginate(100);
//dd($users);
//dd(Cache::get('a'));
        return view('adminlte.admin.config.config-job')->with(['users' => $users, 'currentDateTotal' => $currentDateTotal]);
    }

    public function setViewConfigJob(): \Illuminate\Http\RedirectResponse
    {
        $usersId = request()->get('userid', []);
        $configValue = request()->get('config_jobs', []);
        foreach ($configValue as $k => $v) {
            $value = is_numeric($v) ? (string) $v : 'F';
            UserAttributes::query()->updateOrCreate(['user_id' => intval(($usersId[$k] ?? 0))],
                [
                    'value' => $value,
                    'model_type' => ConfigJob::class
                ]);
        }
        Cache::tags('config_job')->flush();
        PageService::flushCache();
        return redirect()->back()->with(['success' => 'Cập nhật thành công']);
    }

    public function getConfig()
    {
        $configs = Config::query()->paginate(10);
        return view('adminlte.config')->with(['configs' => $configs]);
    }

    public function getSetting()
    {
        $settings = Setting::all();
        return view('adminlte.setting')->with(['settings' => $settings]);
    }

    public function updateSetting(Request $request)
    {
        $dataUpdate = $request->all();
        Cache::forget('CONFIG_IP');
        Cache::forget('PRICE');
        Cache::forget('CHECK_INSERT');
        Cache::forget('CONFIG_JOB_PER_HOUR');
        Cache::forget('SETTING_PENDING');
        foreach ($dataUpdate as $key => $value) {
            Setting::query()->where('name', $key)->update([
                'value' => $value
            ]);
        }
        return redirect()->route('site.get-setting');
    }

    public function editConfig(Request $request): RedirectResponse
    {
        $dataRequest = $request->all();
        $dataUpdate = [
            'status' => $dataRequest['status'],
            'price' => $dataRequest['config_price'],
            'domain' => $dataRequest['config_domain']
        ];
        Config::query()->where('user_id', $dataRequest['user_id1'] ?? -1)->update($dataUpdate);
        return redirect()->route('site.get-config');
    }
}
