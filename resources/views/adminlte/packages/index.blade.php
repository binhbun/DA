
@extends('adminlte.layouts.app')

@section('content')
<div class="container">
    <h1>Danh sách các gói nạp</h1>
    <a href="{{ route('packages.create') }}" class="btn btn-primary">Tạo Gói Nạp Mới</a>
    @if(session('success'))
        <div class="alert alert-success mt-3">
            {{ session('success') }}
        </div>
    @endif
    <table class="table table-bordered mt-3">
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên Gói</th>
                <th>Số Tiền</th>
                <th>Mã Giảm Giá</th>
                <th>Giảm Giá (%)</th>
                <th>Thao Tác</th>
            </tr>
        </thead>
        <tbody>
            @foreach($packages as $package)
                <tr>
                    <td>{{ $package->id }}</td>
                    <td>{{ $package->name }}</td>
                    <td>{{ number_format($package->amount, 0, ',', '.') }} VND</td>
                    <td>{{ $package->coupon_code }}</td>
                    <td>{{ $package->discount }}%</td>
                    <td>
                        <a href="{{ route('packages.edit', $package->id) }}" class="btn btn-warning">Sửa</a>
                        <form action="{{ route('packages.destroy', $package->id) }}" method="POST" style="display:inline;">
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