<?php

namespace App\Traits;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;

trait CacheTrait
{
    private function getCache($keyCache, $model, $logicQuery = [], $tag = null, $inDay = false)
    {
        $dataInCache = Cache::get($keyCache);
        if ($tag) {
            $dataInCache = Cache::tags($tag)->get($keyCache);
        }
        if (!empty($dataInCache)) return $dataInCache;
        $data = $model::query()->where($logicQuery)->first();
        if (!empty($data)) {
            $this->setCache($keyCache, $data, $tag, $inDay);
            return $data;
        }
        return null;
    }
    private function setCache($keyCache, $data, $tag, $inDay): int
    {
        if ($inDay) {
            $now = Carbon::now();
            $midnight = Carbon::tomorrow()->startOfDay();
            $minutes = $now->diffInMinutes($midnight);
            if ($tag) {
                Cache::tags($tag)->put($keyCache, $data, $minutes);
                return 0;
            }
            Cache::put($keyCache, $data, $minutes);
            return 0;
        }
        if ($tag) {
            Cache::tags($tag)->put($keyCache, $data, now()->addDays());
            return 0;
        }
        Cache::put($keyCache, $data, now()->addDays());
        return 1;
    }
}
