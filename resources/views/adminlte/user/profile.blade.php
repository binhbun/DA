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
                border-radius: 10px;
                color: black;
                font-size: 16px;
                width: 500px;
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
            }
            input:focus {
                border-bottom: 1px solid transparent;
                box-shadow: inset 0 -2px 0 #FFFFFF;
            }

            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                background: radial-gradient(circle, rgba(131, 175, 247, 0.6) 0%, rgba(145, 202, 237, 0) 100%); /* Màu xanh nhạt hơn */
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            }


        </style>

<div class="container">
    <div class="row">
        <div class="form-container">
            @if (session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
            <h2 class="text-center " style="color: black; font-weight: bold;">Thông tin cá nhân</h2>
                    <form method="POST" action="{{ route('profile.update') }}">
                        @csrf

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input style="color: #219a21; font-weight: bold;" class="form-control"  value="{{ old('email', $user->email) }}" placeholder="Nhập tên tài khoản" readonly>
                        </div>
                        @if ($errors->has('name'))
                                                  <span class="invalid-feedback">
                                                            <strong>{{ $errors->first('email') }}</strong>
                                                          </span>
                                                @endif

                        <div class="form-group">
                            <label for="name">UserName</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ old('name', $user->name) }}" placeholder="Nhập tên tài khoản" required>
                        </div>
                        @if ($errors->has('name'))
                                                  <span class="invalid-feedback">
                                                            <strong>{{ $errors->first('name') }}</strong>
                                                          </span>
                                                @endif

                        <div class="form-group">
                            <label for="hoten">Họ và Tên</label>
                            <input type="text" class="form-control" id="hoten" name="hoten" value="{{ old('hoten', $user->hoten) }} " placeholder="Nhập họ và tên">
                        </div>
                        

                        <div class="form-group">
                            <label for="sdt">Số Điện Thoại</label>
                            <input type="text" class="form-control" id="sdt" name="sdt" value="{{ old('sdt', $user->sdt) }}" placeholder="Nhập số điện thoại">
                        </div>

                        <div class="form-group">
                            <label for="diachi">Địa Chỉ</label>
                            <input type="text" class="form-control" id="diachi" name="diachi" value="{{ old('diachi', $user->diachi) }}" placeholder="Nhập địa chỉ">
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">Cập nhật</button>
                    </form>
           
        </div>
    </div>
</div>
@endsection
