<?php

namespace App\Http\Controllers;

use App\Core\Page\IPageService;
use App\Link;
use App\Page;
use App\Setting;
use App\Traits\CacheTrait;
use App\ViewOfLinks;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    use CacheTrait;

    private $pageService;

    public function __construct(IPageService $service)
    {
        $this->pageService = $service;
    }

    public function sortPage(Request $q)
    {
        $data = $q->input('data', []);
        return $this->pageService->sortPage($data);
    }

    public function getPageByQuickLink()
    {
        $url = urldecode(\request()->get('longurl', ''));
        $token = \request()->get('token', '');

        try {
            if (empty($token) || empty($url)) {
                throw new \Exception('no token');
            }
            $link = Link::query()
                ->where('type', 2)
                ->where('token', $token)
                ->first();
            if (!$link) {
                throw new \Exception('not found');
            }
            $dataCreate = $link->toArray();
            $link = Link::query()
                ->firstOrCreate(['type' => 1, 'token' => $token, 'linkfile' => $url], [
                    'user_id' => $dataCreate['user_id'],
                    'aliases' => Str::random(5),
                    'token' => $token,
                    'type' => 2,
                    'title' => $dataCreate['title'],
                    'linkfile' => $url
                ]);
            return redirect()->route('home.nextpage', $link->aliases);
        } catch (\Exception $ex) {
            return response()->json(['status' => 'error', 'message' => $ex->getMessage()], 400);
        }
    }

    public function getLinkBySlug($slug)
    {
        return Link::query()->where('aliases', $slug)->where('status', 1)->first();
    }

    public function nextPage($slug)
    {
        $link = $this->getLinkBySlug($slug);
        return $this->nextPageHandle($link);
    }

    private function nextPageHandle($link)
    {
        $this->pageService->updateStatusPage();
        $ip = request()->ip();
        $keyCachePage = $ip;
        $setting = Setting::query()->where('name', 'config_ip_page')->first();
        $limit = Cache::get($keyCachePage) ?? 0;

        if (empty($link))
            return "Link đã hết hạn.";

        if (intval($limit) >= intval($setting->value)) {
            return $this->redirectByLink($link);
        }

        $currentDate = Carbon::now()->format('Y-m-d');

        ViewOfLinks::query()->updateOrCreate(
            ['user_id' => $link['user_id'], 'created_at' => $currentDate, 'status' => 1, 'link_id' => $link['id']],
            ['clicked' => \DB::raw('clicked + 1')]
        );

        $page = $this->handleLockRequest();

        if (empty($page)) {
            return $this->redirectByLink($link);
        }
        $title = $page->title;
        $array = explode("\n", $title);
        $rand = rand(0, count($array) - 1);
        $t = $array[$rand] ?? $page->title;

        if ($page->type_page == "v2") {
            return view('adminlte.page.show-v2')->with(['link' => $link, 'page' => $page, 'title' => $t]);
        }

        if ($page->type_page == Page::TYPE_AVAILABLE) {
            return view('adminlte.page.show-available')->with(['link' => $link, 'page' => $page, 'title' => $t]);
        }

        return view('adminlte.page.show')->with(['link' => $link, 'page' => $page, 'title' => $t]);
    }

    private function handleLockRequest()
    {
        $keyLock = "lock:page";
        $page = null;
        try {
            $retryCount = 0;
            $retryLimit = 50; // Số lần thử lại tối đa
            $lockAcquired = null;
            $retryDelay = 100000; // Độ trễ giữa các lần thử lại (microseconds)

            while ($retryCount < $retryLimit) {
                $lockAcquired = Cache::get($keyLock);

                if ($lockAcquired) {
                    usleep($retryDelay);
                }
                $retryCount++;
            }

            if ($lockAcquired) {
                throw new \Exception("is Lock");
            }

            Cache::put($keyLock, 1, now()->addSeconds(20));
            $page = $this->pageService->getPage();
        } catch (\Exception $e) {
            return null;
        } finally {
            Cache::forget($keyLock);
        }
        return $page;
    }

    private function redirectByLink($link): \Illuminate\Http\RedirectResponse
    {
        if (!empty($link['sublink']))
            return \redirect()->to($link['sublink']);

        return \redirect()->to($link['linkfile']);
    }

    public function index()
    {
        return view('user.home');
    }

    public function login()
    {
        Auth::logout();
        return view('user.login');
    }

    public function register()
    {
        return view('user.register');
    }

    public function profile()
    {
        return view('profile');
    }

    public function about()
    {
        return view('user.blog.a');
    }

    public function gallery()
    {
        return view('profile.gallery');
    }

    public function blog()
    {
        return view('user.blog');
    }

    public function dmca()
    {
        return view('user.blog.dmca');
    }

    public function terms()
    {
        return view('user.blog.t');
    }

    public function privacy()
    {
        return view('user.blog.p');
    }

    public function landing()
    {
        return view('profile.langding');
    }
}
