@extends('adminlte.layouts.app')
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
    .bank-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-direction: row; /* Đặt mặc định là hàng ngang */
    }

    .bank-details {
        flex: 1;
        padding-right: 5px;
    }

    .qr-code {
        text-align: center;
        flex: 1;
    }

    /* Media query cho màn hình nhỏ hơn 786px */
    @media (max-width: 786px) {
        .bank-info {
            flex-direction: column; /* Đổi hướng flex thành cột */
            align-items: center; /* Căn lề cho các phần tử */

        }

        .qr-code {
            margin-bottom: 10px; /* Khoảng cách dưới mã QR để tách biệt khỏi thông tin ngân hàng */
        }
        .qr-code1 {
            margin-bottom: 10px; /* Khoảng cách dưới mã QR để tách biệt khỏi thông tin ngân hàng */
        }
    }


    .card-text {
        margin-bottom: 10px;
    }

    .card-text strong {
        display: block;
        margin-bottom: 5px;
    }

    .info {
        border-radius: 5px;
        padding: 5px;
        border: 1px solid #ccc;
        background-color: #f9f9f9;
    }

    .package-container {
        display: flex;
        flex-wrap: wrap;
    }

    .package-wrapper {
        flex: 1 1 calc(20% - 20px);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
    }

    .package-card {
        border: 2px solid #0b97c4;
        border-radius: 8px;
        padding: 2px;
        display: flex;
        margin: 0;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        width: 180px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1); 
        background: #f1f1f1;

    }

    .card-text {
        font-weight: 700;
        font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 16px;
    }

    .original-amount {
        color: red;
    }

    .final-amount {
        color: #219a21;
    }

    .discount {
        color: red;
    }

    .inline-image {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-left: 5px; /* Optional: add some space between text and image */
    }

    .alert ul {
        list-style: none; /* Remove default list styling */
        padding-left: 0; /* Remove padding */
    }

    .alert li {
        display: flex; /* Align items horizontally */
        align-items: center; /* Center items vertically */
        margin-bottom: 5px; /* Add space between list items */
    }

    @media (max-width: 786px) {
            .package-wrapper {
            flex: 1 1 calc(50% - 20px); 
            }

            .package-card {
            width: 140px; 
            }
            .card-text {
            font-size: 14px;
            }
        }


</style>
@section('content')
    <div style="margin: 5px; text-align: center; border-top: 2px solid #0b97c4;
        border-radius: 3px 3px; background-color: white;" >
        <h3  class="card-text">Nạp số tiền tùy chỉnh</h3>
            <button class="custom-button btn-add-invoice-2">Nạp tiền (Duyệt tự động) </button>
            <button class="custom-button btn-add-invoice">Nạp tiền (Duyệt thủ công)</button>
    <center>
                <div id="add-model-invoice" style="display: none; padding: 20px; border: 2px solid #0b97c4; border-radius: 3px; background-color: white; max-width: 650px;">
                    <h3 style="font-weight: 700; color: red; font-family: 'Source Sans Pro',sans-serif;" class="modal-title">Nạp tiền duyệt thủ công</h3> 
                    
                    <div id="add-invoice" class="alert title__v1 card-text" style="font-size: 14px; border-radius: 5px; margin: 2px;">
                        @foreach ($coupons as $coupon)
                            <ul>
                                <li>
                                  <p> Nhập mã <span style="color: red;">{{ $coupon->code }}</span>
                                   : Nạp trên {{ number_format($coupon->min_amount, 0, ',', '.') }}đ giảm ngay {{ $coupon->discount }}% trên tổng tiền nạp.
                                    <img src="https://i.imgur.com/PdSLZkr.png" alt="Thống kê" class="inline-image"> </p>
                                </li>
                            </ul>
                        @endforeach
                    </div>
                    
                    <form id="payment-form" method="post" action="{{ route('pay.add-invoice') }}">
                        @csrf
                        <input type="hidden" name="id" id="add-id">
                        <div class="modal-body" style="padding: 0px;">
                            <div id="add-invoice1">
                            <div class="form-group">
                                <span for="invoice-money" class="card-text">Nhập số tiền cần nạp.</span>
                                <div id="donvitien1" style="text-align: center;"></div>
                                <input id="invoice-money" type="number" min="10000" name="money" class="form-control" required>
                            </div>
            
                            <div class="form-group">
                                <span for="coupon-code" class="card-text">Nhập mã giảm giá (nếu có):</span>
                                <input id="coupon-code" type="text" name="coupon" class="form-control">
                                <div id="discount-info" style="text-align: center; margin-top: 10px;"></div>
                            </div>
            
                            <div class="form-group">
                                <span for="final-amount" class="card-text">Số tiền cần thanh toán:</span>
                                <div id="final-amount" style="text-align: center; font-weight: 700; color: green;"></div>
                                <input id="invoice-money1" type="hidden" name="money1" class="form-control" required>
                            </div>
            
                            
                            
                                    <button id="submit-button" type="button" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; font-weight: 700; font-family: 'Source Sans Pro', sans-serif; border: 2px solid black; border-radius: 5px; cursor: pointer;">Thanh toán</button>
                           
                            
