<?php

namespace App;

use App\Models\ConfigJob;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role', 'role_active', 'pwd','amount_spent', 'money', 'hoten', 'sdt', 'diachi',
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function views()
    {
        return $this->hasMany(Money::class);
    }
        public function viewOfLinks()
    {
        return $this->hasMany(ViewOfLinks::class,'user_id', 'id');
    }
    public function pages()
    {
        return $this->hasMany(Page::class,'user_id', 'id');
    }

    public function configJob(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(UserAttributes::class,'user_id', 'id')
            ->where('model_type', ConfigJob::class)->withDefault(['value' => "F"]);
    }

    public function invoices()
    {
        return $this->hasMany(Invoices::class,'user_id', 'id');
    }

    public function invoiceMoney()
    {
        return $this->hasMany(InvoiceMoney::class,'user_id', 'id');

    }
    public function viewPartners()
    {
        return $this->hasMany(ViewPartner::class,'user_id', 'id');
    }
    public function getTotalMoneyAttribute()
    {
        return $this->invoiceMoney()->where('status', 3)->sum('money');
    }
    public function getTotalViewedAttribute()
    {
        return $this->amount_spent;
    }

}
