@extends('adminlte.layouts.app')
@section('content')
    <div style="margin: 20px">
        <h4>Config </h4>
        <div class="table__type-css">
            <table class="table table-hover table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Trạng thái</th>
                    <!--<th>Mô Tả</th>-->
                    <th>Số tiền</th>
                    <th>Phương thức thanh toán</th>
                    <th>Ngày thanh toán</th>
                    <th>Tạo</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                @foreach($invoices as $invoice)
                    <tr>
                        <td>{{$invoice->id}}</td>
                        <td>
                            <div style="background-color: {{$invoice->status[1]}}; border-radius: 10px padding: 5px; margin: 3px; color: #fff; font-weight: bold; text-align: center;
                            ">{{$invoice->status[0]}}</div></td>
                        <!--<td>{{$invoice->description}}</td>-->
                        <td>{{number_format($invoice->money, 0, ',', '.').'đ'}}</td>
                        <td>{{$invoice->payment_method}}</td>
                        <td>{{$invoice->date_pay}}</td>
                        <td>{{$invoice->created_at}}</td>
                        <td>
                            <div>
                                <a href="{{route('invoice.show-detail', $invoice->id)}}" class="btn btn-primary btn-xs">Thanh toán</a>
                            </div>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
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
</script>
