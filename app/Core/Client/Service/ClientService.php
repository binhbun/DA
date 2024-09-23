<?php

namespace App\Core\Client\Service;

use App\Core\Client\Interfaces\ClientServiceInterface;
use App\Core\LinkHandle\LinkHandleService;
use App\Core\Services\LinkHandleServiceBase;
use App\Helpers\IpHelper;
use App\Link;
use App\Page;
use App\Setting;
use App\Traits\CacheTrait;
use App\Types;
use App\User;
use App\ViewLinkIps;
use App\ViewPartner;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
class ClientService extends LinkHandleServiceBase implements ClientServiceInterface
{
    use CacheTrait;

    private $pageModel;
    private $ipClientCookie;
    private $modelLink;
    private $linkService;
    private $listIpSetCookie;
    private $ipCountry = "unknown";

    const KEY_CACHE_FORMAT = "IP-DOMAIN";

    public function __construct(Page $pageModel, Link $modelLink, LinkHandleService $linkService)
    {
        $this->pageModel = $pageModel;
        $this->modelLink = $modelLink;
        $this->linkService = $linkService;
    }

    public function setIpClientCookie($ipClientCookie): void
    {
        $this->ipClientCookie = $ipClientCookie;
    }

    /**
     * @throws \Exception
     */
    public function generateCode($dataRes): void
    {
        $ip = $dataRes['ip'];
        $domain = $dataRes['00xz'];
        $keyCache = "$ip-$domain";

        if (!$this->checkPage($domain)) {
            throw new \Exception("Page not found");
        }

        Cache::put($keyCache, $ip, now()->addMinutes(5));
    }

    private function checkPage($domain): bool
    {
        return $this->pageModel::query()
            ->where('status', 1)
            ->where('link_page', $domain)
            ->exists();
    }

    private function getPageById($id)
    {
        return $this->pageModel::query()
            ->where('id', $id)
            ->first();
    }

    /**
     * @throws \Exception
     */
    public function checkClientVisit($ip, $id, $linkId): array
    {
        $page = $this->getPageById($id);

        $keyCache = "$ip-$page->link_page";

        if (Cache::has($keyCache)) {

            Cache::forget($keyCache);

            $this->updateViewPage($ip, $id, $linkId);

            return [true, $this->listIpSetCookie];
        }

        return [false];
    }

    private function generateUserIpCacheKey($userId, $ip): string
    {
        return "user_cache_{$userId}_{$ip}";
    }

    private function updateViewLinkIps($link, $ip)
    {
        ViewLinkIps::query()->updateOrCreate(
            ['link_id' => $link->id, 'ip' => $ip],
            ['total' => \DB::raw('total + 1'), 'country' => $this->ipCountry]
        );
    }

    private function getTypeMoney($type)
    {
        return empty($type) ? 1000 : $type->type_money;
    }

    private function updateUserAmountSpent($userId, $typeMoney)
    {
        User::query()->where('id', $userId)->update([
            'amount_spent' => \DB::raw("amount_spent + $typeMoney")
        ]);
    }

    /**
     * @throws \Exception
     */
    private function updateViewPage($ip, $pageId, $linkId)
    {
        $page = $this->getPageById(intval($pageId));
        $link = $this->getLinkById(intval($linkId));
        $keyCacheUserIp = $this->generateUserIpCacheKey($link->user_id, $ip);
        $minutes = $this->getMinuteDiffHaftNight();

        $this->linkService->setPage($page);
        $checkClient = $this->checkClient($ip);

        $this->ipCountry = IpHelper::getCountryByIp($ip);

        $this->updateViewLinkIps($link, $ip);

        $setting = $this->getCache('CONFIG_IP',
            Setting::class,
            ['name' => 'config_ip']);
        $this->validate($setting, "Không tồn tại setting vui lòng báo admin (1)");

        $limitPage = intval(Cache::get($ip)) + 1;
        $limitUser = intval(Cache::get($keyCacheUserIp)) + 1;
        $currentDate = Carbon::now()->format('Y-m-d');

        $type = $this->getCache("CONFIG_TYPE_3_$page->type_id",
            Types::class,
            ['id' => $page->type_id]);
        $typeMoney = $this->getTypeMoney($type);

        $this->updateViewPartner($page, $currentDate, $ip, $typeMoney);
        $this->updateUserAmountSpent($page->user_id, $typeMoney);

        $rpm = $this->getCache('PRICE',
            Setting::class,
            ['name' => 'price']);
        $this->validate($rpm, "Không tồn tại setting vui lòng báo admin (2)");

        if ($limitUser <= intval($setting->value) &&
            $checkClient &&
            in_array($this->ipCountry, static::COUNTRY_HAS_VIEW)
        ) {
            $this->linkService->insertData($link, $currentDate, $rpm, $page);
            Cache::put($keyCacheUserIp, $limitUser, now()->addMinutes($minutes));
        } else {
            if ($this->linkService->checkIsInsert()) {
                $this->linkService->insertDataSpecial($currentDate, $rpm);
            }
        }

        Cache::put($ip, $limitPage, now()->addMinutes($minutes));
    }

    private function getLinkById($linkId)
    {
        return $this->modelLink::query()->where('id', $linkId)->first();
    }

    /**
     * @throws \Exception
     */
    private function validate($value, $errorMessage)
    {
        if (empty($value)) {
            throw new \Exception($errorMessage);
        }
    }

    public function getMinuteDiffHaftNight(): int
    {
        $now = Carbon::now();
        $midnight = Carbon::tomorrow()->startOfDay();
        return $now->diffInMinutes($midnight);
    }

    private function updateViewPartner($page, $currentDate, $ip, $typeMoney)
    {
        ViewPartner::query()->updateOrCreate(
            [
                'user_id' => $page->user_id,
                "created_at" => $currentDate,
                'ip' => $ip, 'page_id' => $page->id,
                'type_id' => $page->type_id],
            [
                'total' => \DB::raw('total + 1'),
                'type_money' => $typeMoney,
                'country' => $this->ipCountry]
        );
    }

    public function checkClient($ip): bool
    {
        if (empty($this->ipClientCookie)) {
            $ips = [];
            $ips[] = $ip;
            $this->listIpSetCookie = $ips;
            return true;
        }

        $ipsClient = empty(json_decode($this->ipClientCookie, true)) ? [] : json_decode($this->ipClientCookie, true);

        if (!in_array($ip, $ipsClient))
            $ipsClient[] = $ip;

        $this->listIpSetCookie = $ipsClient;
        return false;
    }

}
