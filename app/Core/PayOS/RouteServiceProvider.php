<?php

namespace App\Core\PayOS;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Core\PayOS\Controller';

    /**
     * The path to the "home" route for your application.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //
        $this->mapApiRoutes();

    }
    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::group([
            'prefix' => 'payos',
            'namespace' => $this->namespace,
            'middleware' => 'web',
        ], function () {
            $this->loadRoutesFrom(__DIR__ . '/routes/route.php');
        });
        Route::group([
            'prefix' => 'payos',
            'namespace' => $this->namespace,
            'middleware' => 'api',
        ], function () {
            $this->loadRoutesFrom(__DIR__ . '/routes/api.php');
        });
    }

}
