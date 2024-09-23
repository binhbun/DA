<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hóa Đơn #{{ $invoice->id }}</title>
    <style>
        @media print {
            .btn-primary,
            .custom-actions-btns {
                display: none;
            }
        }
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 210mm;
            margin: auto;
            padding: 10mm;
            background: #fff;
        }
        .invoice-container {
            padding: 20px;
        }
        .invoice-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .invoice-logo img {
            margin: 10px;
        }
        .invoice-header address {
            font-size: 14px;
            color: #9fa8b9;
            margin: 0;
            text-align: right;
        }
        .invoice-details {
            margin: 1rem 0 0 0;
            padding: 1rem;
            line-height: 180%;
            background: #f5f6fa;
            display: inline-block;
            width: 48%;
        }
        .invoice-details span {
            color: black;
        }
        .invoice-details address {
            margin: 0;
        }
        .invoice-body {
            padding: 10px;
        }
        .invoice-footer {
            text-align: center;
            font-size: 14px;
            margin: 5px 0 0 0;
        }
        .custom-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .custom-table th, .custom-table td {
            border: 1px solid #131313;
            padding: 8px;
            text-align: left;
        }
        .custom-table thead th {
            background-color: #f5f6fa;
        }
        .custom-table tbody tr:nth-of-type(even) {
            background-color: #f9f9f9;
        }
        .card {
            background: #ffffff;
            border-radius: 5px;
            border: 0;
            margin-bottom: 1rem;
        }
        .custom-actions-btns {
            display: flex;
            justify-content: flex-end;
            margin-top: 10px;
            padding: 10px;
        }
        .custom-actions-btns .btn {
            margin-left: 10px;
        }
        .hidden {
            display: none;
        }

        .Download-button {
        display: flex;
        align-items: center;
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        padding: 5px 10px;
        margin: 10px;
        color: white;
        background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
        border: none;
        box-shadow: 0 0.7em 1.5em -0.5em rgba(59, 48, 78, 0.527);
        letter-spacing: 0.05em;
        border-radius: 8px;
        cursor: pointer;
        position: relative;
        transition: all 0.2s;
        }

        .Download-button svg {
        margin-right: 8px;
        width: 25px;
        }

        .Download-button:hover {
        box-shadow: 0 0.5em 1.5em -0.5em #3b82f6;
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
        }

        .Download-button:active {
        box-shadow: 0 0.3em 1em -0.5em #3b82f6;
        }

        .Download-button::before {
        content: "";
        width: 4px;
        height: 40%;
        background-color: white;
        position: absolute;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        left: 0;
        transition: all 0.2s;
        }

        .Download-button::after {
        content: "";
        width: 4px;
        height: 40%;
        background-color: white;
        position: absolute;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        right: 0;
        transition: all 0.2s;
        }

        .Download-button:hover::before,
        .Download-button:hover::after {
        height: 60%;
        }

        .Download-button:hover::before {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        transform: translate(5px, -15px) rotate(45deg);
        }

        .Download-button:hover::after {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        transform: translate(-5px, 15px) rotate(45deg);
        }

        a {
            text-decoration: none;
        }
        @media (max-width: 768px) {
                    .container {
                        padding: 5px; /* Adjust padding for smaller screens */
                    }
                    .Download-button {
                        font-size: 14px; /* Adjust font size for smaller screens */
                    }
                }
    </style>
