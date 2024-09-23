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
            <div style="padding: 20px">
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong"><i class="fa fa-plus-circle"></i> Thêm Bank Or Momo</button>
            </div>
                <table style="padding: 20px" class="table table-responsive table-borderless">
                <tbody >
                @foreach($payments as $payment)
                    <tr>
                        <th>Trạng thái</th>
                        <td><span class="form-control" style="border-radius: 5px">{{$payment->active}}</span></td>
                    </tr>
                    <tr>
                        <th>Loại</th>
                        <td><span class="form-control" style="border-radius: 5px">{{$payment->type}}</span></td>
                    </tr>
                    @if(strtolower($payment->type) === 'momo')
                        <tr>
                            <th>Số điện thoại</th>
                            <td><span class="form-control" style="border-radius: 5px">{{$payment->phone}}</span></td>
                        </tr>
                        <tr>
                            <th>Họ và tên</th>
                            <td><span class="form-control" style="border-radius: 5px">{{$payment->bank_account}}</span></td>
                        </tr>
                        <tr>
                            <th>Nguồn lưu lượng</th>
                            <td><textarea class="form-control" style="border-radius: 5px; height: 150px;" readonly>{{$payment->data_source}}</textarea></td>
                        </tr>
                    @elseif(strtolower($payment->type) === 'bank')
                        <tr>
                            <th>Số tài khoản</th>
                            <td><span class="form-control" style="border-radius: 5px">{{$payment->bank_number}}</span></td>
                        </tr>
                        <tr>
                            <th>Tên ngân hàng</th>
                            <td><span class="form-control" style="border-radius: 5px">{{$payment->bank_name}}</span></td>
                        </tr>
                        <tr>
                            <th>Họ và tên</th>
                            <td><span class="form-control" style="border-radius: 5px">{{$payment->bank_account}}</span></td>
                        </tr>
                        <tr>
                            <th>Nguồn lưu lượng</th>
                            <td><textarea class="form-control" style="border-radius: 5px; height: 150px;" readonly>{{$payment->data_source}}</textarea></td>
                        </tr>
                    @endif
                    <tr>
                        <th>Chỉnh sửa</th>
                        <td style="padding: 20px">
                            <i class="fa fa-trash"  onclick="deletePayment('{{$payment->id}}')">DELETE</i>
                            <i class="fa fa-trashs" style="color: red"> </i>
                            <i class="fa fa-trashs" style="color: red"> </i>
                            <i class="fa fa-trashs" style="color: red"> </i>
                            <i class="fa fa-pencil"  onclick="addId('{{$payment}}')" data-toggle="modal" data-target="#modeledit">EDIT</i>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </section>
    <!-- /.content -->
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Thông tin tài Khoản</h5>
                    <center><h4>Ưu tiên thanh toán Bank (Ngân hàng)</h4></center>
                </div>
                <div class="modal-body">
                    <form action="{{route('site.add-payment')}}" method="post">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <div class="form-group">
                            <select class="form-control" name="type" id="type_payment">
                                <option value="2" selected>Bank(Ngân hàng) </option>
                                <option value="1">MoMo</option>
                            </select>
                        </div>
                        <div class="form-group momo">
                            <label for="phone">Số điện thoại</label>
                            <input type="text" class="form-control" id="phone" name="phone" placeholder="Số điện thoại">
                        </div>
                        <div class="form-group momo">
                            <label for="bank_mono_name">Họ và Tên</label>
                            <input type="text" class="form-control" id="bank_mono_name" name="bank_mono_name" placeholder="Họ và Tên">
                        </div>
                        <div class="form-group bank">
                            <label for="bank_number">Số Tài Khoản</label>
                            <input type="text" class="form-control" id="bank_number" name="bank_number" placeholder="Số Tài Khoản">
                        </div>
                        <div class="form-group bank">
                            <label for="bank_name">Tên Ngân Hàng</label>
                            <input type="text" class="form-control" id="bank_name" name="bank_name" placeholder="Tên Ngân Hàng">
                        </div>
                        <div class="form-group bank">
                            <label for="bank_account">Họ và Tên</label>
                            <input type="text" class="form-control" id="bank_account" name="bank_account" placeholder="Họ và Tên">
                        </div>
{{--chung--}}
                        <div class="form-group">
                            <label for="">Nguồn lưu lượng</label>
                            <textarea class="form-control" name="data_source"></textarea>
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
{{--/ edit--}}
    <div class="modal fade" id="modeledit" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Thông tin tài khoản</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="{{route('site.edit-payment')}}" method="post" id="form-edit">
                        <input type="hidden" name="_id" id="_id" value="" />
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <div class="form-group">
                            <select class="form-control" name="type1" id="type_payment_edit">
                                <option value="1">Momo</option>
                                <option value="2">Bank(Ngân hàng)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <select class="form-control" name="active" id="active">
                                <option value="1">Hoạt động</option>
                                <option value="0">Ngưng hoạt động</option>
                            </select>
                        </div>
                        <div class="form-group momo1">
                            <label for="phone1">Số điện thoại</label>
                            <input type="text" class="form-control" name="phone1" id="phone1" placeholder="Số điện thoại">
                        </div>
                        <div class="form-group momo1">
                            <label for="bank_mono_name1">Họ và Tên</label>
                            <input type="text" class="form-control" id="bank_mono_name1" name="bank_mono_name1" placeholder="Họ và Tên">
                        </div>
                        <div class="form-group bank1">
                            <label for="bank_number1">Số Tài Khoản</label>
                            <input type="text" class="form-control" name="bank_number1" id="bank_number1" placeholder="Số Tài Khoản">
                        </div>
                        <div class="form-group bank1">
                            <label for="bank_name1">Tên Ngân Hàng</label>
                            <input type="text" class="form-control" id="bank_name1" name="bank_name1" placeholder="Tên Ngân Hàng">
                        </div>
                        <div class="form-group bank1">
                            <label for="bank_account1">Bank Account Name</label>
                            <input type="text" class="form-control" id="bank_account1" name="bank_account1" placeholder="Họ và Tên">
                        </div>
                        {{--chung--}}
                        <div class="form-group">
                            <label for="">Nguồn lưu lượng</label>
                            <textarea class="form-control" name="data_source" id="data_source"></textarea>
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
<style>
    .table-borderless{
        background-color: white;
        border-top: 3px solid green !important;
        border-bottom: 3px solid green !important;
        border-radius: 3px 3px;
    }
    @media only screen and (max-width: 600px) {
        .view-total {
            width: 100% !important;
        }
    }
    .momo {
        display: none;
    }
    .momo1 {
        display: none;
    }
    .fa.fa-trash,
    .fa.fa-pencil {
        display: inline-block;
        padding: 3px 8px;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid black; 
        border-radius: 5px; 
        background-color: #FFFF66;
    }
</style>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script>
    function deletePayment(id) {
        $.ajax({
            url: '{{route('site.del-payment')}}',
            data: {id: id, _token: "{{ csrf_token() }}"},
            type: 'post',
            success: function () {
                toastr.success('Xóa thành công!')
                setTimeout(() => {
                    window.location.href = '{{route('site.get-payment')}}'
                }, 1000)
            },
            error: function () {
                toastr.error('Có lỗi xảy ra!')
                setTimeout(() => {
                    window.location.href = '{{route('site.get-payment')}}'
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
        $('#data_source').val(data1.data_source)
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

