<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Page extends Model
{
    const STATUS = ["Hủy bỏ","Đang hoạt động", "Tạm Ngưng","Hoàn thành", "Chờ thanh toán", "Hoàn tiền", "Đang xử lý"];
    const STATUS_COLOR = ["red","green", "#dd4b39!important","#FF1493","#FFA500","#FFD700", "#dd4b39!important"];
    protected $table = 'pages';
    protected $guarded = [];
    const TYPE_PAGE = ['v1' =>'v1', 'v2' => 'v2', 'available' => 'available'];
    const TYPE_AVAILABLE = 'available';
    public function viewPartners()
    {
        return $this->hasMany(ViewPartner::class, 'page_id', 'id');
    }
    public function Types()
    {
        return $this->hasOne(Types::class, 'id', 'type_id');
    }
    public function getStatusAttribute($value){

        return [self::STATUS[$value],self::STATUS_COLOR[$value]];
    }

    public function getViewTodayAttribute(){
        $today = Carbon::today()->format('Y-m-d');
        return $this->viewPartners()->where('status', 1)->where('created_at', $today)->sum('total');
    }

    public function getAllViewedAttribute(){
        return $this->viewPartners()->sum('total');
    }
    public function getTypeAttribute(){
        $type = $this->Types()->first();
        return $type->name ?? '';
    }

    public function getTotalMoneyAttribute(){
        $type = $this->Types()->first();
        $money =  $this->total_view * ($type->type_money ?? 1000);
        return $money;
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
