<?php

namespace App\Providers;

use App\Core\Page\IPageService;
use App\Core\Page\PageService;
use App\Core\User\IUserService;
use App\Core\User\UserService;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(IPageService::class, PageService::class);
        $this->app->bind(IUserService::class, UserService::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}
