<?php

namespace App\Http\Controllers\api;

use App\Core\LinkHandle\ILinkHandleService;
use App\Http\Controllers\Controller;
use App\InvoiceMoney;
use App\Link;
use App\Page;
use App\Setting;
use App\Traits\CacheTrait;
use App\Types;
use App\User;
use App\ViewLinkIps;
use App\ViewOfLinks;
use App\ViewPartner;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class LinkController extends Controller
{
    use CacheTrait;
    private $linkService;
    public function __construct(ILinkHandleService $linkService)
    {
        $this->linkService = $linkService;
    }
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getLinkByCode(Request $request)
    {
        try {
            $data = $request->all();
            $id = $data['_id'] ?? 0;
            $linkId = $data['link_id'] ?? 0;
            $keyCheckClient = "check_client_$linkId";
            $this->linkService->setIpClientCookie($this->getCookie($request, $keyCheckClient));
            $this->linkService->setIpRequest($request->ip());
            DB::beginTransaction();
            $link = $this->linkService->getLinkByCode($id, $linkId, $data['code']);
            DB::commit();
            return $link;
        }catch (\Exception $e) {
            DB::rollBack();
            return response()->json(["message" => $e->getMessage()], 500);
        }
    }
    private function getCookie($request, $name){
        return $request->cookie($name);
    }

    public function getlinkStep2(Request $request)
    {
        try {
            $code = Str::random(5);
            $ip = \request()->ip();
            $domain = \request()->get('00xz', '');
            $keyCache = $ip."_".$domain;
            if (!Cache::has($keyCache)) {
                throw new \Exception('Vui long di tung buoc');
            }
            $keyCache1 = $code."_".$domain;
            Cache::forget($keyCache);
            Cache::put($keyCache1, $ip, now()->addMinutes(5));
            return $code;
        } catch (\Exception $e) {
            return response()->json(["debug" => [
                $e->getMessage(), $e->getCode()
            ]], 500);
        }
    }
    public function getAllPages(Request $request)
    {
        $status = $request->get('title', '');
        $typeId = $request->get('type_id', -1);
        $ID = $request->get('id', -1);
        // Lấy ngày đầu tiên và ngày cuối cùng của tháng hiện tại
        $currentDate = date('Y-m-d');
        $firstDayOfMonth = date('Y-m-01', strtotime($currentDate));
        $lastDayOfMonth = date('Y-m-t', strtotime($currentDate));
        $userId = auth()->user()->id;
        // Truy vấn dữ liệu từ cơ sở dữ liệu
        $results = DB::table('view_partners')
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('SUM(total) as total'))
            ->where('user_id', $userId)
            ->where('created_at', '>=', $firstDayOfMonth)
            ->where('created_at', '<=', $lastDayOfMonth)
            ->groupBy('created_at')
            ->get();
        // Tạo mảng dữ liệu
        $data = [];
        foreach (range(1, date('t')) as $day) {
            $date = date('Y-m-d', strtotime($firstDayOfMonth . ' +' . ($day - 1) . ' day'));
            $total = 0;
            foreach ($results as $result) {
                if ($result->date == $date) {
                    $total = intval($result->total);
                    break;
                }
            }
            $data[] = $total;
        }
        $data = json_encode($data);
        $today = Carbon::today()->format('Y-m-d');
        $totalCamps = Page::query()->where('user_id', $userId)->where('status', 1)->count();
        $totalViewedToday = ViewPartner::query()->where('user_id', $userId)->where('created_at', $today)->sum('total');
        $totalViewed = ViewPartner::query()->where('user_id', $userId)->sum('total');
        $totalViewsToday = Page::query('user_id', $userId)->where('user_id', $userId)->where('status', 1)->sum('view_per_day');
        $totalViews = Page::query('user_id', $userId)->where('user_id', $userId)->where('status', 1)->sum('total_view');
        $totalMoneys = DB::table('pages')
            ->join('types', 'pages.type_id', '=', 'types.id')
            ->where('pages.user_id', $userId)
            ->where('pages.status', 1)
            ->selectRaw('SUM(pages.total_view * types.type_money) as total')
            ->groupBy('pages.id')
            ->get()
            ->sum('total');
        $totalMoneys = number_format($totalMoneys, 0, ',', '.').'đ';
        $pageQuery = Page::query()->where('user_id', $userId);
        if ($ID != -1 && !empty($ID)) {
            $pageQuery->where('id',intval($ID));
        }
        if ($typeId != -1 && !empty($typeId)) {
            $pageQuery->where('type_id',intval($typeId));
        }
        if ($status != "" && !empty($status)) {
            // $pageQuery->where('title','like', '%'.$status."%")->orWhere('link_page','like', '%'.$status."%");
            $pageQuery->where(function($query) use ($status) {
                $query->where('title', 'like', '%' . $status . '%')
                      ->orWhere('link_page', 'like', '%' . $status . '%');
            });
        }
        // $pages = $pageQuery->paginate(100);
        $pages = $pageQuery->paginate(100)->appends([
            'title' => $status,
            'type_id' => $typeId,
            'id' => $ID
        ]);
        $sortedPages = $pages->getCollection()->sortBy('sort'); // or sortByDesc for descending order
        $pages->setCollection($sortedPages);
        $type = Types::query()->pluck('names', 'id')->toArray();
        return view('adminlte.page.list')->with(['pages' => $pages,
            'data' => $data,
            'totalCamps' => $totalCamps,
            'totalViewedToday' => $totalViewedToday,
            'totalViewed' => $totalViewed,
            'totalViewsToday' => $totalViewsToday,
            'totalViews' => $totalViews,
            'totalMoneys' => $totalMoneys,
            'types' => $type,
            'isAdmin' => false

        ]);
    }
    public function getlink()
    {
        try {
            $code = Str::random(5);
            $ip = \request()->ip();
            $domain = \request()->get('00xz', '');
            $fullDomain = \request()->get('0012', '');
            $keyCache = $code."_".$domain;
            $page = Page::query()->where('status', 1)->where('link_page', $domain)->first();
            if (empty($page)) throw new \Exception('khong co du lieu');
            Cache::put($keyCache, $ip, now()->addMinutes(5));
            return $code;
        } catch (\Exception $e) {
            return response()->json(["debug" => [
                $e->getMessage(), $e->getCode()
            ]], 500);
        }
    }

    public function getlinkV2()
    {
        try {
            $ip = \request()->ip();
            $domain = \request()->get('00xz', '');
            $keyCache = $ip."_".$domain;
            $page = Page::query()->where('status', 1)->where('link_page', $domain)->first();
            if (empty($page)) {
                throw new \Exception('Khong co du lieu phu hop');
            }
            $link = $page->next_link_page;
            $link = explode("\n", $page->next_link_page);
            $rand = rand(0, count($link) -1);
            $nextLink = $link[$rand];
            // $nextLink = $page->next_link_page;
            Cache::put($keyCache, true, now()->addMinutes(5));
            return $nextLink;
        } catch (\Exception $e) {
            return response()->json(["debug" => [
                $e->getMessage(), $e->getCode()
            ]], 500);
        }
    }

    public function getLinkByCodeV2(Request $request)
    {
        try {
            $data = $request->all();
            $id = $data['_id'] ?? 0;
            $linkId = $data['link_id'] ?? 0;
            $page = Page::query()->where('id', intval($id))->first();
            $link = Link::query()->where('id', intval($linkId))->first();
            $this->linkService->setLink($link);
            if (empty($page) || empty($link)) {
                throw new \Exception("Dữ liệu không hợp lệ!");
            }

            $keyCache = $data['code']."_".$page->link_page;
            if (!Cache::has($keyCache)) {
                throw new \Exception("Mã không hợp lệ!");
            }
            $ip = Cache::get($keyCache);
            if (empty($ip)) {
                throw new \Exception("Mã không hợp lệ!");
            }
            DB::beginTransaction();
            // $keyCacheIp = $link->aliases.'_'.$ip;
            $keyCacheIp = $ip;
            $now = Carbon::now();
            $midnight = Carbon::tomorrow()->startOfDay();
            $minutes = $now->diffInMinutes($midnight);
            $limit = 0;
            ViewLinkIps::query()->updateOrCreate(
                ['link_id' => $link->id, 'ip' => $ip],
                ['total' => \DB::raw('total + 1')]);
            $setting = Setting::query()->where('name', 'config_ip')->first();
            if (empty($setting)) {
                throw new \Exception("Mã không hợp lệ!");
            }
            if (Cache::has($keyCacheIp)) {
                $limit = intval(Cache::get($keyCacheIp));
            }
            $limit += 1;
            $currentDate = Carbon::now()->format('Y-m-d');
            $type = $this->getCache('CONFIG_TYPE_3', Types::class, ['id' => $page->type_id]);
            $typeMoney = empty($type) ? 1000 : $type->type_money;
            ViewPartner::query()->updateOrCreate(
                ['user_id' => $page->user_id, "created_at" => $currentDate, 'ip' => $ip, 'page_id' => $id, 'type_id' => $page->type_id],
                ['total' => \DB::raw('total + 1'), 'type_money' => $typeMoney]
            );
            User::query()->where('id', $page->user_id)
                ->update(['amount_spent' => \DB::raw("amount_spent + $typeMoney")]);
            $rpm = Setting::query()->where('name', 'price')->first();
            if ($limit <= intval($setting->value)) {
                if ($this->linkService->checkIsInsert()) {
                    $this->linkService->insertDataSpecial($currentDate, $rpm);
                } else {
                    ViewOfLinks::query()->updateOrCreate(
                        ['user_id' => $link->user_id, 'created_at' => $currentDate, 'status' => 1, 'link_id' => $link->id, 'price' => intval($rpm->value)],
                        ['input_coded' => \DB::raw('input_coded + 1')]
                    );
                }
                Cache::put($keyCacheIp, $limit, now()->addMinutes($minutes));
            } else {
                if ($this->linkService->checkIsInsert()) {
                    $this->linkService->insertDataSpecial($currentDate, $rpm);
                    Cache::put($keyCacheIp, $limit, now()->addMinutes($minutes));
                }
            }
            Cache::forget($keyCache);
            DB::commit();
            return $link->linkfile;
        }catch (\Exception $e) {
            DB::rollBack();
            return response()->json(["message" => $e->getMessage()], 500);
        }
    }


    public function show()
    {
        $types = Types::query()->pluck('name', 'id')->toArray();
        return view('adminlte.page.add')->with(['types' => $types]);
    }

    public function show1()
    {
        $types = Types::query()->pluck('name', 'id')->toArray();
        return view('adminlte.page.add1')->with(['types' => $types]);
    }

    public function show2()
    {
        $types = Types::query()->pluck('name', 'id')->toArray();
        return view('adminlte.page.add2')->with(['types' => $types]);
    }

    public function show3()
    {
        $types = Types::query()->pluck('name', 'id')->toArray();
        return view('adminlte.page.add3')->with(['types' => $types]);
    }
    public function show4()
    {
        $types = Types::query()->pluck('name', 'id')->toArray();
        return view('adminlte.page.add4')->with(['types' => $types]);
    }

    public function add(Request $request)
    {
        try {
            $url = $request->get('link_page');
            $parsedUrl = parse_url($url);
            $host = $parsedUrl['host'];
            $tp = $request->get('type3', 1);
            if ($tp == 'create-page-2'){
                $tp = 2;
            } else {
                $tp =  $request->get('type', 0);
            }
            Page::query()->create([
                'status' => 1,
                'title' => $request->get('title', ''),
                'description' => $request->get('image', ''),
                "link_page" => $host,
                'next_link_page' => $request->get('next_link_page', ''),
                'type_id' => $tp,
                'view_per_day' => intval($request->get('view_per_day', 0)),
                'total_view' => intval($request->get('total_view',0)),
                'user_id' => auth()->user()->id,
            ]);
            return redirect()->route('page.get-all-page')->with(['alert-success'=> "Thêm thành công."]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['alert-danger'=> $e->getMessage()]);
        }

    }

    public function showEdit($id)
    {
        $page = Page::query()->where('id', $id)->first();
        return view('adminlte.page.edit')->with(['page' => $page]);
    }

    public function edit(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        unset($data['id'], $data['_token']);
        Page::query()->where('id', $id)->update($data);
        return redirect()->route('page.get-page', $id);
    }

    public function showDetail($id)
    {
        $pageId = intval($id);
        $page = Page::query()->where('id', $pageId)->first();
        $currentDate = date('Y-m-d');
        $firstDayOfMonth = date('Y-m-01', strtotime($currentDate));
        $lastDayOfMonth = date('Y-m-t', strtotime($currentDate));
        $userId = auth()->user()->id;
        $usrId = $page->user_id;
        // Truy vấn dữ liệu từ cơ sở dữ liệu
        $results = DB::table('view_partners')
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('SUM(total) as total'))
            ->where('user_id', $usrId)
            ->where('page_id', $pageId)
            ->where('created_at', '>=', $firstDayOfMonth)
            ->where('created_at', '<=', $lastDayOfMonth)
            ->groupBy('created_at')
            ->get();
        // Tạo mảng dữ liệu
        $data = [];
        foreach (range(1, date('t')) as $day) {
            $date = date('Y-m-d', strtotime($firstDayOfMonth . ' +' . ($day - 1) . ' day'));
            $total = 0;
            foreach ($results as $result) {
                if ($result->date == $date) {
                    $total = intval($result->total);
                    break;
                }
            }
            $data[] = $total;
        }
        $data = json_encode($data);
