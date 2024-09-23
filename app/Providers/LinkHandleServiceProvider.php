<?php

namespace App\Providers;

use App\Core\LinkHandle\ILinkHandleService;
use App\Core\LinkHandle\LinkHandleService;
use Illuminate\Support\ServiceProvider;

class LinkHandleServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ILinkHandleService::class, LinkHandleService::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
