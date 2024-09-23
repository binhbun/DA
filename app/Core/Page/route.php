<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'isUser'], function () {
    Route::post('/user/add-page', '\App\Http\Controllers\User\PageController@addPage')->name('user.add-page');
    Route::post('/user/edit-page', '\App\Http\Controllers\User\PageController@editPage')->name('user.edit-page');
    Route::post('/user/sort-page', '\App\Http\Controllers\User\PageController@sortPage')->name('page.sort-page');
});
