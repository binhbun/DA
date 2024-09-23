<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
class Link extends Model
{
    protected $table = 'links';
    public $guarded = [];
    const STATUS = [0, "Đang hoạt động", "Dừng hoạt động"];
    public function viewOfLinks()
    {
        return $this->hasMany(ViewOfLinks::class, 'link_id', 'id');
    }

}
