<?php

namespace App\Models\Mongo;

use Jenssegers\Mongodb\Eloquent\Model as Moloquent;

class UserLog extends Moloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'user_log';
    protected $guarded = [];
    public $timestamps = false;
}