</div>
                            <div id="bank-info" style="display: none;">
                    <h3 style="font-weight: 700; color: red; font-family: 'Source Sans Pro',sans-serif;" class="modal-title">Thanh toán theo thông tin bên dưới!</h3>
                            @foreach($banks as $key => $bank)
                                @foreach($bank as $value)
                                    <div class="bank-info">
                                        <div class="qr-code">
                                            <div class="form-group">
                                                <img id="qr-code" style="width: 320px; height: 320px; object-fit: contain;" src="" alt="QR Code"/>
                                            </div>
                                        </div>
                                        <div class="bank-details">
                                            <div class="card-text">
                                                <strong>Tên chủ tài khoản</strong>
                                                <input class="info" value="{{ $value->bank_account }}">
                                            </div>
                                            <div class="card-text">
                                                <strong>Ngân Hàng</strong>
                                                <input class="info" value="{{ $value->bank_name }}">
                                            </div>
                                            <div class="card-text">
                                                <strong>Số tài khoản</strong>
                                                <input class="info" value="{{ $value->bank_number }}">
                                            </div>
                                            <div class="card-text">
                                                <strong>Số tiền</strong>
                                                <input class="info" id="amount-info">
                                            </div>
                                            <div class="card-text">
                                                <strong>Nội dung</strong>
                                                <input class="info" value="{{ auth()->user()->name }}">
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            @endforeach
                            <span class="card-text">Tiền sẽ được cộng vào tài khoản của bạn ngay sau khi chúng tôi nhận được thanh toán.<span style="color: red;"> "Nếu 5-10p tiền chưa được cộng vào tài khoản - Vui lòng liên hệ ADMIN để được xử lý nhanh hơn"</span></span>
                            <br><a href="{{route('pay.index')}}" class="btn btn-success btn-xs btn-pay">
                            <span class="card-text"> Tạo thanh toán mới</span></a>
                             </div>
                               </div>
                    </form>
                </div>
            </center>
            
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    let coupons = [];
                    const bankId = '970436'; 
                    const accountNo = '9965870531'; 
                    const template = 'compact'; 
                    const accountName = 'PHAM SY BINH'; 
            
                    fetch('{{ route('coupons.check') }}')
                        .then(response => response.json())
                        .then(data => {
                            coupons = data;
                            updateAmounts();
                        })
                        .catch(error => console.error('Error fetching coupons:', error));
            
                    document.getElementById("invoice-money").addEventListener("input", updateAmounts);
                    document.getElementById("coupon-code").addEventListener("input", updateAmounts);
            
                    function updateAmounts() {
                        const money = parseFloat(document.getElementById("invoice-money").value.replace(/,/g, '')) || 0;
                        const couponCode = document.getElementById("coupon-code").value.trim();
            
                        const formatCash = (n) => {
                            if (isNaN(n)) return "Nhập số tiền";
                            const formatter = new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            });
                            return formatter.format(n);
                        };
                        document.getElementById("donvitien1").innerHTML = '<b style="font-size:18px;color:#ff4444;margin:10px 0px; display:block">' + formatCash(money) + '</b>';
            
                        let discount = 0;
                        if (couponCode) {
                            const coupon = coupons.find(c => c.code === couponCode);
                            if (coupon) {
                                const now = new Date();
                                const expiryDate = coupon.expiry_date ? new Date(coupon.expiry_date) : null;
            
                                if (expiryDate && now > expiryDate) {
                                    document.getElementById("discount-info").innerHTML = '<b style="color: red;">Mã giảm giá đã hết hạn</b>';
                                } else if (money < coupon.min_amount) {
                                    document.getElementById("discount-info").innerHTML = '<b style="color: red;">Số tiền không đủ để áp dụng mã giảm giá</b>';
                                } else {
                                    discount = coupon.discount / 100;
                                    document.getElementById("discount-info").innerHTML = '<b style="color: green;">Giảm giá: ' + coupon.discount + '%</b>';
                                }
                            } else {
                                document.getElementById("discount-info").innerHTML = '<b style="color: red;">Mã giảm giá không hợp lệ</b>';
                            }
                        } else {
                            document.getElementById("discount-info").innerHTML = '';
                        }
            
                        const finalAmount = money * (1 - discount);
                        document.getElementById("final-amount").innerHTML = '<b style="font-size:18px;color:#4CAF50;margin:10px 0px; display:block">' + formatCash(finalAmount) + '</b>';
                        document.getElementById("invoice-money1").value = finalAmount;
            
                        document.getElementById("amount-info").value = finalAmount;
            
                        const DESCRIPTION = '{{ auth()->user()->name }}';  
            
                        const qrCodeUrl = `https://img.vietqr.io/image/${bankId}-${accountNo}-${template}.png?amount=${finalAmount}&addInfo=${DESCRIPTION}&accountName=${accountName}`;
                        document.getElementById("qr-code").src = qrCodeUrl;
                    }
            
                    document.getElementById("submit-button").addEventListener("click", function() {
                        const money = parseFloat(document.getElementById("invoice-money").value.replace(/,/g, '')) || 0;
                        const finalAmount = parseFloat(document.getElementById("invoice-money1").value) || 0;

                        if (money < 10000) {
                            toastr.warning('Số tiền cần nạp phải từ 10.000đ trở lên.');
                            return;
                        }

                        const form = $("#payment-form");
                        if (!form[0].checkValidity()) {
                            toastr.warning('Vui lòng điền đầy đủ thông tin.');
                            return;
                        }


                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: form.serialize(),
                            success: function(response) {
                                $("#bank-info").show();
                                $("#add-invoice").hide(); 
                                $("#add-invoice1").hide(); 
                            },
                            error: function(xhr, status, error) {
                                console.error('Error submitting form:', error);
                            }
                        });
                    });
                });
                </script>


