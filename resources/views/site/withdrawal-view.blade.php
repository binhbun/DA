@extends('adminlte.layouts.app')

@section('content')

    <section class="content-header" style="margin-bottom: 30px">
        <h1>


        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Dashboard</li>
        </ol>
    </section>

    <div style="width: 100%; display: flex; justify-content: center;">
        <div style="width: 95%; height: max-content;
     border: 1px solid #f8f8f8; border-radius: 5px; background-color: white; border-radius: 3px 3px; border-top: 3px solid green"
        >
            <div style="padding: 5px;">
                <h3><strong>Rút Tiền</strong></h3>
            </div>
            <div style="padding: 30px">
                <div>
                    <div
                        style="margin-right: -10px"
                    >
                        <i
                            style="color:purple;font-size: 30px; margin-left: 8px"
                            class="fa fa-plus-circle"></i>
                    </div>
                    <div
                        style="height: 50px;
                    border-left: 1px solid #eee6e6; margin-left: 20px;
                    padding-bottom: 110px"
                    >
                        <div
                            style="margin-top: -41px;
                        padding-left: 50px;display: flex; flex-direction: column"
                        >
                            <span style="font-size: 25px">{{$current}}</span>
                            <span style="font-size: 20px; color: #a49f9f">Thu nhập.</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        style="margin-right: -10px"
                    >
                        <i
                            style="color:#ff8800;font-size: 30px; margin-left: 8px"
                            class="fa fa-warning"></i>
                    </div>
                    <div
                        style="height: 50px;
                    border-left: 1px solid #eee6e6; margin-left: 20px;
                    padding-bottom: 110px"
                    >
                        <div
                            style="margin-top: -41px;
                        padding-left: 50px;display: flex; flex-direction: column"
                        >
                            <span style="font-size: 25px">{{$pending}}</span>
                            <span style="font-size: 20px; color: #a49f9f">Đang chờ xử lý.</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        style="margin-right: -10px"
                    >
                        <i
                            style="color:green;font-size: 30px; margin-left: 8px"
                            class="fa fa-check-circle"></i>
                    </div>
                    <div
                        style="height: 50px; width: 300px;
                    margin-left: 20px;
                    padding-bottom: 110px"
                    >
                        <div
                            style="margin-top: -41px;
                        padding-left: 50px;display: flex; flex-direction: column"
                        >
                            <span style="font-size: 25px">{{$done}}</span>
                            <span style="font-size: 20px; color: #a49f9f">Thành công.</span>
                        </div>
                    </div>
                </div>


            </div>
            <div style="width: 100%; display: flex; justify-content: center"  >
                <button id="withdrawal-button" onclick="withdrawal('{{$money}}', '{{$setting}}')" class="btn btn-primary">Rút Tiền</button>
            </div>
            <hr>
            <div class="box-body">
            <p class="announcement">
            <span>
                             <h3 style="color:#e74c3c;">    <i class="fa fa-angle-double-right"></i>Thông tin liên hệ</h3>
                            </span><div><h4>⭐ Cập nhật thông tin tại channel<strong> <a href="https://t.me/webvipmoney" target="_blank" style="color:#e74c3c;"> Channel WebMoney </a></strong></h4>
	<h4>⭐ Mọi th&ocirc;ng tin c&aacute;c bạn li&ecirc;n hệ qua Telergram:<strong><a href="https://t.me/adwebvip" target="_blank" style="color:#e74c3c;"> Admin </a></strong></h4>
                    </div>
    

                        <h3 class="announcement" style="color:#e74c3c;">
                        <i class="fa fa-angle-double-right"></i> Để nhận thanh toán, bạn cần phải điền vào <strong>phương thức thanh toán và nguồn lưu lượng <a href="/payment-method"> Tại đây </a> </strong></h3>
                    <div>
                        <h4>⭐ Đang chờ xử lý: Việc thanh toán đang được kiểm tra bởi nhóm của chúng tôi.</h4>
                        <h4>⭐ Hoàn tất: Thanh toán đã được gửi thành công đến tài khoản thanh toán của bạn.</h4>
                    </div>
                </div>
            <div class="box-body">
                    <p class="announcement">
                            <span>
                              <h3 style="color:#e74c3c;">  <i class="fa fa-angle-double-right"></i> Quy định rút tiền</h3>
                            </span>
                        <div>
	<h4>⭐ Min rút chỉ từ 200k.</h4>
	<h4>⭐ Hệ thống kiểm duyệt v&agrave; thanh to&aacute;n trong 3 - 5 ngày.</h4>
	<h4>⭐ Chúng tôi chỉ duyệt và thanh toán nguồn lưu lượng từ người thật. </h4>
