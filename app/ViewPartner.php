<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ViewPartner extends Model
{
    protected $table = 'view_partners';
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