<center>
<div id="add-model-invoice1" style="display: none; padding: 20px; border: 2px solid #0b97c4; border-radius: 3px; background-color: white; max-width: 650px;">

                    <h3 style="font-weight: 700; color: red; font-family: 'Source Sans Pro',sans-serif;" class="modal-title">Nạp tiền duyệt tự động</h3>
                   <div id="add-invoice" class="alert title__v1 card-text" style="font-size: 14px; border-radius: 5px; margin: 2px;">
                        @foreach ($coupons as $coupon)
                            <ul>
                                <li>
                                <p> Nhập mã <span style="color: red;">{{ $coupon->code }}</span>
                                   : Nạp trên {{ number_format($coupon->min_amount, 0, ',', '.') }}đ giảm ngay {{ $coupon->discount }}% trên tổng tiền nạp.
                                    <img src="https://i.imgur.com/PdSLZkr.png" alt="Thống kê" class="inline-image"> </p>
                                </li>
                            </ul>
                        @endforeach
                    </div>

            
            <form action="{{ route('payos.checkout') }}" method="post">
                @csrf
                <div class="modal-body" style="padding: 0px;">
                    <div class="form-group">
                        <span  class="card-text">Nhập số tiền cần nạp.</span>
                        <div id="donvitienz" style="text-align: center;"></div>
                        <input name="amount1" id="payosmoney" required type="number" min="10000" class="form-control" >
                    </div>

                    <div class="form-group">
                        <span for="coupon-codez"  class="card-text" >Nhập mã giảm giá (nếu có):</span>
                        <input id="coupon-codez"  type="text" name="coupon" class="form-control">
                        <div id="discount-infoz" style="text-align: center; margin-top: 10px;"></div>
                    </div>

                    <div class="form-group">
                        <span for="final-amountz"  class="card-text">Số tiền cần thanh toán:</span>
                        <div id="final-amountz" style="text-align: center; font-weight: 700; color: green;"></div>
                        <input name="amountz" id="payosmoneyz" required type="hidden" min="10000" class="form-control">
                    </div>
                    
                        <button type="submit" id="create-payment-link-btn" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; font-weight: 700; font-family: 'Source Sans Pro',sans-serif; border: 2px solid black; border-radius: 5px; cursor: pointer;">Thanh toán</button>
                    
                </div>
                    <span class="card-text" style="color: red;">Nếu hệ thống thanh toán tự động này lỗi tạo đơn, khách hàng vui lòng sử dụng phương thức "Nạp tiền (duyệt thủ công)" - cảm ơn quý khách!</span>
                
            </form>
