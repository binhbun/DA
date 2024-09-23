<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
class ViewOfLinks extends Model
{
    const STATUS = [0, "Đang hoạt động", "Chờ thanh toán", "Đã thanh toán"];
    protected $table = 'view_of_links';
    public $guarded = [];

}
