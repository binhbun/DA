<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Dịch vụ khách hàng" />
  <meta name="theme-color" content="#3b82f6" />
  <title>Đăng Nhập</title>
  <link rel="icon" href="/images/iconbb.png" />
  <link rel="shortcut icon" href="/images/iconbb.png" />
  <link rel="preload" as="style" href="/css/fullcss.css" />
  <link rel="stylesheet" href="/css/fullcss.css" /> <!--[if lt IE 9]>
    <script src="//oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  <link rel="preload" as="style" href="/css/styleall.css" />
  <link rel="stylesheet" href="/css/styleall.css" />
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-92DEY4LH2M"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-92DEY4LH2M');
  </script>
  <style>
    :root {
      --offset: 6px;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .login-page {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 120px 0 50px 0;
    }
  </style>
    <style>
    .button-container {
      position: relative;
    }


    .check_role {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      margin: -1px;
    }

    .check_role1 {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      margin: -1px;
    }


    .custom-radio-group {
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      overflow: hidden;
    }

    .custom-radio-group input[type="radio"] {
      display: none;
    }

    .radio-label {
      display: flex;
      align-items: center;
      padding: 10px 10px;
      cursor: pointer;
      background: linear-gradient(to right, rgb(255, 128, 187), rgb(198, 128, 255));
      margin: 10px;
      border-radius: 10px;
      border: 2px solid yellow;
    }

    .radio-circle {
      width: 20px;
      height: 20px;
      border: 2px solid #ffcc00;
      border-radius: 50%;
      margin-right: 10px;
      transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }

    .radio-text {
      text-align: center;
      color: white;
      font-size: 16px;
      margin: 5px 0;
      font-weight: 700;
    }

    .custom-radio-group input[type="radio"]:checked+label .radio-circle {
      border-color: #fff;
      background: linear-gradient(to right, rgb(255, 128, 187), rgb(198, 128, 255));
    }

    .custom-radio-group input[type="radio"]:checked+label .radio-text {
      color: white;
    }

    .custom-radio-group input[type="radio"]:checked+label {
      background: linear-gradient(to right, rgb(255, 128, 187), rgb(198, 128, 255));
    }

    .signupBtn,
    .signupBtn1 {
      width: 120px;
      height: 40px;
      border-radius: 30px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      color: white;
      background: linear-gradient(to right, rgb(255, 128, 187), rgb(198, 128, 255));
      position: relative;
      cursor: pointer;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.212);
      font-weight: 700;
    }

    .arrow {
      position: absolute;
      right: 7.5px;
      background-color: rgb(255, 255, 255);
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      transition: all .5s ease;
    }

    .signupBtn:hover .arrow {
      width: calc(120px - (7.5px)*2);
    }

    .signupBtn1:hover .arrow {
      width: calc(120px - (7.5px)*2);
    }


    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;
      background: linear-gradient(45deg, skyblue, darkblue);
      padding: 30px;
      width: 450px;
      height: 520px;
      border-radius: 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      transition: background 0.3s ease;
    }

    .form-min {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: linear-gradient(45deg, skyblue, darkblue);
      padding: 30px;
      min-width: 350px;
      border-radius: 20px;
      height: auto;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      transition: background 0.3s ease;
    }

    .form:hover {
      background: linear-gradient(45deg, darkblue, skyblue);
    }

    ::placeholder {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .form button {
      align-self: center;
    }

    .flex-column>label {
      color: white;
      font-weight: 600;
    }

    .inputForm {
      border: 1.5px solid #ecedec;
      border-radius: 10em;
      height: 50px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      transition: 0.2s ease-in-out;
      margin: 5px 0;
      background-color: white;
    }

    .input {
      margin-left: 10px;
      border-radius: 10rem;
      border: none;
      width: 100%;
      height: 100%;
    }

    .input:focus {
      outline: none;
    }

    .inputForm:focus-within {
      border: 1.5px solid orange;
    }

    .flex-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
    }

    .flex-row>div>label {
      font-size: 14px;
      color: white;
      font-weight: 700;
    }


    .span {
      font-size: 14px;
      color: white;
      font-weight: 700;
    }

    .button-submit {
      position: relative;
      display: inline-block;
      padding: 15px 30px;
      text-align: center;
      letter-spacing: 1px;
      text-decoration: none;
      background: linear-gradient(45deg, yellow, red);
      transition: ease-out 0.5s;
      border: 2px solid;
      border-radius: 10em;
      box-shadow: inset 0 0 0 0 red;
      margin: 20px 0 10px 0;
      color: white;
      font-size: 15px;
      font-weight: 700;
      height: 50px;
      width: 100%;
      cursor: pointer;
    }

    .button-submit:hover {
      color: white;
      box-shadow: inset 0 -100px 0 0 darkorange;
    }

    .button-submit:active {
      transform: scale(0.9);
    }


    .p {
      text-align: center;
      color: white;
      font-size: 16px;
      margin: 5px 0;
      font-weight: 700
    }

    .btn {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      border-radius: 10em;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      gap: 10px;
      border: 1px solid #ededef;
      background-color: white;
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }

    .btn:hover {
      border: 1px solid orange;
    }


    .btn_google {
      padding: 10px;
      font-weight: bold;
      display: flex;
      position: relative;
      overflow: hidden;
      border-radius: 35px;
      align-items: center;
      border: solid black 2px;
      outline: none;
      background-color: aliceblue;

    }

    .btn_google1 {
      align-self: center;
    }

    .svg {
      height: 25px;
      margin-right: 10px;
    }

    .btn_google .text {
      z-index: 10;
      font-size: 14px;
    }

    .btn_google:hover .text {
      animation: text forwards 0.3s;
      /*color: white;*/
    }

    @keyframes text {
      from {
        color: black;
      }

      to {
        color: white;
      }
    }

    .svg {
      z-index: 6;
    }

    .btn_google:hover::before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 9%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      opacity: 0;
      border-radius: 300px;
      animation: wave1 2.5s ease-in-out forwards;
    }

    .btn_google:hover::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 9%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      opacity: 0;
      border-radius: 300px;
      animation: wave2 2.5s ease-in-out forwards;
    }

    @keyframes wave1 {
      0% {
        z-index: 1;
        background: #EB4335;
        width: 0;
        height: 0;
        opacity: 1;
      }

      1% {
        z-index: 1;
        background: #EB4335;
        width: 0;
        height: 0;
        opacity: 1;
      }

      25% {
        z-index: 1;
        background: #EB4335;
        width: 800px;
        height: 800px;
        opacity: 1;
      }

      26% {
        z-index: 3;
        background: #34A853;
        width: 0;
        height: 0;
        opacity: 1;
      }

      50% {
        z-index: 3;
        background: #34A853;
        width: 800px;
        height: 800px;
        opacity: 1;
      }

      70% {
        z-index: 3;
        background: #34A853;
        width: 800px;
        height: 800px;
        opacity: 1;
      }

      100% {
        z-index: 3;
        background: #34A853;
        width: 800px;
        height: 800px;
        opacity: 1;
      }
    }

    @keyframes wave2 {
      0% {
        z-index: 2;
        background: #FBBC05;
        width: 0;
        height: 0;
        opacity: 1;
      }

      11% {
        z-index: 2;
        background: #FBBC05;
        width: 0;
        height: 0;
        opacity: 1;
      }

      35% {
        z-index: 2;
        background: #FBBC05;
        width: 800px;
        height: 800px;
        opacity: 1;
      }

      39% {
        z-index: 2;
        background: #FBBC05;
        width: 800px;
        height: 800px;
        opacity: 1;
      }

      40% {
        z-index: 4;
        background: #4285F4;
        width: 0;
        height: 0;
        opacity: 1;
      }

      64% {
        z-index: 4;
        background: #4285F4;
        width: 800px;
        height: 800px;
        opacity: 1;
      }

      100% {
        z-index: 4;
        background: #4285F4;
        width: 800px;
        height: 800px;
        opacity: 1;
      }
    }

    .btn_google:hover .red {
      animation: disappear 0.1s forwards;
      animation-delay: 0.1s;
    }

    .btn_google:hover .yellow {
      animation: disappear 0.1s forwards;
      animation-delay: 0.3s;
    }

    .btn_google:hover .green {
      animation: disappear 0.1s forwards;
      animation-delay: 0.7s;
    }

    .btn_google:hover .blue {
      animation: disappear 0.1s forwards;
      animation-delay: 1.1s;
    }

    @keyframes disappear {
      from {
        filter: brightness(1);
      }

      to {
        filter: brightness(100);
      }
    }

    .form1 {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: #319aee;
      background: linear-gradient(45deg, darkblue, skyblue);
      flex: 1;
      flex-direction: column;
      gap: 10px;
      width: 450px;
      padding: 30px;
      height: 520px;
      border-radius: 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      transition: background 0.3s ease;
    }


    .form1:hover {
      background: linear-gradient(45deg, skyblue, darkblue);
    }

    .login-page-min {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 120px 0 50px 0;
    }

    main {
      display: flex;
      justify-content: center;
      align-items: center;

    }

    @media (min-width: 1024px) {
      .login-page {
        display: flex;
      }

      .login-page-min {
        display: none;
      }
    }

    @media (max-width: 1023px) {
      .login-page {
        display: none;
      }

      .login-page-min {
        display: flex;
      }
    }
  </style>
