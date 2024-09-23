<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!--<meta http-equiv="X-UA-Compatible" content="IE=edge">-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Bảng Điều Khiển</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="{{asset('templates/adminlte/bower_components/bootstrap/dist/css/bootstrap.min.css')}}">
    <link href='/images/iconbb.png' type='image/x-icon' rel='shortcut icon'/>
    <link rel="stylesheet"
          href="{{asset('templates/adminlte/bower_components/font-awesome/css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('templates/adminlte/bower_components/Ionicons/css/ionicons.min.css')}}">
    <link rel="stylesheet" href="{{asset('templates/adminlte/dist/css/skins/skin-blue.min.css')}}">
    <link rel="stylesheet" href="{{asset('templates/adminlte/bower_components/select2/dist/css/select2.min.css')}}">

    <link href="{{asset('css/style.css')}}" rel="stylesheet" media="screen">
    <link href="{{asset('css/mobile-style.css')}}" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{{asset('templates/adminlte/bower_components/bootstrap-daterangepicker/daterangepicker.css')}}">
    <link rel="stylesheet"
          href="{{asset('templates/adminlte/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')}}">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <![endif]-->

    <!-- Google Font -->
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
    <link rel="stylesheet" href="{{asset('templates/adminlte/dist/css/AdminLTE.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/main.css')}}">
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    @yield('css')
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');
        body, h4, .btn {
            font-family: 'Montserrat', sans-serif !important;
        }
        .link__user-create{
            margin: 10px;
            border-top: 3px solid #0b97c4;
            border-radius: 3px 3px;
            background-color: white;
            padding: 10px;
            border: 2px solid #3c8dbc;
        }
        .title__v1 {
            font-weight: 550; 
            font-family:  Inter,Helvetica,"sans-serif";
        }
        .title__v {
            font-weight: 500; 
            font-family:  Inter,Helvetica,"sans-serif";
            font-size: 15px;
        }
        /* .show-link{
            margin-top: 10px;
            width: 100%;
            background-color: #d5cfcf;
        }
        .show-link >span:nth-child(1) {
            display: inline-block;
            width: 90%;
            padding: 5px;
            border: 1px solid rgb(0,0,0,0.25);
        } */
        .show-link {
            display: flex;
            align-items: center; /* Căn các phần tử con theo chiều dọc */
            padding-right: 8px;
            height: max-content;
            font-size: 14px;
            width: 100%;
        }

        .show-link input {
            flex-grow: 1; /* Để input tự mở rộng và căn đều */
            border: 0.01px solid rgba(0, 0, 0, 0.25);
            padding: 8px;
            background-color: #d2d6de;
            width: 80%; /* Input tự căn ngang trên mọi thiết bị */
        }

        .show-link i {
            padding-left: 8px;
            font-size: 16px;
            border: 0.01px solid rgba(0, 0, 0, 0.25);
            padding: 10px;
        }
    </style>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-61J0804KNV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-61J0804KNV');
</script>
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">
    @include('adminlte.layouts.header')
    @include('adminlte.layouts.sidebar')
    <div class="content-wrapper">
        <section class="content">
            <div class="row">
                <div class="col-md-12" style="z-index: 10; height: max-content">
                    <div class="flash-message cashbook-screen">
                        @foreach (['danger', 'warning', 'success', 'info'] as $msg)
                            @if(Session::has('alert-' . $msg))

                                <p style="box-shadow: 0 10px 3px rgb(0,0,0,0.25);" class="alert alert-{{ $msg }}">{!!  Session::get('alert-' . $msg) !!} <a href="#"
                                                                                                         class="close"
                                                                                                         data-dismiss="alert"
                                                                                                         aria-label="close">&times;</a>
                                </p>
                            @endif
                        @endforeach
                    </div> <!-- end .flash-message -->
                </div>
                <div class="link__user-create" check-show="no">
                    <!-- <h4 style="font-weight: 700">Rút Gọn Liên Kết</h4> -->
                    <form id="fm12" method="post" action="{{route('site.create-link')}}">
                        @csrf
                        <div class="form-group">
                            <!-- <label for="input-field">Nhập link file <span style="color: red">*</span>:</label> -->
                            <input type="text" class="form-control" id="input-field" placeholder="URL của bạn ở đây" name="link-user-file" required>
                        </div>
                        <div class="form-group">
                            <!-- <label for="input-field">Nhập sublink phụ( Nếu bạn có):</label> -->
                            <input type="text" class="form-control" id="input-field" placeholder="Liên kết dự phòng" name="link-user-sublink">
                            <p>Khi hết mã sẽ được chuyển hướng tới <strong>Link dự phòng</strong> giúp các bạn tối ưu kiếm tiền.</p>
                        </div>
                        <div class="form-group">
                            <!-- <label for="input-field">Bí danh:</label> -->
                            <input type="text" class="form-control" id="input-field" placeholder="Bí danh" name="link-user-aliases">
                        </div>
                    </form>
                    <button type="button" name="createlink" class="btn btn-primary">Rút Gọn</button>

                    <div class="show-link">
                        <input type="text" id="link-text" readonly="" onfocus="javascript:this.select()" value="">
                        <i class="fa fa-clone" style="color: #0b93d5" onclick="copy1('d')"></i>
                    </div>


                </div>
                @yield('content')
            </div>
        </section>
    </div>
    @include('adminlte.layouts.footer')
{{--    @if(auth()->user()->hasDirectPermission('crm.ticket.index'))--}}
{{--        @include('adminlte.crm.ticket.share.popup')--}}
{{--    @endif--}}
</div>

<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('/js/tygia.js')}}"></script>
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
    function copy1(data) {
        let text = $('#link-text').val()
        {{--text = '{{route('home.nextpage', data)}}'+'?id='+data--}}
        toastr.success('Đã sao chép')
        if (window.clipboardData && window.clipboardData.setData) {
            // IE: prevent textarea being shown while dialog is visible
            return window.clipboardData.setData("Text", text);

        } else if (document.queryCommandSupported &&
            document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            // Prevent scrolling to bottom of page in MS Edge
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.select();
            try {
                // Security exception may be thrown by some browsers
                return document.execCommand("copy");
            } catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }

    $(document).ready(function (e){
        $('.link__user-create').hide()
        $('.show-link').hide()
    })
    let sss = ''
    $('button[name="createlink"]').click(function (e){
        const fm = $('#fm12');
        const data = fm.serialize()
        $.ajax({
            url: fm.attr('action'),
            type: fm.attr('method'),
            data: data,
            success: function (dt) {
                console.log(dt)
                sss = '<?php echo e(route('home.nextpage', 'linkACB')); ?>'
                sss = sss.replace('linkACB',dt.data.aliases)
                $('#link-text').val(sss)
                toastr.success("Tạo thành công.")
                $('.show-link').show()
            },
            error: function (err) {
                $('.show-link').hide()
                console.log(err)
                toastr.error(err.responseJSON.message ?? "tạo thất bại")
            }
        })
    })
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
</html>
