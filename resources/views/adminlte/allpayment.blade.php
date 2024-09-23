@extends('adminlte.layouts.app')

@section('content')
    <head>
    </head>
    <section class="content-header">
        <h1>
            Admin
            <small>Managerment</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Dashboard</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div style="overflow: auto">
            <div style="">
                <form>
                    <div class="form-group" style="display: flex; gap: 20px">
                        <input value="{{request()->get('ID', '')}}" class="form-control" style="max-width: 200px; border-radius: 10px" placeholder="ID" name="ID">
                        <button  type="submit" class="btn btn-primary" style="border-radius: 8px">Search</button>
                    </div>
                </form>
            </div>
            <table class="table table-responsive table-borderless" style="overflow:auto">

                <thead>
                <tr class="bg-light" class="title__v1">
                    <th scope="col" width="5%">ID</th>
                    <th scope="col" width="5%">Trạng thái</th>
                    <th scope="col" width="40%">Thời gian</th>
                    <th scope="col" width="10%">tên user</th>
                    <th scope="col" width="20%">Số tiền</th>
                    <th scope="col">Action</th>
                    {{--                    <th scope="col" class="text-end" width="20%"><span>Revenue</span></th>--}}
                </tr>
                </thead>
                <tbody>
                @foreach($payments as $payment)
                @if(!empty($payment->user))
                    <tr class="title__v1">
                        <th scope="row">{{$payment->id}}</th>
                        @if($payment->status == 1)
                            <td><span style="display:block; padding: 5px; margin: 3px; color: #fff; font-weight: bold; text-align: center; white-space:nowrap; border-radius: 8px; background-color: red; height: max-content">Hủy bỏ</span></td>
                        @endif
                        @if($payment->status == 3)
                            <td><span style="display:block; padding: 5px; margin: 3px; color: #fff; font-weight: bold; text-align: center; white-space:nowrap; border-radius: 8px; background-color: green; height: max-content">Đã thanh toán</span></td>
                        @endif
                        @if($payment->status == 6)
                            <td><span style="display:inline;white-space:nowrap;  padding: 5px; margin: 3px; color: #fff; font-weight: bold; text-align: center; border-radius: 8px; background-color: #ff7300; height: max-content">Chờ xử lý</span></td>
                        @endif
                        <td width="40%">{{$payment->created_at}}</td>
                        <td>{{$payment->user->name}}</span></td>
                        <td>{{number_format($payment->total_money, 0, ',', ',')}}</td>
                        <td>
                            <i class="fa fa-pencil" style="color: #ff6200" onclick="addId('{{$payment}}')" data-toggle="modal" data-target="#modeledit"></i>
                            <i class="fa fa-eye" style="color: #ff6200" onclick="getPayment('{{route('admin.get-payment-user',$payment->user_id)}}')" data-toggle="modal" data-target="#_payment"></i>
                        </td>
                    </tr>
                    @endif
                @endforeach

                </tbody>
            </table>
        </div>
        {{$payments->links()}}
    </section>
    <!-- /.content -->

{{--/ edit--}}
    <div class="modal fade" id="modeledit" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Payment User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="{{route('admin.edit-payment')}}" method="post" id="form-edit">
                        <input type="hidden" name="_id" id="_id" value="" />
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <input type="hidden" name="money_id" id="money_id" />
                        <div class="form-group">
                            <label for="activity">Trạng thái</label>
                            <select class="form-control" name="status" id="activity">
                                <!-- <option value="1">Từ chối</option> -->
                                <option value="6">Chưa giải quyết</option>
                                <option value="3">Phê duyệt</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="user_id">ID</label>
                            <input type="text" readonly class="form-control" name="user_id_1" id="user_id" >
                        </div>
                        <div class="form-group">
                            <label for="total">Money</label>
                            <input type="text" readonly class="form-control" id="total" name="total_money" >
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </div>
@endsection
<div class="modal fade" id="_payment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div style="display: flex; justify-content: center;" id="spin-loading">
            <img src="{{asset('images/spin.gif')}}">
        </div>
        <div class="modal-content" id="spin-loading-done" style="overflow:auto">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Payment Method</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body table-bank-body" >
            </div>

        </div>
    </div>
</div>
<style>
    .table-borderless{
        border-top: 3px solid #0b97c4 !important;
        border-radius: 3px 3px;
        background-color: white;
    }
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
    function getPayment(url) {
        $('#_bankInfo').empty();
        $('#spin-loading').show();
        $('#spin-loading-done').hide();
        $.ajax({
            type: 'GET',
            url: url,
            success: function (dt) {
                $('.table-bank-body').empty();
                if (dt.length > 0) {
                    for (let i = 0; i < dt.length; i++) {
                        $('.table-bank-body').append(

                            `<div >
 <table class="table table-responsive table-borderless">
                <tr>
                    <th>Loại</th>
                    <td><span class="form-control type-span" style="border-radius: 5px"></span></td>
                </tr>
                <tr>
                    <th>Số điện thoại</th>
                    <td><span class="form-control phone-span" style="border-radius: 5px"></span></td>
                </tr>
                <tr>
                    <th>Số tài khoản</th>
                    <td><span class="form-control bank-number-span" style="border-radius: 5px"></span></td>
                </tr>
                <tr>
                    <th>Tên ngân hàng</th>
                    <td><span class="form-control bank-name-span" style="border-radius: 5px"></span></td>
                </tr>
                <tr>
                    <th>Họ và tên</th>
                    <td><span class="form-control bank-account-span" style="border-radius: 5px"></span></td>
                </tr>
                <tr>
                    <th>Nguồn lưu lượng</th>
                    <td><textarea class="form-control bank-data_source-span" style="border-radius: 5px; height: 150px;" readonly></textarea></td>
                </tr>
</table>
            </div>`
                        )
                        let typeSpan = $('.type-span').eq(i);
                        let phoneSpan = $('.phone-span').eq(i);
                        let bankNumberSpan = $('.bank-number-span').eq(i);
                        let bankNameSpan = $('.bank-name-span').eq(i);
                        let bankAccountSpan = $('.bank-account-span').eq(i);
                        let bankDataSourceSpan = $('.bank-data_source-span').eq(i);
                        typeSpan.text(dt[i].type);
                        phoneSpan.text(dt[i].phone);
                        bankNumberSpan.text(dt[i].bank_number);
                        bankNameSpan.text(dt[i].bank_name);
                        bankAccountSpan.text(dt[i].bank_account);
                        if(dt[i].data_source) {
                            bankDataSourceSpan.html(dt[i].data_source);
                        }
                    }
                }
                setTimeout(() => {
                    $('#spin-loading').hide();
                    $('#spin-loading-done').show();
                }, 500);
            }
        });
    }
    function addId(data) {
        if(data) {
            const data1 = JSON.parse(data)
            $('#_id').val(data1.id)
            $('#activity').val(data1.status)
            $('#user_id').val(data1.user_id)
            $('#total').val(data1.total_money)
            $('#money_id').val(data1.money_id)
        }

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

