<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Subscribe extends Mailable
{
    use Queueable, SerializesModels;

    public $email;
    public $password; // Giữ tên biến này

    public function __construct($email, $password)
    {
        $this->email = $email;
        $this->password = $password; // Lưu mật khẩu gốc
    }

    public function build()
    {
        return $this
            ->subject('Mật khẩu đăng nhập')
            ->markdown('emails.subscribers')
            ->with('password', $this->password); // Sử dụng biến password
    }
}
