<?php

namespace App\Http\Controllers\Admin;

use App\Config;
use App\Http\Controllers\Controller;
use App\Types;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class TypeConfigController extends Controller
{
    public function getAll()
    {
        $configs = Types::query()->get();
        return view('adminlte.type.config-type')->with(['configs' => $configs]);
    }
    public function updateOrCreate(Request $request) {
        $data = $request->all();
        $id = 0;
        if (!empty($data['id'])) $id = intval($data['id']);
        Types::query()->updateOrCreate(['id' => $id], ['names' => $data['names'], 'name' => $data['name'], 'type_money' => ($data['type_money'] ?? 0)]);
        Cache::forget('CONFIG_TYPE_3');
        return redirect()->route('type.get-all');
    }
}
