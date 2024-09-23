@extends('adminlte.layouts.app')

@section('content')
<div class="container">
        <h1>Danh sách mã coupon</h1>
        <a href="{{ route('coupons.create') }}" class="btn btn-primary">Tạo Mới</a>
        <table class="table">
            <thead>
            <tr>
                <th>Mã Coupon</th>
                <th>Ngày Hết Hạn</th>
                <th>Số Tiền Tối Thiểu</th>
                <th>Giá Trị Coupon %</th>
                <th>Thao Tác</th>
            </tr>
            </thead>
            <tbody>
            @foreach($coupons as $coupon)
                <tr>
                    <td>{{ $coupon->code }}</td>
                    <td>{{ $coupon->expiry_date ? $coupon->expiry_date->format('d-m-Y') : 'Không giới hạn' }}</td>
                    <td>{{ number_format($coupon->min_amount, 0, ',', '.') }} VND</td>
                    <td>{{ number_format($coupon->discount, 2, ',', '.') }} %</td>
                    <td>
                        <a href="{{ route('coupons.edit', $coupon->id) }}" class="btn btn-warning">Sửa</a>
                        <form action="{{ route('coupons.destroy', $coupon->id) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">Xóa</button>
                        </form>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection
