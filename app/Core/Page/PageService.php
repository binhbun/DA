<?php

namespace App\Core\Page;

use App\Models\ConfigJob;
use App\Page;
use App\Traits\CacheTrait;
use App\UserAttributes;
use App\ViewPartner;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 *
 */
class PageService implements IPageService
{
    use CacheTrait;
    protected $keyCheckNullPage;
    protected $keyCacheCheck = "IS_UPDATE_STATUS_PAGE";
    const TAG = 'PAGE_RUNNING';
    const KEY_CACHE_ALL_PAGE_RUNNING = 'KEY_CACHE_ALL_PAGE_RUNNING';
    const KEY_CACHE_POSITION_PAGE_RUNNING = 'KEY_CACHE_POSITION_PAGE_RUNNING';
    const KEY_CACHE_USER_ID_HAS_MONEY = 'KEY_CACHE_USER_ID_HAS_MONEY';

    public function __construct()
    {
        $hour = now()->hour;
        $this->keyCheckNullPage = "IS_NULL_PAGE_$hour";
    }

    /**
     * @param $data
     * @return void
     */
    public function createPage($data)
    {
        $dataCreate = $this->getData($data);
        Page::query()->create($dataCreate);
        self::flushCache();
    }

    /**
     * @param $data
     * @return void
     */
    public function editPage($data)
    {
        $dataUpdate = $this->getData($data);

        Page::query()
            ->where('id', intval($data['__id']))
            ->update($dataUpdate);

        self::flushCache();
    }

    /**
     * @param $startDate
     * @return int
     */
    private function mappingStatus($startDate): int
    {
        $startDate = Carbon::createFromFormat('Y-m-d', $startDate)
            ->format('Y-m-d');
        $now = Carbon::now()->format('Y-m-d');

        if ($startDate === $now) {
            return 1;
        }

        return 6;
    }

    /**
     * @param $data
     * @return array
     */
    public function getData($data): array
    {
        $url = $data['link_page'];
        $parsedUrl = parse_url($url);
        $host = $parsedUrl['host'];
        $status = $this->mappingStatus($data['start-date']);

        return [
            'type_id' => intval($data['type']),
            'link_page' => $host,
            'title' => $data['title'],
            'view_per_day' => intval($data['view_per_day']),
            'description' => $data['image'],
            'start_date' => $data['start-date'],
            'end_date' => $data['end-date'],
            'status' => $status,
            'type_page' => $data['type_page'] ?? 'v1',
            'user_id' => auth()->user()->id,
            'next_link_page' => $data['next_link_page'] ?? '',
            'code' => $data['code'] ?? '',
            'image_code' => $data['image_code'] ?? '',
            'code_content' => $data['code_content'] ?? '',
        ];

    }

