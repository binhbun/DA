@extends('adminlte.layouts.app')

@section('content')
<div class="container">
        <h1>Tạo Mới Coupon</h1>
        <form action="{{ route('coupons.store') }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="code">Mã Coupon:</label>
                <input type="text" name="code" id="code" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="expiry_date">Ngày Hết Hạn:</label>
                <input type="date" name="expiry_date" id="expiry_date" class="form-control">
            </div>
            <div class="form-group">
                <label for="min_amount">Số Tiền Tối Thiểu:</label> <div id="donvitienz"  style="text-align: center;"></div>
                <input type="number" name="min_amount" id="min_amount" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="discount">Giá Trị Coupon %:</label>
                <input type="number" name="discount" id="discount" step="0.001" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Lưu</button>
        </form>
    </div>

    <script>
                            const node1 = document.getElementById("min_amount");
                            node1.addEventListener("input", function(event) {
                                var n = parseFloat(this.value.replace(/[^\d.-]/g, ''));

                                const formatCash1 = (n) => {
                                    if (isNaN(n)) return "Nhập số tiền";
                                    const formatter = new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    });
                                    return formatter.format(n);
                                };
                                document.getElementById("donvitienz").innerHTML = '<b style="font-size:18px;color:#ff4444;margin:10px 0px; display:block">' + formatCash1(n) + '</b>';
                            });
                        </script>
@endsection
