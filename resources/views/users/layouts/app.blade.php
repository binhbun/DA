
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="DỊCH VỤ TRAFFIC USER Cam Kết Người Dùng Thật 100% Hỗ trợ đẩy từ khóa lên TOP nhanh, an toàn. Tăng Traffic User thật, website lên Top Bền Vững Nguồn Traffic User Download Uy tín đáng tin cậy Cam kết từ khóa nhanh lên TOP 1 -3 Google an toàn" />
<meta name="theme-color" content="#3b82f6" />
<title>BBMKTS | Customer Service</title>
<link rel="icon" href="/images/binhbun.png" />
<link rel="shortcut icon" href="/images/binhbun.png" />
<link rel="preload" as="style" href="/css/fullcss.css" /><link rel="stylesheet" href="/css/fullcss.css" />
    <link rel="preload" as="style" href="/css/styleall.css" /><link rel="stylesheet" href="/css/styleall.css" />
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-92DEY4LH2M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-92DEY4LH2M');
</script>
<style>
    
        :root {
            --offset: 6px;
        }
        
    </style>
</head>
<body class="bg-gray-50">
<header class="mt-5 px-2 fixed top-0 w-full z-[99999]">
    <div class="container">
        <div class="logo_container">
            <a href="/" class="logo">
                <img src="/images/binhbun.png" alt="Traffic user, traffic user download" class="logo_image">
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
</head>
<body class="hold-transition">
<div class="wrapper">
    <div >
        <section class="content">
            <div class="row" style="display: flex; justify-content: center; align-items: center">

                @yield('content')
            </div>
        </section>
    </div>
    {{--     @include('adminlte.layouts.footer')--}}
    {{--    @if(auth()->user()->hasDirectPermission('crm.ticket.index'))--}}
    {{--        @include('adminlte.crm.ticket.share.popup')--}}
    {{--    @endif--}}
</div>

<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('templates/adminlte/bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<script src="{{asset('templates/adminlte/dist/js/adminlte.js')}}"></script>
<script src="{{asset('templates/adminlte/bower_components/select2/dist/js/select2.full.min.js')}}"></script>
<script src="{{asset('templates/adminlte/bower_components/bootstrap-notify-master/bootstrap-notify.min.js')}}"></script>
<script src="{{asset('templates/adminlte/bower_components/bootstrap-notify-master/bootstrap-notify.min.js')}}"></script>
<script src="{{asset('js/jquery.toaster.js')}}"></script>

<!-- daterangepicker -->
<script src="{{asset('templates/adminlte/bower_components/moment/min/moment.min.js')}}"></script>
<script src="{{asset('templates/adminlte/bower_components/bootstrap-daterangepicker/daterangepicker.js')}}"></script>
<script src="{{asset('js/common.js')}}"></script>
<script>

    document.addEventListener('DOMContentLoaded', function () {
            var toggleMenu = document.getElementById('toggle-menu');
            var navigation = document.querySelector('.navigation');

            toggleMenu.addEventListener('click', function () {
                navigation.classList.toggle('show');
            });

            document.querySelectorAll('.has_submenu').forEach(function (submenu) {
                submenu.addEventListener('click', function (event) {
                    var subMenuElement = submenu.querySelector('.sub_menu');
                    subMenuElement.classList.toggle('show');
                });
            });
        });

    $(function () {
        let ticketPopupValue = '{{ session('ticketPopup') }}';

        if (ticketPopupValue == true){
            $('#modal-ticket').modal('show');
        }
        if ('{{ session('synchronized-permission') }}') {
            let synced_permission =  JSON.parse('{{ session('synchronized-permission') }}'.replace(/&quot;/g,'"'));
            if (synced_permission && synced_permission.synchronized) {
                $.toaster({settings: {'timeout': 4000}});
                $.toaster({message: 'Permission ' + synced_permission.route_name + ' cho guard ' + synced_permission.guard_name + ' đã được thêm mới. Vui lòng truy cập trang quản lý người dùng để kích hoạt.' , title: 'Thông báo', priority: 'success'});
                {{ session()->forget('synchronized-permission') }}
            }
        }

        let ticketCheckbox = $('#ticketPopup');
        // ticketCheckbox.change(function () {
        //     if ($(this).is(":checked")) {
        //         ticketPopup('off');
        //     } else {
        //         ticketPopup('on');
        //     }
        // });

        ticketCheckbox.click(function () {
            ticketPopup('off');
        });

        $('form.ajax-submit').submit(function (e) {
            e.preventDefault();

            var isSubmit = $(this).attr('is-submit');
            if (isSubmit !== 'true') {
                $(this).attr('is-submit', 'true');
                var $this = $(this);
                var url = $this.attr('action');
                var method = $this.attr('method');
                var data = $this.serialize();
                var handle = $this.attr('handle');

                $.ajax({
                    type: method,
                    url: url,
                    data: data,
                    dataType: 'json',
                    success: function (resp) {
                        if (resp.status === 'success') {
                            if (handle === 'alert') {
                                alert(resp.msg);
                                window.location.reload();
                            } else if (handle == 'reload') {
                                window.location.reload();
                            }
                        }
                    }
                });
            } else {
                alert('Please wait');
            }
        });
    });

    function ticketPopup(status) {
        $.ajax({
            type: 'get',
            url: '{{ url('/') }}',
            data: {
                status: status
            },
            dataType: 'json',
            success: function (resp) {
                if (status === 'off'){
                    $('#modal-ticket').modal('toggle');
                }
            }
        });
    }

    function formatNumber(value) {
        let val = (value / 1).toFixed(0).replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    $(function () {
        $('[data-toggle="popover"]').popover({
            trigger: "click",
            html: true,
            animateIn: 'slideDown',
            animateOut: 'slideUp',
            target: '#popover',
        });
        let body = $('body');
        body.on('click', function (e) {
            $('[data-toggle="popover"]').each(function () {
                //the 'is' for buttons that trigger popups
                //the 'has' for icons within a button that triggers a popup
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                }
            });
        });

        body.on('hidden.bs.popover', function (e) {
            $(e.target).data("bs.popover").inState.click = false;
        });
    });
</script>

        
@yield('script')
@stack('component-scripts')
</body>
<footer class="bg-gray-50 dark:bg-gray-800">
<div class="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:-10">
<div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
<div class="lg:col-span-2">
<a href="/" class="logo">
                                        <img src="/images/binhbun.png" alt="logo" class="logo_image">
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
<a href="/traffic-user.html" class=" hover:underline">Traffic user</a>
</li>
<li class="mb-4">
<a href="https://bbmkts.com/" class=" hover:underline">About Us</a>
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
<a href="https://bbmkts.com/" class=" hover:underline">Privacy Policy</a>
</li>
<li class="mb-4">
<a href="https://bbmkts.com/" class=" hover:underline">Terms of Service</a>
</li>
<li class="mb-4">
<a href="https://bbmkts.com/" class=" hover:underline">DMCA</a>
</li>
</ul>
</div>
</div>
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
<span class="block text-sm text-center text-gray-500 dark:text-gray-400"><strong>Copyright &copy; 2020 - {{date('Y')}} <a href="https://www.facebook.com/binhbun02" target="_blank">Bình Bun</a>.</strong> All rights reserved.</span>
</div>
</footer>
</html>