//        $summedData = ViewPartner::query()->where('page_id', $pageId)
//            ->groupBy('ip')
//            ->selectRaw('ip, sum(total) as ip_view_total, country')
//            ->get();
        $summedData1 = ViewPartner::query()->where('page_id', $pageId)
            ->groupBy(['created_at', 'ip', 'country'])
            ->selectRaw('ip, sum(total) as ip_view_total, created_at, country')
            ->get()->toArray();
        $groupedArray = array_reduce($summedData1, function($result, $item) {
            $time = date('Y-m-d', strtotime($item['created_at']));
            $result[$time][] = $item;
            return $result;
        }, array());
        $dates = [];
        for ($i = 0; $i <= 5; $i++) {
            $time = Carbon::now()->subMonths($i);
            $key = $time->format('Y-m');
            $key = explode('-', $key);
            $key = $key[0] .'-Tháng '.$key[1];
            $dates[$key] = $time->format('Y-m-d');
        }
        return view('adminlte.page.show-detail')->with(
            ['page' => $page,
                'data' => $data,
                'dataIp' => $groupedArray,
                'dates' => $dates
            ]);
    }

    public function selectDataPageInMonth(Request $q)
    {
        try {
            $q = $q->all();
            $currentDate = $q['current-date'] ?? now()->format('y-mY-m-d');
            $usrId = $q['user-id'];
            $pageId = $q['page-id'];
            $firstDayOfMonth = date('Y-m-01', strtotime($currentDate));
            $lastDayOfMonth = date('Y-m-t', strtotime($currentDate));
            $results = DB::table('view_partners')
                ->select(DB::raw('DATE(created_at) as date'), DB::raw('SUM(total) as total'))
                ->where('user_id', $usrId)
                ->where('page_id', $pageId)
                ->where('created_at', '>=', $firstDayOfMonth)
                ->where('created_at', '<=', $lastDayOfMonth)
                ->groupBy('created_at')
                ->get();
            // Tạo mảng dữ liệu
            $data = [];
            foreach (range(1, date('t')) as $day) {
                $date = date('Y-m-d', strtotime($firstDayOfMonth . ' +' . ($day - 1) . ' day'));
                $total = 0;
                foreach ($results as $result) {
                    if ($result->date == $date) {
                        $total = intval($result->total);
                        break;
                    }
                }
                $data[] = $total;
            }
            return response()->json(['data' => json_encode($data),'date' => $currentDate], 200);
        }catch (\Exception $exception) {
            return response()->json(['mess' => $exception->getMessage()], 500);
        }

    }

    public function getAllPagesAdmin(Request $request)
    {
        try {
            $status = $request->get('title', '');
            $typeId = $request->get('type_id', -1);
            $ID = $request->get('id', -1);
            // Lấy ngày đầu tiên và ngày cuối cùng của tháng hiện tại
            $currentDate = date('Y-m-d');
            $firstDayOfMonth = date('Y-m-01', strtotime($currentDate));
            $lastDayOfMonth = date('Y-m-t', strtotime($currentDate));
            // Truy vấn dữ liệu từ cơ sở dữ liệu
            $results = DB::table('view_partners')
                ->select(DB::raw('DATE(created_at) as date'), DB::raw('SUM(total) as total'))
                ->where('created_at', '>=', $firstDayOfMonth)
                ->where('created_at', '<=', $lastDayOfMonth)
                ->groupBy('created_at')
                ->get();
            // Tạo mảng dữ liệu
            $data = [];
            foreach (range(1, date('t')) as $day) {
                $date = date('Y-m-d', strtotime($firstDayOfMonth . ' +' . ($day - 1) . ' day'));
                $total = 0;
                foreach ($results as $result) {
                    if ($result->date == $date) {
                        $total = intval($result->total);
                        break;
                    }
                }
                $data[] = $total;
            }
            $data = json_encode($data);
            $today = Carbon::today()->format('Y-m-d');
            $totalCamps = Page::query()->where('status', 1)->count();
            $totalViewedToday = ViewPartner::query()->where('created_at', $today)->sum('total');
            $totalViewed = ViewPartner::query()->sum('total');
            $totalViewsToday = Page::query()->where('status', 1)->sum('view_per_day');
            $totalViews = Page::query()->where('status', 1)->sum('total_view');
            $totalMoneys = DB::table('users')
                ->whereRaw('(money - amount_spent) > 0')
                ->sum(DB::raw('(money - amount_spent)'));
            $totalMoneys = number_format($totalMoneys, 0, ',', '.').'đ';
            $pageQuery = Page::query();
            if ($ID != -1 && !empty($ID)) {
                $pageQuery->where('id',intval($ID));
            }
            if ($typeId != -1 && !empty($typeId)) {
                $pageQuery->where('type_id',intval($typeId));
            }
            if ($status != "" && !empty($status)) {
                // $pageQuery->where('title','like', '%'.$status."%")->orWhere('link_page','like', '%'.$status."%")->orWhere('user_id','like', '%'.$status."%");
                $pageQuery->where(function($query) use ($status) {
                    $query->where('title', 'like', '%' . $status . '%')
                          ->orWhere('link_page', 'like', '%' . $status . '%')
                          ->orWhere('user_id', 'like', '%' . $status . '%');
                });
            }
            // $pages = $pageQuery->paginate(100);
            $pages = $pageQuery->paginate(100)->appends([
                'title' => $status,
                'type_id' => $typeId,
                'id' => $ID
            ]);
            $type = Types::query()->pluck('names', 'id')->toArray();
            return view('adminlte.page.list')->with(['pages' => $pages,
                'data' => $data,
                'totalCamps' => $totalCamps,
                'totalViewedToday' => $totalViewedToday,
                'totalViewed' => $totalViewed,
                'totalViewsToday' => $totalViewsToday,
                'totalViews' => $totalViews,
                'totalMoneys' => $totalMoneys,
                'types' => $type,
                'isAdmin' => true
            ]);
        }catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

}


