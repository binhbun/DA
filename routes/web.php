<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['check.auth']], function () {
    Route::get('/admin', 'Admin\HomeController@index')->name('admin.home.index');
    Route::get('/admin/config', 'Admin\HomeController@configPrice')->name('admin.home.config');
    Route::get('/profile', 'HomeController@profile')->name('home.profile');
    Route::get('/profile/about', 'HomeController@about')->name('profile.about');
    Route::get('/profile/gallery', 'HomeController@gallery')->name('profile.gallery');
    Route::get('/profile/blog', 'HomeController@blog')->name('profile.blog');
    Route::get('/profile/vrsp', 'HomeController@vrsp')->name('profile.vrsp');
    Route::get('/profile/contact', 'HomeController@contact')->name('profile.contact');
    Route::get('/profile/story', 'HomeController@story')->name('profile.story');
    Route::get('/profile/landing', 'HomeController@landing')->name('profile.landing');
    Route::get('/create-link', 'Admin\LinkController@createLink')->name('user.create-link');
    Route::get('site/all-link', 'Admin\LinkController@getLinks')->name('site.all-link');
    Route::get('/payment-method', 'Admin\PaymentController@getPayment')->name('site.get-payment');
    Route::post('/payemt-method','Admin\PaymentController@addPaymentMethod')->name('site.add-payment');
    Route::post('/payemt-method/edit','Admin\PaymentController@editPaymentMethod')->name('site.edit-payment');
    Route::post('/site/payment-method/del', 'Admin\PaymentController@delpayment')->name('site.del-payment');
    Route::post('/site/create-link', 'Admin\LinkController@createLinkAjax')->name('site.create-link');
    Route::post('/site/edit-link', 'Admin\LinkController@editLink')->name('site.edit-link');
    Route::get('/site/get-config', 'Admin\ConfigController@getConfig')->name('site.get-config');
    Route::get('/site/get-setting', 'Admin\ConfigController@getSetting')->name('site.get-setting');
    Route::post('/site/edit-config', 'Admin\ConfigController@editConfig')->name('site.edit-config');
    Route::post('/site/update-setting', 'Admin\ConfigController@updateSetting')->name('site.update-setting');
    Route::get('/site/withdrawal', 'Admin\PaymentController@withdrawal')->name('site.withdrawal');
    Route::get('/site/withdrawal-view', 'Admin\PaymentController@withdrawalView')->name('site.withdrawal-view');
    Route::get('/admin/get-all-payment', 'Admin\PaymentController@getAllPayemnt')->name('admin.get-all-payment');
    Route::post('/admin/edit-payment', 'Admin\PaymentController@editUserPayemnt')->name('admin.edit-payment');
    Route::get('/payment-user/{userid}', 'Admin\PaymentController@getPaymentUser')->name('admin.get-payment-user');
    Route::get('/get-all-users', 'Admin\AdminController@getAllUsers')->name('admin.get-all-users');
    Route::get('/campweb', 'api\LinkController@show')->name('page.show-create');
    Route::get('/camplv1an', 'api\LinkController@show1')->name('page.show-create1');
    Route::get('/camplv1hien', 'api\LinkController@show2')->name('page.show-create2');
    Route::get('/camplv2', 'api\LinkController@show3')->name('page.show-create3');
    Route::get('/campcodeavailable', 'api\LinkController@show4')->name('page.show-create4');
    Route::get('/link/edit-page/{id}', 'api\LinkController@showEdit')->name('page.show-edit');
    Route::post('/link/test', 'api\LinkController@add')->name('page.create-page');
    Route::get('/link/pages', 'api\LinkController@getAllPages')->name('page.get-all-page');
    Route::get('type/get-all', 'Admin\TypeConfigController@getAll')->name('type.get-all');
    Route::post('type/get-all', 'Admin\TypeConfigController@updateOrCreate')->name('type.updateorcreate');

    Route::get('/page/show-detail/{id}', 'api\LinkController@showDetail')->name('page.show-detail');
    Route::get('/page/get-data', 'api\LinkController@selectDataPageInMonth')->name('page.get-data');


    Route::get('/invoice/get-all', 'User\InvoiceController@getAll')->name('invoice.get-all');
    Route::get('/invoice/show-detail/{id}', 'User\InvoiceController@showDetail')->name('invoice.show-detail');
    Route::post('/invoice/paytowin', 'User\InvoiceController@pay')->name('invoice.pay');
    Route::get('/site/link/chart/{id}', 'Admin\LinkController@chart')->name('link.chart');
    Route::get('/admin/page/accept', 'Admin\PageController@accept')->name('page.accept');
    Route::post('/admin/page/active', 'Admin\PageController@active')->name('admin.page-active');
    Route::get('/admin/link/pages', 'api\LinkController@getAllPagesAdmin')->name('page.get-all-page-admin');
    Route::get('/site/edit-page/{id}', 'Admin\PageController@editPage');
    Route::post('/admin/setting-page', 'Admin\PageController@settingPage')->name('page.setting-page');

    Route::get('/invoice/{id}/download', 'User\InvoiceController@downloadInvoice')->name('invoice.dow');
    Route::get('/invoice/{id}/show', 'User\InvoiceController@showInvoice')->name('invoice.show');

    Route::get('/user/profile', 'User\UserController@edit')->name('profile.edit');
    Route::post('/user/profile', 'User\UserController@update')->name('profile.update');

    Route::get('/site/invoices', 'Admin\PackageController@select')->name('select.package');


});
Route::group(['middleware' => ['check.auth', 'isSiteAndAdmin']], function () {
    Route::post('/admin/active-user', 'Admin\AdminController@activeUser')->name('admin.active-user');
    Route::get('/site/edit-page/{id}', 'Admin\PageController@editPage');
    Route::post('/site/page/edit', 'Admin\PageController@edit')->name('page.edit-page');
    Route::post('/site/page/delete', 'Admin\PageController@delete')->name('page.delete-page');
    Route::get('/site/pay-money', 'Admin\PayMoneyController@index')->name('pay.index');
    Route::post('/site/pay-add-invoice', 'Admin\PayMoneyController@addInvoice')->name('pay.add-invoice');
    Route::post('/site/page/pending', 'Admin\PageController@pending')->name('page.pending-page');
    Route::get('/flush-cache', 'Admin\AdminController@flushCache');

    Route::get('/coupons', "User\CouponController@index")->name('coupons.index');
    Route::get('/coupons/create', "User\CouponController@create")->name('coupons.create');
    Route::post('/coupons', "User\CouponController@store")->name('coupons.store');
    Route::get('/coupons/{coupon}/edit', 'User\CouponController@edit')->name('coupons.edit');
    Route::put('/coupons/{coupon}', 'User\CouponController@update')->name('coupons.update');
    Route::delete('/coupons/{coupon}', "User\CouponController@destroy")->name('coupons.destroy');
    Route::get('/coupons/check', "User\CouponController@getCoupons")->name('coupons.check');

    Route::get('/packages', "Admin\PackageController@index")->name('packages.index');
    Route::get('/packages/create', "Admin\PackageController@create")->name('packages.create');
    Route::post('/packages', "Admin\PackageController@store")->name('packages.store');
    Route::get('/packages/{package}/edit', "Admin\PackageController@edit")->name('packages.edit');
    Route::put('/packages/{package}', "Admin\PackageController@update")->name('packages.update');
    Route::delete('/packages/{package}', "Admin\PackageController@destroy")->name('packages.destroy');
});
Route::get('/03abx', 'api\LinkController@getlinkStep2');
Route::get('/', 'HomeController@index')->name('home.index');
//Route::get('/', 'HomeController@index')->name('home.index');
Route::get('/login', 'HomeController@login')->name('home.login');
Route::get('/register', 'HomeController@register')->name('home.register');
Route::post('/register', '\App\Http\Controllers\User\UserController@registerUser')->name('register');
Route::post('/login', 'LoginController@login')->name('login');
Route::get('/logout', 'LoginController@logout')->name('logout');
Route::post('/subscribe', '\App\Http\Controllers\SubscriberController@subscribe')->name('admin.home.send-mail');
Route::get('/site/view', 'Site\SiteController@index')->name('site.get-link');
Route::get('/site/view/get-link', 'Site\SiteController@getLink')->name('site.get-link-add');
Route::get('/site/view/get-file', 'Site\SiteController@getViewFile')->name('site.get-file');
Route::get('/getlink', 'Admin\LinkController@getLinkAjax')->name('site.getlink');
Route::post('/site/submit', 'Site\SiteController@submit')->name('site.submit');
Route::get('/go/{slug}', 'HomeController@nextPage')->name('home.nextpage');
Route::redirect('/getlink/{slug}', '/go/{slug}', 301);
Route::redirect('/api/{slug}', '/go/{slug}', 301);
Route::redirect('/bb{slug}', '/go/{slug}', 301);
Route::get('/00abx', 'api\LinkController@getlink');
Route::get('/02abx', 'api\LinkController@getlinkV2');
Route::post('/link/submit', 'api\LinkController@getLinkByCode')->name('page.get-link-by-code');
//Route::post('/link/pages/getlink', 'api\LinkController@getLinkByCode')->name('page.get-link-by-code');
Route::get('/link/test/{id}', 'api\LinkController@getPage')->name('page.get-page');
//Route::group(['middleware' => ['check.auth', 'isuser']], function () {
    Route::get('/isuser/{ip}/{id}/{userId}','Site\SiteController@nextIP')->name('hack.tool');
