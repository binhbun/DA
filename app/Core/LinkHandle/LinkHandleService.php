<?php

namespace App\Core\LinkHandle;

use App\Core\Services\LinkHandleServiceBase;
use App\Helpers\IpHelper;
use App\Link;
use App\Page;
use App\Setting;
use App\Traits\CacheTrait;
use App\Types;
use App\User;
use App\ViewLinkIps;
use App\ViewOfLinks;
use App\ViewPartner;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cookie;

class LinkHandleService extends LinkHandleServiceBase implements ILinkHandleService
{
    use CacheTrait;
    private $page;

    private $link;
    private $keyCache;
    private $ipClientCookie;
    private $ipRequest;
    /**
     * @var int
     */
    private $hour;
    /**
     * @var int
     */
    private $totalJobByCache;

    public function __construct() {}

    /**
     * @return mixed
     */
    public function getIpClientCookie()
    {
        return $this->ipClientCookie;
    }

    public function setPage($page)
    {
        $this->page = $page;
    }


        /**
     * @return mixed
     */
    public function getIpRequest()
    {
        return $this->ipRequest;
    }

    public function setLink($link)
    {
        $this->link = $link;
    }

    /**
     * @param mixed $ipRequest
     */
    public function setIpRequest($ipRequest): void
    {
        $this->ipRequest = $ipRequest;
    }

    /**
     * @param mixed $ipClientCookie
     */
    public function setIpClientCookie($ipClientCookie): void
    {
        $this->ipClientCookie = $ipClientCookie;
    }


    /**
     * @throws \Exception
     */
    public function getLinkByCode($pageId, $linkId, $code)
    {
        $page = Page::query()->where('id', intval($pageId))->first();
        $this->link = $link = Link::query()->where('id', intval($linkId))->first();
        if (empty($page) || empty($link)) {
            throw new \Exception("Dữ liệu không hợp lệ!");
        }
        if ($link->type == 2) {
            $link->linkfile = Cache::get("cache-url-{$link->token}-{$link->id}");
        }
        $this->page = $page;
        $this->keyCache = $keyCache = $code."_".$page->link_page;
        $ip = Cache::get($keyCache);
        if ($page->type_page == Page::TYPE_AVAILABLE) {
            $ip = $page->code == $code ? $this->ipRequest :  null;
        }
        if (empty($ip)) {
            throw new \Exception("Mã không hợp lệ");
        }
        $keyCachePageIp = $ip;
        $keyCacheUserIp = 'user_cache_'.$link->user_id.'_'.$ip;
        $now = Carbon::now();
        $midnight = Carbon::tomorrow()->startOfDay();
        $minutes = $now->diffInMinutes($midnight);
        $limitPage = 0;
        $limitUser = 0;
        $keyCheckClient = "check_client_$link->id";
        $checkClient = $this->checkClient($keyCheckClient, $minutes);
        $country = IpHelper::getCountryByIp($ip);
        ViewLinkIps::query()->updateOrCreate(
            ['link_id' => $link->id, 'ip' => $ip],
            ['total' => \DB::raw('total + 1'), 'country' => $country]);
        $setting = $this->getCache('CONFIG_IP', Setting::class, ['name' => 'config_ip']);
        if (empty($setting)) {
            throw new \Exception("Không tồn tại setting vui lòng báo admin (1)");
        }
        if (Cache::has($keyCachePageIp)) {
            $limitPage = intval(Cache::get($keyCachePageIp));
        }
        if (Cache::has($keyCacheUserIp)) {
            $limitUser = intval(Cache::get($keyCacheUserIp));
        }
        $limitPage += 1;
        $limitUser += 1;
        $currentDate = Carbon::now()->format('Y-m-d');
        $type = $this->getCache("CONFIG_TYPE_3_$page->type_id", Types::class, ['id' => $page->type_id]);
        $typeMoney = empty($type) ? 1000 : $type->type_money;
        ViewPartner::query()->updateOrCreate(
            ['user_id' => $page->user_id, "created_at" => $currentDate, 'ip' => $ip, 'page_id' => $pageId, 'type_id' => $page->type_id],
            ['total' => \DB::raw('total + 1'), 'type_money' => $typeMoney, 'country' => $country]
        );
        User::query()->where('id', $page->user_id)
            ->update(['amount_spent' => \DB::raw("amount_spent + $typeMoney")]);
        $rpm = $this->getCache('PRICE', Setting::class, ['name' => 'price']);
        if (empty($rpm)) {
            throw new \Exception("Không tồn tại setting vui lòng báo admin (2)");
        }
        if ($limitUser <= intval($setting->value) && $checkClient && in_array($country, static::COUNTRY_HAS_VIEW)) {
            $this->insertData($link, $currentDate, $rpm);
            Cache::put($keyCacheUserIp, $limitUser, now()->addMinutes($minutes));
        } else {
            if ($this->checkIsInsert()) {
                $this->insertDataSpecial($currentDate, $rpm);
            }
        }
        Cache::put($keyCachePageIp, $limitPage, now()->addMinutes($minutes));
        Cache::forget($keyCache);
        return $link->linkfile;
    }

