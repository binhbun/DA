<?php
use Illuminate\Support\Facades\Route;
Route::prefix('/payment')->group(function () {
    Route::post('/webhook', [\App\Core\PayOS\Controller\PayOSController::class, 'handlePayOSWebhook']);
});
