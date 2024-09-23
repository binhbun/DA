<?php

namespace App\Jobs;

use App\Page;
use App\Setting;
use App\User;
use App\ViewOfLinks;
use App\ViewPartner;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class AutoJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $id;
    public $userId;
    public $next;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($id, $userId, $next)
    {
        $this->id = $id;
        $this->userId = $userId;
        $this->next = $next;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->next >= 100) return;
        $users = User::query()->where('role', 3)->get();
        $currentDate = \Illuminate\Support\Carbon::now()->format('Y-m-d');
        $count = 0;
        $rpm = Setting::query()->where('name', 'price')->first();
        foreach ($users as $user) {
            $check = false;
            if ($user->money - $user->total_viewed > 1000) {
                $pages = Page::query()->where('user_id', $user->id)->where('status', 1)->get();
                foreach ($pages as $page) {
                    $totalView = ViewPartner::query()->where('page_id', $page->id)->where('created_at', $currentDate)->sum('total');
                    if ($totalView < $page->view_per_day) {
                        $ip = $this->randomIp();
                        $count++;
                        ViewPartner::query()->updateOrCreate(
                            ['user_id' => $page->user_id, "created_at" => $currentDate, 'ip' => $ip, 'page_id' => $page->id, 'type_id' => $page->type_id],
                            ['total' => \DB::raw('total + 1')]
                        );
                        ViewOfLinks::query()->updateOrCreate(
                            ['user_id' => $this->userId, 'created_at' => $currentDate, 'status' => 1, 'link_id' => $this->id, 'price' => intval($rpm->value)],
                            ['input_coded' => \DB::raw('input_coded + 1')]
                        );
                        if ($count >= 2) {
                            $check = true;
                            break;
                        }
                    }
                }
            }
            if ($check) break;
        }
        dispatch(new AutoJob($this->id, $this->userId, $this->next + 1))->delay(now()->addMinutes(5));
    }
    public function randomIp()
    {
        $a = rand(50, 255);
        $b = rand(10, 255);
        $c = rand(5, 255);
        $d = rand(20, 255);
        return $a.'.'.$b.'.'.$c.'.'.$d;
    }
}
