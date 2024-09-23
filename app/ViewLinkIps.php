<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
class ViewLinkIps extends Model
{
    protected $table = 'view_link_ips';
    public $guarded = [];
}
