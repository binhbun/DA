@extends('adminlte.layouts.app')

@section('content')
<div class="container">
    <h1>Tạo Gói Nạp Mới</h1>

    <form action="{{ route('packages.store') }}" method="POST">
        @csrf

        <div class="form-group">
            <label for="name">Tên Gói</label>
            <input type="text" id="name" name="name" class="form-control" required>
        </div>

        <div class="form-group">
            <label for="amount">Số Tiền Gốc (VND)</label>
            <div id="donvitienz" style="text-align: center;"></div>
            <input type="number" id="amount" name="amount" class="form-control" required min="1">
        </div>

        <div class="form-group">
            <label for="coupon_code">Chọn Mã Giảm Giá (nếu có)</label>
            <select id="coupon_code" name="coupon_code" class="form-control">
                <option value="">-- Chọn mã giảm giá --</option>
                @foreach ($coupons as $coupon)
                    <option value="{{ $coupon->code }}" data-discount="{{ $coupon->discount }}">
                        {{ $coupon->code }} - {{ $coupon->discount }}%
                    </option>
                @endforeach
            </select>
        </div>

        <div class="form-group">
            <label for="discount">Giảm Giá (%)</label>
            <input type="number" id="discount" name="discount" step="0.01" class="form-control" readonly>
        </div>

        <button type="submit" class="btn btn-primary">Lưu Gói Nạp</button>
    </form>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const couponSelect = document.getElementById('coupon_code');
            const discountInput = document.getElementById('discount');

            couponSelect.addEventListener('change', function() {
                const selectedOption = couponSelect.options[couponSelect.selectedIndex];
                const discount = selectedOption.getAttribute('data-discount') || 0;
                discountInput.value = parseFloat(discount).toFixed(2);
            });
        });

        const node1 = document.getElementById("amount");
        node1.addEventListener("input", function(event) {
            const n = parseFloat(this.value.replace(/[^\d.-]/g, ''));

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
</div>
@endsection
