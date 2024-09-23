<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvoiceUser extends Model
{
    //
    const STATUS = ["Hủy bỏ","Đang hoạt động.", "Chờ thanh toán.","Hoàn thành", "Thanh toán không hợp lệ", "Hoàn tiền", "Đang xử lý"];
    const STATUS_COLOR = ["red","green", "#dd4b39!important","#FF1493","#FFA500","#FFD700", "#dd4b39!important"];
    protected $table = 'invoice_users';
    protected $guarded = [];
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
//    public function Pages()
//    {
//        return $this->hasMany(Page::class, 'invoice_id', 'id');
//    }
//    public function getMoneyAttribute()
//    {
//        $datas =  $this->Pages()->get();
//        $views = 0 ;
//        foreach ($datas as $data) {
//            $views += $data->total_money;
//        }
//        return $views;
//    }
//    public function getStatusAttribute($value){
//        return [self::STATUS[$value],self::STATUS_COLOR[$value]];
//    }

}