</head>

<body class="bg-gray-50">
  <header class="fixed top-0 w-full z-[99999]">
    <div class="container">
      <div class="logo_container">
        <a href="/" class="logo">
          <img src="/images/binhbun_logo.png" alt="Traffic user, traffic user download" class="logo_image">
        </a>
      </div>
      <div id="toggle-menu" class="toggle-container">
        <div class="hamburger-icon">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <nav class="navigation">
        <ul class="main_nav">
          <li><a href="/" class="active" class="btn btn-1">Trang chủ</a></li>
          <li><a href="/regbuyer">Mua Traffic User</a></li>
          <li><a href="/login">Đăng nhập</a></li>
          <li class="has_submenu">
            <a id="registerLink">Đăng kí</a>
            <ul class="sub_menu">
              <li><a href="/regbuyer">Advertisers (Người mua traffic)</a></li>
              <li><a href="/register">Publishers (Người kiếm tiền)</a></li>
            </ul>
          </li>
          <li><a href="/admin">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section class="login-page">

      <div class="form">
        <h2 style="text-align: center;  color: white; font-weight: 700;">Đăng nhập</h2>

        <form action="{{route('login')}}" method="post">
          @csrf <div class="flex-column">
            <label>Email</label>
          </div>
          <div class="inputForm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
              <g data-name="Layer 3" id="Layer_3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input id="email" name="email" value="{{ old('email') }}" type="email" placeholder="Enter your Email" class="input" type="text" required autofocus />
            @if ($errors->has('email'))
            <span class="invalid-feedback">
              <strong>{{ $errors->first('email') }}</strong>
            </span>
            @endif
          </div>
          <div class="flex-column">
            <label for="password">Password </label>
          </div>
          <div class="inputForm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input id="password" type="password" placeholder="Enter your Password" class="input" name="password" required />
            <span class="password-toggle" onclick="togglePassword(this, 'password')">👁️</span>
            @if ($errors->has('password'))
            <span class="invalid-feedback">
              <strong>{{ $errors->first('password') }}</strong>
            </span>
            @endif
          </div>

          @if ($errors->has('login_failed'))
          <div class="text-danger mt-2"><br>
            <span style="color: white; font-weight: 700">{{ $errors->first('login_failed') }}</span>
          </div>
          @endif
          <div class="flex-row">
            <div><label>
                <input type="radio" name="remember" {{ old('remember') ? 'checked' : '' }}>Lưu tài khoản
              </label>
            </div><span class="span"> <a href="{{route('password.request')}}"> Quên mật khẩu? </a></span>
          </div>
          <button class="button-submit">Đăng nhập</button>
        </form>
        <p class="p line">Hoặc</p>
        <div class="btn_google1">
          <a href="{{route('login.google')}}">
            <button class="btn_google">
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" class="svg">
                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" class="blue"></path>
                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" class="green"></path>
                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" class="yellow"></path>
                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" class="red"></path>
              </svg>
              <span class="text">Tiếp tục với Google</span>
            </button></a>
        </div>
      </div>



      <div class="form1">
        <div class="Logo_login">
          <a href="/" class="logo">
            <img src="/images/binhbun_logo.png" alt="logo" width="350" height="550">
          </a>
        </div>
        <h2 style="text-align: center;  color: white; font-weight: 700;">CHƯA CÓ TÀI KHOẢN?</h2>

        <p class="p">Đăng ký ngay để nhận ưu đãi và dễ dàng quản lý các dịch vụ đã đăng ký tại BBMKTS</p>
        <div class="button-container">
          <center>
            <button class="signupBtn1">
              Đăng ký
            </button>
          </center>
          <div class="check_role1" style="display: none;">
            <div class="custom-radio-group"><a href="/register">
                <label class="radio-label" for="radio-1">
                  <span class="radio-text">Publishers (Người kiếm tiền)</span>
                </label></a><a href="/regbuyer">
                <label class="radio-label" for="radio-2">
                  <span class="radio-text">Advertisers (Người mua traffic)</span>
                </label></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <section class="login-page-min">
      <div class="form-min">
        <h2 style="text-align: center;  color: white; font-weight: 700;">Đăng nhập</h2>

        <form action="{{route('login')}}" method="post">
          @csrf <div class="flex-column">
            <label>Email</label>
          </div>
          <div class="inputForm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
              <g data-name="Layer 3" id="Layer_3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input id="email1" name="email" value="{{ old('email') }}" type="email" placeholder="Enter your Email" class="input" type="text" required autofocus />
            @if ($errors->has('email'))
            <span class="invalid-feedback">
              <strong>{{ $errors->first('email') }}</strong>
            </span>
            @endif
          </div>
          <div class="flex-column">
            <label for="password1">Password </label>
          </div>
          <div class="inputForm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input id="password1" type="password" placeholder="Enter your Password" class="input" name="password" required />
            <span class="password-toggle" onclick="togglePassword1(this, 'password1')">👁️</span>
            @if ($errors->has('password'))
            <span class="invalid-feedback">
              <strong>{{ $errors->first('password') }}</strong>
            </span>
            @endif
          </div>

          @if ($errors->has('login_failed'))
          <div class="text-danger mt-2"><br>
            <span style="color: white; font-weight: 700">{{ $errors->first('login_failed') }}</span>
          </div>
          @endif
          <div class="flex-row">
            <div><label>
                <input type="radio" name="remember" {{ old('remember') ? 'checked' : '' }}>Lưu tài khoản
              </label>
            </div><span class="span"> <a href="{{route('password.request')}}"> Quên mật khẩu? </a></span>
          </div>
          <button class="button-submit">Đăng nhập</button>
        </form>
        <p class="p line">Hoặc</p>
        <div class="btn_google1">
          <a href="{{route('login.google')}}">
            <button class="btn_google">
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" class="svg">
                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" class="blue"></path>
                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" class="green"></path>
                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" class="yellow"></path>
                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" class="red"></path>
              </svg>
              <span class="text">Tiếp tục với Google</span>
            </button></a>
        </div>
        <p class="p">Không có tài khoản?</p>
        <div class="button-container">
          <center>
            <button class="signupBtn">
              Đăng ký
            </button>
          </center>
          <div class="check_role" style="display: none;">
            <div class="custom-radio-group"><a href="/register">
                <label class="radio-label" for="radio-1">
                  <span class="radio-text">Publishers (Người kiếm tiền)</span>
                </label></a><a href="/regbuyer">
                <label class="radio-label" for="radio-2">
                  <span class="radio-text">Advertisers (Người mua traffic)</span>
                </label></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <script>
    setInterval(function() {
      const show = document.querySelector('span[data-show]')
      const next = show?.nextElementSibling ?? document.querySelector('.mask > span:first-child')
      const up = document.querySelector('span[data-up]')

      if (up) {
        up.removeAttribute('data-up')
      }

      show.removeAttribute('data-show')
      show.setAttribute('data-up', '')

      next.setAttribute('data-show', '')
    }, 2000)
  </script>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
 <footer class="bg-gray-50 dark:bg-gray-800">
        <div class="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:-10">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
                <div class="lg:col-span-2">
                    <a href="/" class="logo">
                        <img src="/images/binhbun_logo.png" alt="logo" class="logo_image">
                    </a>
                    <p class="my-4 font-light text-gray-500 dark:text-gray-400">Trao quyền cho người sáng tạo kỹ thuật số kể từ năm 2020.
                        Hợp lý hóa các liên kết của bạn và kiếm tiền từ sự hiện diện trực tuyến của bạn với chúng tôi. Đáng tin cậy, hiệu quả và
                        dành riêng cho sự thành công của bạn.</p>
                </div>
                <div class="lg:mx-auto">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Discover
                    </h2>
                    <ul class="text-gray-500 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="/" class=" hover:underline">Home</a>
                        </li>
                        <li class="mb-4">
                            <a href="/traffic-user" class=" hover:underline">Traffic user</a>
                        </li>
                        <li class="mb-4">
                            <a href="/about" class=" hover:underline">About Us</a>
                        </li>
                    </ul>
                </div>
                <div class="lg:mx-auto">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help and support
                    </h2>
                    <ul class="text-gray-500 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="/" class=" hover:underline">Contact Us</a>
                        </li>
                        <li class="mb-4">
                            <a href="/" class=" hover:underline">Advertisers</a>
                        </li>
                        <li class="mb-4">
                            <a href="/" class=" hover:underline">Forum</a>
                        </li>
                    </ul>
                </div>
                <div class="lg:mx-auto">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">RESOURCE
                    </h2>
                    <ul class="text-gray-500 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="/privacy" class=" hover:underline">Privacy Policy</a>
                        </li>
                        <li class="mb-4">
                            <a href="/terms" class=" hover:underline">Terms of Service</a>
                        </li>
                        <li class="mb-4">
                            <a href="/dmca" class=" hover:underline">DMCA</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
            <span class="block text-sm text-center text-gray-500 dark:text-gray-400"><strong>Copyright &copy; 2020 - {{date('Y')}} <a href="https://www.facebook.com/binhbun02" target="_blank">Bình Bun</a>.</strong> All rights reserved.</span>
        </div>
    </footer>
  <script>
    let scroll = 64;
    let nav = document.getElementById('nav');

    window.addEventListener('scroll', function() {
      let scrolling = window.pageYOffset;
      if (scrolling == 0) {
        nav.classList.remove('shadow');
        nav.classList.add('top-0');
        nav.classList.add('border-transparent');
        // nav.classList.remove('transition-all');
        // nav.classList.remove('duration-300');/
      } else {
        // nav.classList.add('transition-all');
        // nav.classList.add('duration-300');
        nav.classList.add('shadow');
        nav.classList.remove('border-transparent');
      }
      scroll = scrolling <= 64 ? 64 : scrolling;
    });

    const mainHamburgerButton = document.getElementById("main-hamburger-button");
    const closeSidebarButton = document.getElementById("close-sidebar-button");
    const mainSidebar = document.getElementById("main-sidebar");

    // set the target element that will be collapsed or expanded (eg. navbar menu)
    const $targetEl = document.getElementById('mobile-menu-2');

    // optionally set a trigger element (eg. a button, hamburger icon)
    const $triggerEl = document.getElementById('hamburger-button');

    const options = {
      onCollapse: () => {
        nav.classList.remove('rounded-md');
        nav.classList.add('rounded-full');
      },
      onExpand: () => {
        nav.classList.remove('rounded-full');
        nav.classList.remove('border-transparent');
        nav.classList.add('rounded-md');
      },
      onToggle: () => {

      }
    };


    document.addEventListener('DOMContentLoaded', function() {
      var toggleMenu = document.getElementById('toggle-menu');
      var navigation = document.querySelector('.navigation');

      toggleMenu.addEventListener('click', function() {
        navigation.classList.toggle('show');
      });

      document.querySelectorAll('.has_submenu').forEach(function(submenu) {
        submenu.addEventListener('click', function(event) {
          var subMenuElement = submenu.querySelector('.sub_menu');
          subMenuElement.classList.toggle('show');
        });
      });
    });
  </script>


  <script src="https://code.jquery.com/jquery-3.6.3.js"></script>
  <script>
    $(document).ready(function() {
      @isset($success)
      $.toaster({
        message: 'thanh cong',
        title: 'Thông báo',
        priority: 'success'
      })
      @endisset
    })

    const signupBtn = document.querySelector('.signupBtn');
    const signupBtn1 = document.querySelector('.signupBtn1');
    const checkRole = document.querySelector('.check_role');
    const checkRole1 = document.querySelector('.check_role1');

    let isMenuVisible = false;
    let isMenuVisible1 = false;

    signupBtn.addEventListener('click', () => {
      isMenuVisible = !isMenuVisible;
      checkRole.style.display = isMenuVisible ? 'block' : 'none';
      if (isMenuVisible) {
        checkRole1.style.display = 'none';
        isMenuVisible1 = false;
      }
    });

    signupBtn1.addEventListener('click', () => {
      isMenuVisible1 = !isMenuVisible1;
      checkRole1.style.display = isMenuVisible1 ? 'block' : 'none';
      if (isMenuVisible1) {
        checkRole.style.display = 'none';
        isMenuVisible = false;
      }
    });

    document.addEventListener('mousemove', (event) => {
      if (!signupBtn.contains(event.target) && !checkRole.contains(event.target)) {
        isMenuVisible = false;
        checkRole.style.display = 'none';
      }
      if (!signupBtn1.contains(event.target) && !checkRole1.contains(event.target)) {
        isMenuVisible1 = false;
        checkRole1.style.display = 'none';
      }
    });


    function togglePassword(icon, fieldId) {
      const field = document.querySelector(`input[name="${fieldId}"]`);
      const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
      field.setAttribute('type', type);
      icon.textContent = type === 'password' ? '👁️' : '🙈';
    }

    function togglePassword1(icon, fieldId) {
      const field = document.querySelector(`input[id="${fieldId}"]`);
      const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
      field.setAttribute('type', type);
      icon.textContent = type === 'password' ? '👁️' : '🙈';
    }
  </script>
</body>

</html>