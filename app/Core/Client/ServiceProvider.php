<?php

namespace App\Core\Client;

use App\Core\Client\Interfaces\ClientServiceInterface;
use App\Core\Client\Service\ClientService;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    public function boot()
    {
        $this->app->singleton(ClientServiceInterface::class, ClientService::class);
    }
}
