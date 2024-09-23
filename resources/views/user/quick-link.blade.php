@extends('adminlte.layouts.app')

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="">Quick Links</div>
        <div class="token-box">
            @foreach($tokenApi as $token)
                <div class="token-item">
                    <div><h4>API Token của bạn:</h4></div>
                    <div class="token__user-copy">
                    <input type="text" readonly="" onfocus="javascript:this.select()" value="{{$token['token']}}">
                            <i class="fa fa-clone" style="color: #0b93d5" onclick="copy('{{$token['token']}}')">
                            </i></div>
                </div>
            @endforeach
        </div>
        <div style="margin-top: 10px">
            <button class="custom-button" onclick="generateToken(this)">Tạo Token</button>
            <div style="padding-top: 10px"><h4 style="font-weight: 700;">Mọi người đều có thể sử dụng cách ngắn nhất để rút gọn link với tính năng API Quick Link.</h4>
                <h4 style="color:#e74c3c;">  <i class="fa fa-angle-double-right"></i> <strong>Hướng dẫn</strong></h4>
                <p><strong style="color:#e74c3c;">Bước 1: </strong>Nhấn vào <strong style="color:blue;">"Tạo Token"</strong> để tạo Token cho tài khoản của bạn</p>
                <p><strong style="color:#e74c3c;">Bước 2: </strong>Chỉ cần sao chép các <strong style="color:blue;">liên kết API</strong> bên dưới vào thanh địa chỉ trình duyệt của bạn và thêm <strong style="color:blue;">link muốn rút gọn</strong> vào cuối <strong style="color:blue;">Liên kết API </strong>và nhấn ENTER. <br>
                 (Hệ thống sẽ tự động rút gọn link. Sao chép nó bất cứ nơi nào bạn muốn chia sẻ và bạn sẽ được trả tiền từ link đó).</p>
            </div>
        </div>
        <div class="your-api">
        <h4 style="color:#e74c3c;">  <i class="fa fa-angle-double-right"></i> <strong>Link API Quick Link</strong></h4>
            @foreach($tokenApi as $token)
                <div class="token__user-copy">
                    <input type="text" readonly="" onfocus="javascript:this.select()" value="{{route('page.quick-link')."?token={$token['token']}&longurl="}}">
                            <i class="fa fa-clone" style="color: #0b93d5" onclick="copy('{{route('page.quick-link')."?token={$token['token']}&longurl="}}')">
                            </i>
                </div>
            @endforeach

        </div>
    </section>
    <!-- /.content -->
@endsection
<style>
    .your-api {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .token-box{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .token-item {
        background: #2bc155;
        border-radius: 5px;
        border-left: 4px solid #205034;
        display: flex;
        font-weight: 700;
        padding:  10px;
        margin: 5px;
        font-family: 'Source Sans Pro',sans-serif;
        flex-direction: column;
    }
    .token-item > div:nth-child(1) {
        color: #FFFFFF;
    }
    .token-item > div:nth-child(2) {
        color: black;
        background: #FFFFFF;
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

    .token__user-copy {
        display: flex;
        align-items: center;
        height: max-content;
        font-size: 13px;
        margin: 0;
        background-color: white;
        width: 80%;
    }

    .token__user-copy > input {
        flex-grow: 1; /* Để input tự mở rộng và căn đều */
        border: 0.01px solid rgba(0, 0, 0, 0.25);
        padding: 10px;
        /* background-color: #d2d6de; */
        width: 80%; /* Input tự căn ngang trên mọi thiết bị */
    }

    .token__user-copy > i {
        padding-left: 5px;
        font-size: 16px;
        border: 0.01px solid rgba(0, 0, 0, 0.25);
        padding: 11px;
    }

    @media screen and (max-width: 600px) {
        .token__user-copy {
            width: 100%;
        }
    }
</style>
<script>
    function copy(data) {
        let text = data
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
</script>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script>
    function generateToken(elem) {
        let  cf = confirm('Bạn có chắc muốn tạo api không?');
        if (cf !== true) return
        $(elem).attr('disabled', 'disabled')

        $.ajax({
            type: 'post',
            url: '{{route('user.create-link')}}',
            data: {
                _token: '{{csrf_token()}}',
                user_id: '{{auth()->user()->id}}'
            },
            success: function (data) {
                toastr.success('Tạo thành công!')
                setTimeout(() => {
                    window.location.reload()
                }, 500)
            },
            error: function (err) {
                toastr.error(err?.responseJSON?.message || 'co loi xay ra')
            }
        })
    }
</script>