</head>
<body>
    <div class="container">
        <div class="invoice-container" id="invoice-container">
            <div class="invoice-header">
                <div class="invoice-logo">
                    <img src="https://bbmkts.com/images/binhbun_logo.png" alt="logo" width="180" height="50">
                </div>
                <address>
                    <div>Hóa đơn: {{ $invoice->id }}</div>
                    <div>{{ $invoice->created_at }}</div>
                </address>
            </div>
            <div class="custom-actions-btns">
            <button class="Download-button" onclick="window.printInvoice()">
                    <svg
                        viewBox="0 0 640 512"
                        width="20"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <path fill="#FFFFFF" d="M368 48h-48V16H192v32h-48c-26.51 0-48 21.49-48 48v128h16V112c0-8.837 7.163-16 16-16h160c8.837 0 16 7.163 16 16v112h16V96c0-26.51-21.49-48-48-48zm-16 272h-96v112h96V320zm80-96h-32V16c0-8.837-7.163-16-16-16H112c-8.837 0-16 7.163-16 16v208H64c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V336c0-17.67-14.33-32-32-32zm-32 160H96V352h304v80z"/>
                    </svg>
                    </button><a href="{{ url('/invoice/' . $invoice->id . '/download') }}">
                <button class="Download-button">
                    <svg
                        viewBox="0 0 640 512"
                        width="20"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fill="white"
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                        ></path>
                    </svg>
                    </button></a>
            </div>

             <div class="invoice-body">
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Khách Hàng</th>
                            <th>Nhà cung cấp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span style="font-weight: bold;">{{ $user->hoten }}</span>
                        <div style="display: table-row;"> <span style="display: table-cell; padding-right: 10px;">Điện thoại: </span>
                        <span>{{ $user->sdt }}</span>
                    </div>
                    <div style="display: table-row;"> <span style="display: table-cell; padding-right: 10px;">Email:</span>
                    <span> <a href="mailto:{{ $user->email }}" class="v-text-primary">{{ $user->email }}</a></span></div>
                    <div style="display: table-row;"> <span style="display: table-cell; padding-right: 10px;">Đia chi:</span>
                    <span> {{ $user->diachi }} </span></div>
                    </td>
                            <td> <span style="font-weight: bold;">Bình Bun|Dịch vụ Traffic User Google + Direct</span>
                    <div style="display: table-row;"> <span style="display: table-cell; padding-right: 10px;">Điện thoại:</span>
                    <span> 0965870531</span></div>
                    <div style="display: table-row;"> <span style="display: table-cell; padding-right: 10px;">Email:</span>
                    <span> <a href="mailto:bbmkts.com@gmail.com" class="v-text-primary">bbmkts.com@gmail.com</a></span></div>
                    <div style="display: table-row;"> <span style="display: table-cell; padding-right: 10px;">Website:</span>
                    <span> <a href="https://bbmkts.com" class="v-text-primary">https://bbmkts.com</a></span></div>
                    </td>
                        </tr>
                    </tbody>
                </table>
           
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Dịch vụ</th>
                            <th>ID</th>
                            <th>Thời gian</th>
                            <th>Tổng tiền</th>
                            <th>Giảm giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Nạp tiền
                                <br>Dịch vụ Traffic User Google + Direct
                            </td>
                            <td>{{ $invoice->id }}</td>
                            <td>{{ $invoice->created_at }}</td>
                            <td style="color: red;"><strong>{{ number_format($invoice->money, 0, ',', '.') }} đ</strong></td>
                            <td style="color: red;"><strong>{{ number_format($invoice->money - $invoice->money1, 0, ',', '.') }} đ</strong></td>
                        </tr>
                    </tbody>
                </table>
                <table class="custom-table">
                    <thead>
                        <tr>
                            <th>Trạng thái thanh toán</th>
                            <th>Hình thức thanh toán</th>
                            <th>Số tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="font-weight: bold;">
                            <td style="color: #219a21; font-weight: bold;" >Đã thanh toán</td>
                            <td style="font-weight: bold;"><img src="https://bbmkts.com/static/payment/bankTransfer.svg" alt="Bank Transfer" style="width: 35px; height: 35px;"> Chuyển khoản</td>
                            <td style="color: #219a21; font-weight: bold;">{{ number_format($invoice->money1, 0, ',', '.') }} đ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="invoice-footer">
                <strong>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!</strong>
            </div>
        </div>
    </div>
    <script>
        function printInvoice() {
            document.querySelector('.custom-actions-btns').classList.add('hidden');
            window.print();
            document.querySelector('.custom-actions-btns').classList.remove('hidden');
        }
    </script>
</body>
</html>