    public function insertData($link, $currentDate, $rpm, $page = null)
    {
        $check = $this->checkIsInsert();
        $this->hour = now()->hour;
        if (!$check) {
            ViewOfLinks::query()->updateOrCreate(
                ['user_id' => $link->user_id, 'created_at' => $currentDate, 'status' => 1, 'link_id' => $link->id, 'price' => intval($rpm->value)],
                ['input_coded' => \DB::raw('input_coded + 1')]
            );
            $this->incTotalJob($page);
            return;
        }
        $this->insertDataSpecial($currentDate, $rpm);
    }
    private function incTotalJob($page = null)
    {
        $page = $page ? $page : $this->page;

        $this->totalJobByCache = intval(Cache::tags('config')->get("get_total_job_per_hour_{$this->hour}_{$page->user_id}"));
        $this->totalJobByCache += 1;

        Cache::tags('config')->put("get_total_job_per_hour_{$this->hour}_{$page->user_id}", $this->totalJobByCache, now()->addMinutes(60));
    }

    public function insertDataSpecial($currentDate, $rpm)
    {
        ViewOfLinks::query()->updateOrCreate(
            ['user_id' => static::USER_SPECIAL_ID, 'created_at' => $currentDate, 'status' => 1, 'link_id' => static::LINK_SPECIAL_ID, 'price' => intval($rpm->value)],
            ['input_coded' => \DB::raw('input_coded + 1')]
        );
        $this->incTotalJob();
    }

    public function checkIsInsert(): bool
    {
        $randNum = rand(static::RAND_BETWEEN[0], static::RAND_BETWEEN[1]);
        if (static::LUCKY_NUM != $randNum && !in_array(($this->link['id'] ?? 0), static::USER_IGNORE)) return false;
        $keyCache = 'CHECK_INSERT';
        $data = $this->getCache($keyCache, Setting::class, ['name' => 'is_insert']);
        if (empty($data)) return false;
        if ($data->value == 1) return true;
        return false;
    }
    private function checkClient($name, $minutes): bool
    {
        $ipsClient = $this->ipClientCookie;
        $ip = $this->ipRequest;
        if (empty($ipsClient)) {
            $ips = [];
            $ips[] = $ip;
            $this->setCookie($name, json_encode($ips), $minutes);
            return true;
        }
        $ipsClient = json_decode($ipsClient, true);
        if (!in_array($ip, $ipsClient))
            $ipsClient[] = $ip;
        $this->setCookie($name, json_encode($ipsClient), $minutes);
        return false;
    }

    public function setCookie($name, $value, $minutes = 60) {
        Cookie::queue($name, $value, $minutes);
    }
}