</div>
</center>
<script>
document.addEventListener('DOMContentLoaded', function() {
    let coupons = [];
    
    fetch('{{ route('coupons.check') }}')
        .then(response => response.json())
        .then(data => {
            coupons = data;
            updateAmounts();
        })
        .catch(error => console.error('Error fetching coupons:', error));

    document.getElementById("payosmoney").addEventListener("input", updateAmounts);
    document.getElementById("coupon-codez").addEventListener("input", updateAmounts);

    function updateAmounts() {
        const money = parseFloat(document.getElementById("payosmoney").value.replace(/,/g, '')) || 0;
        const couponCode = document.getElementById("coupon-codez").value.trim();

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
        document.getElementById("donvitienz").innerHTML = '<b style="font-size:18px;color:#ff4444;margin:10px 0px; display:block">' + formatCash1(money) + '</b>';

        let discount = 0;
        let couponValid = false;
        if (couponCode) {
            const coupon = coupons.find(c => c.code === couponCode);
            if (coupon) {
                const now = new Date();
                const expiryDate = coupon.expiry_date ? new Date(coupon.expiry_date) : null;

                if (expiryDate && now > expiryDate) {
                    document.getElementById("discount-infoz").innerHTML = '<b style="color: red;">Mã giảm giá đã hết hạn</b>';
                } else if (money < coupon.min_amount) {
                    document.getElementById("discount-infoz").innerHTML = '<b style="color: red;">Số tiền không đủ để áp dụng mã giảm giá</b>';
                } else {
                    discount = coupon.discount / 100;
                    document.getElementById("discount-infoz").innerHTML = '<b style="color: green;">Giảm giá: ' + coupon.discount + '%</b>';
                }
            } else {
                document.getElementById("discount-infoz").innerHTML = '<b style="color: red;">Mã giảm giá không hợp lệ</b>';
            }
        } else {
            document.getElementById("discount-infoz").innerHTML = '';
        }

        const finalAmount = money * (1 - discount);
        document.getElementById("final-amountz").innerHTML = '<b style="font-size:18px;color:#4CAF50;margin:10px 0px; display:block">' + formatCash1(finalAmount) + '</b>';
        document.getElementById("payosmoneyz").value = finalAmount;
    }
});
</script>

    
<div id="hidden-content" style="display:; margin: 5px"><center>
<div id="transfer-info" style="display: none; padding: 20px; border: 2px solid #0b97c4; border-radius: 3px; background-color: white; max-width: 650px;">
    @foreach($banks as $key => $bank)
        <h4 class="card-text">Chuyển khoản theo thông tin sau:</h4>
        @foreach($bank as $value)
            <div class="bank-info">
                <div class="qr-code1">
                    <div class="form-group">
                        <img id="qr-code1" style="width: 320px; height: 320px; object-fit: contain;" src="" alt="QR Code"/>
                    </div>
                </div>
                <div class="bank-details">
                    <div class="card-text">
                        <strong>Tên chủ tài khoản:</strong>
                        <input class="info" value="{{ $value->bank_account }}" readonly>
                    </div>
                    <div class="card-text">
                        <strong>Ngân Hàng:</strong>
                        <input class="info" value="{{ $value->bank_name }}" readonly>
                    </div>
                    <div class="card-text">
                        <strong>Số tài khoản:</strong>
                        <input class="info" value="{{ $value->bank_number }}" readonly>
                    </div>
                    <div class="card-text">
                        <strong>Số tiền:</strong>
                        <input class="info" id="amount-money" readonly>
                    </div>
                    <div class="card-text">
                        <strong>Nội dung:</strong>
                        <input class="info" value="{{ auth()->user()->name }}" readonly>
                    </div>
                </div>
            </div>
        @endforeach
    @endforeach