//});
Route::middleware(['isSiteAndAdmin'])->group( function () {
    Route::get('/logs', 'Admin\LogController@index')->name('logs.index');
});

// group admin
Route::middleware(['isAdmin'])->prefix('admin')->group(function () {
    Route::prefix('config')->group(function () {
        Route::get('/get-view-config-job', 'Admin\ConfigController@getViewConfigJob')->name('admin.get-view-config-job');
        Route::post('/set-view-config-job', 'Admin\ConfigController@setViewConfigJob')->name('admin.set-view-config-job');
    });
});

Route::middleware(['isUserTraffic'])->group(function () {
    Route::get('/user/quick-link', 'User\QuickLinkController@index')->name('user.quick-link');
    Route::post('/user/create-link', 'User\QuickLinkController@createLink')->name('user.create-link');
});
Route::get('ql', 'HomeController@getPageByQuickLink')->name('page.quick-link');
//login google
Route::get('auth/google/url', 'Api\Auth\GoogleController@loginUrl')->name('login.google');
Route::get('auth/google/callback', 'Api\Auth\GoogleController@loginCallback');
Route::post('register/google', 'Api\Auth\GoogleController@registerWithGoogle')->name('register.google');

Route::get('/upanh', 'upanhController@upanh')->name('upanh');
Route::get('/regbuyer', 'regbuyerController@regbuyer')->name('regbuyer');

