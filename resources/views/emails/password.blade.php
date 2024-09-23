@component('mail::message')
# Khôi phục mật khẩu!

Dưới đây là mật khẩu của bạn.

Vui lòng giữ mật khẩu này an toàn: <strong> {{ $password }} </strong>

Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi!

@component('mail::button', ['url' => 'https://bbmkts.com/login'])
Đăng nhập
@endcomponent

Trân trọng,<br>
<img src="https://bbmkts.com/images/binhbun.png" alt="{{ config('app.name') }}" style="width: 100px;" />
@endcomponent
