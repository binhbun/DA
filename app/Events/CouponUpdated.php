<?php

namespace App\Events;

use App\Coupon;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CouponUpdated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $coupon;

    public function __construct(Coupon $coupon)
    {
        $this->coupon = $coupon;
    }
}
