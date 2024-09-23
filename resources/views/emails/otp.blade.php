<!DOCTYPE html>
<html>
<head>
    <title>Xác nhận OTP</title>
</head>
<body>
    <p>Bạn đã đăng ký tài khoản bằng Gmail.</p>
    <p>Mã OTP xác minh của bạn là: <strong> {{ $otp }} </strong></p>
    <p>Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi! </p>
</body>
<footer>
Trân trọng,<br>
<img src="https://bbmkts.com/images/binhbun.png" alt="{{ config('app.name') }}" style="width: 100px;" />
</footer>
</html>