    /**
     * @return void
     */
    public function updateStatusPage()
    {
        $checkUpdate = Cache::get($this->keyCacheCheck);

        if ($checkUpdate) return;

        $now = Carbon::now()->format('Y-m-d');

        Page::query()
            ->where('status', 6)
            ->where('start_date', $now)
            ->update(['status' => 1]);

        Page::query()
            ->where('status', 1)
            ->where('end_date', '<', $now)
            ->update(['status' => 3]);

        $this->setCache($this->keyCacheCheck, true, null, true);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|\Illuminate\Database\Query\Builder|object|null
     */
    public function getPage($pageIds = null, $pageIgnore = [])
    {
	    if(Cache::tags(self::TAG)
            ->has($this->keyCheckNullPage))
            return null;

        if ($pageIds === null)
            $pageIds = $this->getListPageIdRunning();

        if (empty($pageIds))
            return $this->beforeReturnNullPage($pageIds);

        if ($this->compareArrays($pageIds, $pageIgnore))
            return $this->beforeReturnNullPage($pageIds);

        $nextPosition = self::getNextPositionPageRunning($pageIds);

        $page = Page::query()->where('id', ($pageIds[$nextPosition] ?? 0))->first();

        if (empty($page))
            return $this->beforeReturnNullPage($pageIds);

        if ($this->checkViewPerDay($page)) {
            $pageIds = $this->removePageIfFullViewPerDay($nextPosition, $pageIds);

            return $this->getPage($pageIds, $pageIgnore);
        }

        if ($this->checkViewJobByHour($page)) {
            $pageIgnore[] = $page->id;

            return $this->getPage($pageIds, $pageIgnore);
        }

        self::setCachePageRunning($pageIds);

        return $page;
    }

    private function beforeReturnNullPage($pageIds)
    {
        Cache::tags(self::TAG)
            ->put($this->keyCheckNullPage, 1, now()->addHour());

        self::setCachePageRunning($pageIds);

        return null;
    }

    private function compareArrays($arr1, $arr2): bool
    {
        return empty(array_diff($arr1, $arr2));
    }

    private function checkViewJobByHour($page): bool
    {
        $hour = now()->hour;
        $totalJobByCache = intval(Cache::tags('config')->get("get_total_job_per_hour_{$hour}_{$page->user_id}"));
        $settingJob = $this->getCache(
            "CONFIG_JOB_PER_HOUR_USER_{$page->user_id}",
            UserAttributes::class,
            ['user_id' => $page->user_id, 'model_type' => ConfigJob::class],
            'config_job');

        return
            $settingJob &&
            (is_numeric($settingJob->value) &&
            (intval($settingJob->value) <= $totalJobByCache));
    }
    private function removePageIfFullViewPerDay($position, $pageIds): array
    {
        unset($pageIds[$position]);
        return array_values($pageIds);
    }

    /**
     * @return array|mixed
     */
    private function getListPageIdRunning()
    {
        if (!$this->checkUserIdHasMoney()) {
            $pageIds = Cache::tags(self::TAG)->get(self::KEY_CACHE_ALL_PAGE_RUNNING);

            if ($pageIds !== null) {
                return $pageIds;
            }
        }
        $userID = $this->getUserIdHasMoney();
        $this->setCacheUserIdHasMoney($userID);

        $pageQuery = DB::table('pages')
            ->whereIn('user_id', $userID)
            ->where('status', 1)
            ->orderByDesc('view_per_day')
            ->select('user_id', 'id')
            ->from('pages', DB::raw('FORCE INDEX (idx_test)'));

        $pageIds = $pageQuery->pluck('user_id', 'id')->toArray();
        $pageIds = $this->sortDataPage($pageIds, $userID);
        $minute = self::getDiffMinutes();

        Cache::tags(self::TAG)
            ->put(self::KEY_CACHE_ALL_PAGE_RUNNING, $pageIds,
                now()->addMinutes($minute));

        return $pageIds;
    }


    public function sortDataPage($pageIds, $userID)
    {
        $keyMap = [];
        $sortedData = [];
        $maxIndex = 0;
        foreach ($pageIds as $pageId => $userId) {
            $keyMap[$userId][] = $pageId;
            $maxIndex = max(count($keyMap[$userId]), $maxIndex);
        }
        $index = 0;
        while ($index < $maxIndex) {
            foreach ($userID as $userId) {
                if (isset($keyMap[$userId][$index])) {
                    $sortedData[] = $keyMap[$userId][$index];
                } elseif(isset($keyMap[$userId])) {
                    $newIndex = $index % count($keyMap[$userId]);
                    $sortedData[] = $keyMap[$userId][$newIndex];
                }
            }
            $index++;
        }
        return $sortedData;
    }
    public function getUserIdHasMoney(): array
    {
        return DB::table('users')
            ->where('role', 3)
            ->whereRaw('money - amount_spent >= ?', 1000)
            ->pluck('id')->toArray();
    }

    private function checkUserIdHasMoney(): bool
    {
        $userIdInCache = Cache::tags(self::TAG)->get(self::KEY_CACHE_USER_ID_HAS_MONEY);
        $userIdFromDB = $this->getUserIdHasMoney();

        return (!$userIdInCache ||
            !$this->compareArrays($userIdInCache, $userIdFromDB));
    }

    public function setCacheUserIdHasMoney($userID)
    {
        Cache::tags(self::TAG)
            ->put(self::KEY_CACHE_USER_ID_HAS_MONEY, $userID,
                now()->addHours(12));
    }
    public function checkViewPerDay($page): bool
    {
        $now = Carbon::now()->format('Y-m-d');

        $totalView = ViewPartner::query()
            ->where('page_id', $page->id)
            ->where('created_at', $now)
            ->sum('total');

        return $totalView >= $page->view_per_day;
    }

    /**
     * @param $pageIds
     * @return int
     */
    public static function getNextPositionPageRunning($pageIds): int
    {
        $position = Cache::tags(self::TAG)
            ->get(self::KEY_CACHE_POSITION_PAGE_RUNNING);

        $position = intval($position) + 1;

        if ($position >= count($pageIds)) {
            $position = 0;
        }

        $minute = self::getDiffMinutes();

        Cache::tags(self::TAG)
            ->put(self::KEY_CACHE_POSITION_PAGE_RUNNING, $position,
                now()->addMinutes($minute));

        return $position;
    }

    /**
     * @param $pageIds
     * @return void
     */
    public static function setCachePageRunning($pageIds)
    {
        $minute = self::getDiffMinutes();

        Cache::tags(self::TAG)
            ->put(self::KEY_CACHE_ALL_PAGE_RUNNING, $pageIds,
                now()->addMinutes($minute));
    }

    /**
     * @return int
     */
    public static function getDiffMinutes(): int
    {
        $now = Carbon::now();
        $target = Carbon::today()->setTime(23, 59, 59);
        return $now->diffInMinutes($target);
    }

    /**
     * @return void
     */
    public static function flushCache()
    {
        Cache::tags(self::TAG)->flush();
    }

    public function sortPage($data)
    {
        foreach ($data as $v) {
            Page::query()
                ->where('id', $v['id'])
                ->update(['sort' => $v['sort']]);
        }
    }
}
