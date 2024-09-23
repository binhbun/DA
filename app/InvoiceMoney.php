<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvoiceMoney extends Model
{
    //
    const STATUS = ["Chờ thanh toán.","Đang hoạt động.", "Chờ thanh toán.","Hoàn thành", "Thanh toán không hợp lệ", "Hoàn tiền", "Đang xử lý"];
    const STATUS_COLOR = ["red","green", "#dd4b39!important","#FF1493","#FFA500","#FFD700", "#dd4b39!important"];
    protected $table = 'invoice_money';
    protected $guarded = [];
    public function getStatusAttribute($value){
        return [self::STATUS[$value],self::STATUS_COLOR[$value]];
    }
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
