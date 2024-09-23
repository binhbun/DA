@extends('adminlte.layouts.app')
@section('content')
    <div style="margin: 20px">
        <div class="table__type-css">
            <center><h3 style="font-weight: 700">Hóa đơn số {{$invoice->id}}</h3></center>
            <hr>
            <center><legend>Chi Tiết Hóa Đơn</legend></center>
            <div>
                <span>Trạng thái</span>
                <span><span style="background-color: {{$invoice->status[1]}}; border-radius: 10px; padding: 5px;color: white">{{$invoice->status[0]}}</span></span>
            </div>
            <!--<div>-->
            <!--    <span>Mô Tả</span>-->
            <!--    <span>{{$invoice->description}}</span>-->
            <!--</div>-->
            <div>
                <span>Số tiền</span>
                <span>{{$invoice->money}}</span>
            </div>
            <div>
                <span>Phương thức thanh toán</span>
                <span>{{$invoice->payment_method}}</span>
            </div>
            <!--<div>-->
            <!--    <span>Ngày thanh toán</span>-->
            <!--    <span>{{$invoice->date_pay}}</span>-->
            <!--</div>-->
            <div>
                <span>Tạo</span>
                <span>{{$invoice->created_at}}</span>
            </div>
            <hr>
            <center><legend style="font-weight: 700">Phương thức thanh toán</legend></center>
            <select id="select-payment" style="padding: 5px; margin-left: 10px">
                <option value="0">Chọn phương thức</option>
                @foreach($banks as $key => $bank)
                    <option value="{{$key}}">{{$key}}</option>
                @endforeach
            </select>
            <hr>
            @foreach($banks as $key => $bank)
            <center><p  style="font-weight: 700">Chuyển tiền vào 1 trong 2 tài khoản ngân hàng bên dưới</p></center>
                    @foreach($bank as $value)
                    <div class="{{$key}}">
                    <div>
                        <span>Tên chủ tài khoản</span>
                        <span>{{$value->bank_account}}</span>
                    </div>
                    <div>
                        <span>Ngân Hàng</span>
                        <span>{{$value->bank_name}}</span>
                    </div>
                    <div>
                        <span>Số tài khoản</span>
                        <span>{{$value->bank_number}}</span>
                    </div>
                    <div>
                        <span>Nội dung</span>
                        <span>{{(!empty($invoice->user()->first()->name) ? $invoice->user()->first()->name : '<username>'). ' thanh toán hóa đơn số ' .$invoice->id}}</span>
                    </div>
                <hr>
                </div>
            @endforeach
            @endforeach
            <div style="width: 100%; display: flex; justify-content: center; padding: 20px">
                <button class="btn btn-primary" onclick="payToWin('{{$invoice}}')">Thanh Toán Hóa Đơn</button>
            </div>
            <hr>
            <center><p  style="font-weight: 700">Liên hệ admin để được duyệt thanh toán nhanh hơn zalo: 0965870531 or 0327305966</p></center>
        </div>
    </div>
@endsection
<style>
    .table__type-css{
        overflow: auto;
        background-color: white;
        border-top: 2px solid #0b97c4;
        border-radius: 3px 3px;
    }
    .table__type-css > div{
        padding: 10px;
        display: flex;
        gap: 5px;
    }
    .table__type-css > div > span:nth-child(1){
        font-weight: 700;
        flex-basis: 30%;
    }
    .table__type-css > div > span:nth-child(2){
        flex-basis: 70%;
    }
    @foreach($banks as $key => $bank)
        .{{$key}}{
        display: flex;
        flex-direction: column;
    }
    .{{$key}} > div{
        padding: 5px;
        display: flex;
        gap: 5px;
    }
    .{{$key}} > div > span:nth-child(1){
        font-weight: 700;
        flex-basis: 30%;
    }

    @endforeach
</style>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>

<script>
    function addData(data) {
        if (data) {
            data = JSON.parse(data)
            $('#id').val(data.id)
            $('#name').val(data.name)
            $('#type_money').val(data.type_money)
        } else {
            $('#id').val('')
            $('#name').val('')
            $('#type_money').val('')
        }
    }
    let arr = []
    $(document).ready(function (e) {
        @foreach($banks as $key => $bank)
        $(`.{{$key}}`).hide()
        arr.push('{{$key}}')
        @endforeach
        $('#select-payment').change(function (e){
            const val = $(this).val()
            if (val == 0) {
                for (const valKey in arr) {
                    $(`.${arr[valKey]}`).hide()
                }
            }else {
                for (const valKey in arr) {
                    $(`.${arr[valKey]}`).hide()
                }
                $(`.${val}`).show()
            }
        }).trigger('change')
    })
    function payToWin(data) {
        const v = $('#select-payment').val()
        if (v == 0) {
            toastr.error("Vui lòng chọn phương thức thanh toán.")
            return
        }
        data = JSON.parse(data)
        data.payment_method = v
        data._token = '{{csrf_token()}}'
        $.ajax({
            type: 'post',
            data: data,
            url: '{{route('invoice.pay')}}',
            success: function (dt){
                toastr.success(dt)
            },
            error: function (err) {
                console.log(err)
                toastr.error('đã có lỗi xảy ra. Vui lòng liên hệ admin để được hỗ trợ.')
            }
        })
    }
</script>
