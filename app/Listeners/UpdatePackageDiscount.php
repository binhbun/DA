<?php

namespace App\Listeners;

use App\Events\CouponUpdated;
use App\Package;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdatePackageDiscount
{
    public function __construct()
    {
        //
    }

    public function handle(CouponUpdated $event)
    {
        $coupon = $event->coupon;

        // Tìm các gói nạp sử dụng mã giảm giá này
        $packages = Package::where('coupon_code', $coupon->code)->get();

        // Cập nhật giảm giá cho các gói nạp liên quan
        foreach ($packages as $package) {
            $package->discount = $coupon->discount;
            $package->save();
        }
    }
}
