<?php

namespace App\Providers;


use Illuminate\Support\Facades\Route;

class CustomRouteServiceProvider extends \Illuminate\Foundation\Support\Providers\RouteServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }

    public function map()
    {
        $this->mapWebRoutes();
    }

    protected function mapWebRoutes()
    {
        Route::middleware('web') // Apply web middleware to your custom routes
        ->namespace($this->namespace)
            ->group(base_path('app/Core/Page/route.php'));
    }
}
