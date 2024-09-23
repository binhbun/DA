@extends('adminlte.layouts.app')
@section('content')
    <div style="margin: 20px">
        <h4>Hóa đơn thanh toán</h4>
        <div class="table__type-css">
            <table class="table table-hover table-striped">
                <thead>
                <tr>
                    <th class="title__v1">ID</th>
                    <th class="title__v1">Trạng thái</th>
                    <th class="title__v1">Số tiền</th>
                    <th class="title__v1">Ngày thanh toán</th>
                    <th class="title__v1">Hóa đơn</th>
                </tr>
                </thead>
                <tbody>
                @if(!empty($invoices))
                    @foreach($invoices as $invoice)
                        <tr>
                            <td>{{$invoice->id}}</td>
                            <td class="title__v">
                                <div style="white-space:nowrap; background-color: {{$invoice->status[1]}}; border-radius: 10px; padding: 5px; margin: 5px; color: #fff; font-weight: bold; text-align: center;">
                                    {{$invoice->status[0]}}
                                </div>
                            </td>
                            <td>{{number_format($invoice->money, 0, ',', '.').'đ'}}</td>
                            <td>{{$invoice->created_at}}</td>
                            <td>
                            @if($invoice->status[0] === 'Hoàn thành') {{-- Kiểm tra trạng thái --}}
                                    <a href="{{ route('invoice.show', ['id' => $invoice->id]) }}" class="btn btn-primary btn-xs" target="_blank">Xem Hóa Đơn</a>
                                @endif

                            </td>
                        </tr>
                    @endforeach
                @endif
                </tbody>
            </table>
        </div>
        {{$invoices->links()}}
    </div>

@endsection
<style>
    .table__type-css{
        overflow: auto;
        background-color: white;
        border-top: 2px solid #0b97c4;
        border-radius: 3px 3px;
    }
    .btn-add-invoice {
        padding: 20px;
        margin-top: 20px;
        margin-bottom: 20px !important;
    }
    .custom-button {
        background-color: #4CAF50;
        color: white; 
        padding: 10px 20px; 
        text-align: center; 
        text-decoration: none;
        display: inline-block;
        font-size: 16px; 
        font-weight: 700; 
        font-family: 'Source Sans Pro',sans-serif;
        border: 2px solid black; 
        border-radius: 5px;
        cursor: pointer; 
    }

    .custom-button:hover {
        background-color: #45a049; 
    }
    .modal-content {
        padding: 10px;
    }
</style>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