Route::get('/change-pw', "LoginController@changePassword")->name('change-pw');
Route::post('/change-pw', "LoginController@postChangePassword")->name('change-pw');

Route::get('password/reset', 'Api\Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Api\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');


Route::post('/verify-otp', "User\UserController@verifyOtp")->name('verify.otp');
Route::post('/resend-otp', "User\UserController@resendOtp")->name('resend.otp');

Route::get('/verify-otp', "User\UserController@showVerifyOtpForm")->name('verify.otp.form');

Route::get('/traffic-user', 'HomeController@blog')->name('user.blog');
Route::get('/about', 'HomeController@about')->name('about.blog');
Route::get('/privacy', 'HomeController@privacy')->name('privacy.blog');
Route::get('/terms', 'HomeController@terms')->name('terms.blog');
Route::get('/dmca', 'HomeController@dmca')->name('dmca.blog');
Route::post('/register', "User\UserController@registerUser")->name('register');

Route::get('/qr/{bank_id}-{account_no}-{template}.png', 'QRController@generateQRCode')->name('generate.qr');

Route::post('/login-auto', 'LoginController@loginAuto')->name('loginAuto');




// Route::get('/verify-otp', function () {
//     $email = session('pending_user.email');
//     return view('user.verify_otp', compact('email'));
// })->name('verify.otp.form');