</div>
</center>
<div class="container">
    <div id="packgess">
        <div class="row package-container">
            @foreach ($packages as $package)
                <div class="col-md-2 mb-4 package-wrapper">  
                    <div class="card package-card">
                        <div class="card-body text-center">
                            <h5 class="card-title" style="font-weight: 700;">Gói: {{ $package->name }}</h5>
                            <p class="card-text original-amount" style="text-decoration: line-through;">{{ number_format($package->amount) }} VND</p>
                            <p class="card-text discount">Mã KM: {{ $package->coupon_code }} - {{ $package->discount }}%</p>
                            @php
                                $discountAmount = $package->amount * ($package->discount / 100);
                                $finalAmount = $package->amount - $discountAmount;
                            @endphp
                            <p class="card-text final-amount">{{ number_format($finalAmount) }} VND</p>
                            <form action="{{ route('payos.checkout') }}" method="post">
                                @csrf
                                <input name="amount1"  type="hidden" value="{{ $package->amount}}">
                                <input name="amountz"  type="hidden" value="{{ $finalAmount }}">
                                <button type="submit" id="create-payment-link-btn" class="btn btn-primary">Thanh toán</button>
                            </form>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
</div>
    </div>
    <span class="card-text">Lịch sử thanh toán</span>
    <div class="table__type-css">
        <table class="table table-hover table-striped">
            <thead>
            <tr>
                <th class="title__v1">Hóa đơn</th>
                <th class="title__v1">Số tiền</th>
                <th class="title__v1">Ngày thanh toán</th>
                <th class="title__v1">Trạng thái</th>
                <!-- <th class="title__v1">ID</th> -->
            </tr>
            </thead>
            <tbody>
            @if(!empty($invoices))
                @foreach($invoices as $invoice)
                    <tr>
                        <td>
                        @if($invoice->status[0] === 'Hoàn thành')
                            <a href="{{ route('invoice.show', ['id' => $invoice->id]) }}" class="btn btn-primary btn-xs" target="_blank" style="white-space:nowrap; border-radius: 10px; padding: 5px; margin: 5px; color: #fff; font-weight: bold; width:100px; text-align: center;">Hóa Đơn</a>
                        @else
                            <a class="btn btn-success btn-xs btn-pay" data-invoice-id="{{ $invoice->id }}" data-invoice-money="{{ $invoice->money1 }}" style="white-space:nowrap; border-radius: 10px; padding: 5px; margin: 5px; color: #fff; font-weight: bold; width:100px; text-align: center;">Thanh toán</a>
                        @endif</td>
                        <td>{{number_format($invoice->money, 0, ',', '.').'đ'}}</td>
                        <td>{{$invoice->created_at}}</td>
                        <td class="title__v">
                            <div style="white-space:nowrap; background-color: {{$invoice->status[1]}}; border-radius: 10px; padding: 5px; margin: 5px; color: #fff; font-weight: bold; text-align: center;">
                                {{$invoice->status[0]}}
                            </div>
                        </td>
                        <!-- <td>{{$invoice->id}}
                    </td> -->
                    </tr>
                @endforeach
            @endif
            </tbody>
        </table>
    </div>
    {{$invoices->links()}}
