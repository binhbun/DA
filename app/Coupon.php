<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    protected $fillable = [
        'code', 'expiry_date', 'min_amount', 'discount'
    ];

    protected $dates = [
        'expiry_date',
    ];

    protected $casts = [
        'discount' => 'float',
    ];
    

    protected static function boot()
    {
        parent::boot();

        static::updated(function ($coupon) {
            event(new \App\Events\CouponUpdated($coupon));
        });
    }

}
