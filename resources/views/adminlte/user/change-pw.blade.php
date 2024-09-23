@extends('adminlte.layouts.app')

@section('content')
    <style>
        /* Add custom styles here */
        .form-container {
            max-width: 400px;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            margin-top: 50px;
            margin-bottom: 50px;
            border: 1px solid #eff2f5;
            border-radius: 10px;
            padding: 20px;
            backdrop-filter: blur(100px);
            color: black;
            font-size: 16px;
        }
        .form-container button {
            background: radial-gradient(circle, rgba(255, 100, 100, 0.6) 0%, rgba(251, 183, 63, 0.6) 50%, rgba(222, 213, 21, 0.6) 80%);
            color: black;
            font-weight: bold;
        }
        input {
            width: 100%;
            height: 30px;
            padding: 2px;
            border: none;
            outline: none;
            border-bottom: 1px solid #99a4ac;
            transition: all 0.5s;
            background: transparent;
            position: relative; /* Ensure relative positioning for children elements */
        }
        input:focus {
            border-bottom: 1px solid transparent;
            box-shadow: inset 0 -2px 0 #FFFFFF;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            background: radial-gradient(circle, rgba(131, 175, 247, 0.6) 0%, rgba(145, 202, 237, 0) 100%);
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        }
        .password-toggle {
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 50%; /* Adjust vertical alignment */
            transform: translateY(-50%);
        }
        .form-group {
            position: relative;
            margin-bottom: 20px; /* Add some space between form groups */
        }
        .error-message {
            color: red;
            font-size: 12px;
            margin-top: 5px;
        }
    </style>

    <!-- Main content -->
    <div class="container">
        <div class="row">
            <div class="form-container">
                <h2 class="text-center " style="color: black; font-weight: bold;">Đổi mật khẩu</h2>
                <form id="change-pw">
                    @csrf
                    <div class="form-group">
                        <label for="currentPassword">Mật khẩu hiện tại</label>
                        <input type="password" class="" name="currentPassword" placeholder="mật khẩu hiện tại" required>
                        <span class="password-toggle" onclick="togglePassword(this, 'currentPassword')">👁️</span>
                    </div>
                    <div class="form-group">
                        <label for="newPassword">Mật khẩu mới</label>
                        <input type="password" class="" name="password" id="password" placeholder="ít nhất 8 kí từ" required>
                        <span class="password-toggle" onclick="togglePassword(this, 'password')">👁️</span>
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Xác nhận mật khẩu mới</label>
                        <input type="password" class="" name="confirmPassword" id="confirmPassword" placeholder="ít nhất 8 kí từ" required>
                        <span class="password-toggle" onclick="togglePassword(this, 'confirmPassword')">👁️</span>
                        <div class="error-message" id="password-error"></div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Đổi mật khẩu</button>
                </form>
            </div>
        </div>
    </div>
    <!-- /.content -->

{{--/ edit--}}
@endsection

<style>
    .table-borderless {
        border-top: 3px solid #0b97c4 !important;
        border-radius: 3px 3px;
        background-color: white;
    }
    @media only screen and (max-width: 600px) {
        .view-total {
            width: 100% !important;
        }
    }
    .bank {
        display: none;
    }
    .bank1 {
        display: none;
    }
</style>

<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script>
   $(document).ready(function () {
       $('#change-pw').submit(function (event) {
           event.preventDefault();
           const password = $('input[name="password"]').val();
           const confirmPassword = $('input[name="confirmPassword"]').val();

           if (password !== confirmPassword) {
               $('#password-error').text('Mật khẩu mới và xác nhận không khớp');
               return;
           }

           $.ajax({
               type: 'post',
               url: '{{route('change-pw')}}',
               data: $(this).serialize(),
               success: function (dat) {
                   toastr.success('Thay đổi mật khẩu thành công');
                   setTimeout(() => {
                       window.location.href = '/login';
                   }, 1000);
               },
               error: function (err) {
                   toastr.error('Mật khẩu cũ không đúng');
               }
           });
       });
   });

   function togglePassword(icon, fieldId) {
       const field = document.querySelector(`input[name="${fieldId}"]`);
       const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
       field.setAttribute('type', type);
       icon.textContent = type === 'password' ? '👁️' : '🙈';
   }
</script>