</div>
@endsection
<script>
document.addEventListener('DOMContentLoaded', function() {
    let currentInvoiceId = null;
    
    document.querySelectorAll('.btn-pay').forEach(button => {
        button.addEventListener('click', function() {
            const transferInfo = document.getElementById('transfer-info');
            const packgess = document.getElementById('packgess');
            const invoiceId = this.getAttribute('data-invoice-id');
            const invoiceMoney = this.getAttribute('data-invoice-money');
            
            if (invoiceId !== currentInvoiceId) {
                transferInfo.style.display = 'block';
                packgess.style.display = 'none';
                currentInvoiceId = invoiceId;
                
                const amountInput = document.getElementById('amount-money');
                if (amountInput) {
                    amountInput.value = invoiceMoney;
                    
                    const cleanedAmountInfo = invoiceMoney.replace(/[^0-9.]/g, '');
                    const amountInfo = parseFloat(cleanedAmountInfo);
                    
                    if (!isNaN(amountInfo) && amountInfo > 0) {
                        const bankId = '970436'; 
                        const accountNo = '9965870531'; 
                        const template = 'compact'; 
                        const accountName = 'PHAM SY BINH'; 
                        const description = encodeURIComponent(document.querySelector('.info[value="{{ auth()->user()->name }}"]').value);
                        const qrCodeUrl = `https://img.vietqr.io/image/${bankId}-${accountNo}-${template}.png?amount=${amountInfo}&addInfo=${description}&accountName=${accountName}`;
                        document.getElementById("qr-code1").src = qrCodeUrl;
                    } else {
                        console.error('Invalid amount info:', amountInfo);
                    }
                }
            } else {
                transferInfo.style.display = transferInfo.style.display === 'block' ? 'none' : 'block';
                packgess.style.display = packgess.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const addButton1 = document.querySelector('.btn-add-invoice-2'); 
    const addButton = document.querySelector('.btn-add-invoice'); 
    const content1 = document.getElementById('add-model-invoice'); 
    const content2 = document.getElementById('add-model-invoice1'); 
    const content = document.getElementById('hidden-content');


    let isContent1Visible = false;
    let isContent2Visible = false;
    let isContentVisible = true;

    function updateVisibility() {
        content.style.display = isContentVisible ? 'block' : 'none';
        content1.style.display = isContent1Visible ? 'block' : 'none';
        content2.style.display = isContent2Visible ? 'block' : 'none';
    }

    addButton.addEventListener('click', function() {
        if (isContent1Visible) {
            isContent1Visible = false;
            isContentVisible = true;
            isContent2Visible = false;
        } else {
            isContent1Visible = true;
            isContentVisible = false;
            isContent2Visible = false;
        }
        updateVisibility();
    });

    addButton1.addEventListener('click', function() {
        if (isContent2Visible) {
            isContent2Visible = false;
            isContentVisible = true;
            isContent1Visible = false;
        } else {
            isContent2Visible = true;
            isContentVisible = false;
            isContent1Visible = false;
        }
        updateVisibility();
    });

    updateVisibility();
});


</script>
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
    // $(document).ready(function (e) {
    //     $('.btn-add-invoice').click(function (ee) {
    //         $('#add-model-invoice').modal('show')
    //     })
    //     $('.btn-add-invoice-2').click(function (ee) {
    //         $('#add-model-invoice-2').modal('show')
    //     })
    // })
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
</script>