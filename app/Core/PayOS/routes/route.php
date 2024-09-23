<?php

use Illuminate\Support\Facades\Route;

    Route::get('/', function () {
        return view('Payos.checkout');
    });

    Route::get('/success', function () {
        return view('Payos.success');
    });

    Route::get('/cancel', function () {
        return view('Payos.cancel');
    });

    Route::post('/create-payment-link', [\App\Core\PayOS\Controller\CheckoutController::class, 'createPaymentLink'])->name('payos.checkout');

    Route::prefix('/order')->group(function () {
        Route::post('/create', [\App\Core\PayOS\Controller\OrderController::class, 'createOrder']);
        Route::get('/{id}', [\App\Core\PayOS\Controller\OrderController::class, 'getPaymentLinkInfoOfOrder']);
        Route::put('/{id}', [\App\Core\PayOS\Controller\OrderController::class, 'cancelPaymentLinkOfOrder']);
    });


