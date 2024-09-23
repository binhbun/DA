<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = ['name', 'amount', 'coupon_code', 'discount'];

    protected $casts = [
        'discount' => 'float',
    ];
    
}