</div>
                    </p>
                </div>
                <hr>
            <table class="table table-responsive table-borderless" style=" overflow:auto">
                <thead>
                <tr class="bg-light">
                    <th scope="col" width="5%">ID</th>
                    <th scope="col" width="20%">Số tiền</th>
                    <th scope="col" width="5%">Trạng thái</th>
                    <th scope="col" width="20%">Date</th>
{{--                    <th scope="col" width="10%">User Name</th>--}}
                    {{--                    <th scope="col" class="text-end" width="20%"><span>Revenue</span></th>--}}
                </tr>
                </thead>
                <tbody>
                            @foreach($payments as $payment)
                                <tr>
                                    <td scope="row">{{$payment->id. 'BB' . rand(00,99)}}</td>
                                    <td>{{number_format($payment->total_money, 0, ',', ',')}}</td>
                                    @if($payment->status == 1)
                                        <td><span style="display:block; padding: 5px; margin: 5px; color: #fff; font-weight: bold; text-align: center; white-space:nowrap; border-radius: 8px; background-color: red; height: max-content">Hủy bỏ</span></td>
                                    @endif
                                    @if($payment->status == 3)
                                        <td><span style="display:block; padding: 5px; margin: 5px; color: #fff; font-weight: bold; text-align: center; white-space:nowrap; border-radius: 8px; background-color: green; height: max-content">Đã thanh toán</span></td>
                                    @endif
                                    @if($payment->status == 6)
                                        <td><span style="display:inline;white-space:nowrap;  padding: 5px; margin: 5px; color: #fff; font-weight: bold; text-align: center; border-radius: 8px; background-color: #ff7300; height: max-content">Chờ xử lý</span></td>
                                    @endif
                                    <td width="40%">{{$payment->created_at}}</td>
{{--                                    <td>{{$payment->user->name}}</span></td>--}}
                                </tr>
                            @endforeach

                </tbody>
            </table>
            {{$payments->links()}}    
        </div>
    </div>
@endsection
<style>
    @media only screen and (max-width: 600px) {
        .view-total {
            width: 100% !important;
        }
    }
    .bank {
        display: none;
    }
    .bank1 {
        display: none;
    }
</style>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script>
    function withdrawal(data, st) {
        let button = document.getElementById('withdrawal-button');
        let conf = window.confirm('Xác nhận rút tiền')

        if (conf == true) {
            if (!data) {
                toastr.error('Bạn không có số dư')
                return;
            }
            console.log(data)
            const dt = JSON.parse(data)
            let money = data
            let setting = {
                min : 5
            }
            console.log(st)
            if (st) setting = JSON.parse(st)
            button.disabled = true;
            if (money > Number(setting.value)) {
                toastr.success('Yêu cầu rút tiền thành công')
                $.ajax({
                    url: '{{route('site.withdrawal')}}',
                    type: 'GET',
                    success: function (){
                        window.location.reload()
                    },
                    error: function (e){
                        console.log(e)
                        toastr.error('Có lỗi xảy ra.')
                        button.disabled = false;
                        return
                    }
                })
            } else {
                toastr.error('Số dư của bạn không đủ!')
                button.disabled = false;
            }
        }
    }
    function deletePayment(id) {
        $.ajax({
            url: '{{route('site.del-payment')}}',
            data: {id: id, _token: "{{ csrf_token() }}"},
            type: 'post',
            success: function () {
                toastr.success('Delete success')
                setTimeout(() => {
                    window.location.href = '{{route('admin.home.index')}}'
                }, 1000)
            },
            error: function () {
                toastr.error('Delete fail')
                setTimeout(() => {
                    window.location.href = '{{route('admin.home.index')}}'
                }, 1000)
            }
        })
    }
    function addId(data) {
        const data1 = JSON.parse(data)
        $('#_id').val(data1.id)
        const type = data1.type != 'Momo' ? 2 : 1
        type == 2 ? $('#bank_account1').val(data1.bank_account) : $('#bank_mono_name1').val(data1.bank_account)
        $('#phone1').val(data1.phone)
        $('#type_payment_edit').val(type).trigger('change')
        $('#bank_number1').val(data1.bank_number)
        $('#bank_name1').val(data1.bank_name)
        $('#active').val(data1.active == 'Active' ? 1 : 0)
    }
    $(document).ready(function () {


        $('#type_payment').on('change', function () {
           let type = $('#type_payment').val()
            if (type == 1) {
                $('.momo').show()
                $('.bank').hide()
            } else {
                $('.momo').hide()
                $('.bank').show()
            }
        })
        $('#type_payment_edit').on('change', function () {
            let type = $('#type_payment_edit').val()
            if (type == 1) {
                $('.momo1').show()
                $('.bank1').hide()
            } else {
                $('.momo1').hide()
                $('.bank1').show()
            }
        })
    })
</script>

