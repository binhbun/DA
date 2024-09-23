@extends('adminlte.layouts.app')

@section('content')
    <!-- Main content -->
    <section class="content">
            <div>
                @if(in_array(auth()->user()->role, [1,2])) 
                <h4 style="font-weight: 700">Bảng Điều Khiển</h4>
                <!-- Default box -->
                <!-- <div class="alert title__v1" style="font-size: 14px; background-color: #ffcccc; border-radius: 10px; margin: 8px;" >
            <a href="https://t.me/adwebvip" target="_bank" style="text-decoration: none; color: black;">
                <img src="https://i.imgur.com/PdSLZkr.png" alt="Thống kê" style="width: 24px; height: 24px;">  
                HỆ thống chỉ cho phép các thành viên có KÊNH YOUTUBE, SITE TẢI MOD, PHẦN MỀM tham gia - Chỉ tính view từ người thật đến từ Việt Nam (Không tính view từ nước ngoài, vpn, poxry,...) ! - Chi tiết liên hệ Admin: => Tại đây! 
                 
                </a>
            </div> -->
                @endif
            </div>

            @if(session('google_register_success'))
            <div class="alert alert-success">
                <strong>Chúc mừng!</strong> Bạn đã đăng ký thành công bằng tài khoản Google.
            </div>
        @endif

        
        @if(auth()->user()->role_active == 3 && auth()->user()->role == 0)
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <div class="box box-primary">
        <div class="box-header with-border">
            <h3 style="font-weight: 700" class="box-title">Thông báo - duyệt tài khoản</h3>
            </div>
            <div  class="box-body chat">
            <div style="background-color: #FFFFCC; padding: 5px; display: flex; align-items: center;">
                <i class="fas fa-exclamation-circle" style="font-size: 24px; margin-right: 10px; color: #FF0033; "></i>
                <!-- <h3 style ="font-weight: 600">💬Liên hệ Zalo (duyệt tài khoản): 0965870531<br></h3>
                <h3 style ="font-weight: 600">💬Liên hệ Telegram (duyệt tài khoản): @binhbun02</h3> -->
                <p class="feature-desc" data-v-55d6390f ><figure class="wp-block-table">
                    <table><tbody>
                    <tr><td><strong style="font-size: 20px;">💬Liên hệ Zalo: </strong></td><td><strong style="font-size: 20px;"> ✅ 0965870531</strong></td></tr>
                    <tr><td><strong style="font-size: 20px;">💬Liên hệ Telegram: </strong></td><td><strong style="font-size: 20px;"> ✅ @binhbun02</strong></td></tr>
                </tbody></table></figure>

                                                </p>
            </div>
        </div>
        <div class="box-header with-border">
            <h3 style="font-weight: 700" class="box-title">Traffic user download - loại 1</h3>
            </div>
            <div  class="box-body chat">
            <div style="background-color: #FFFFCC; padding: 5px; display: flex; align-items: center;">
            <i class='fab fa-audible' style="font-size: 24px; margin-right: 10px; color: #FF0033; "></i>
            <p class="feature-desc" data-v-55d6390f>
            <figure class="wp-block-table">
                <table>
                <tbody>
                    <tr>
                    <td><strong>✅ Button:</strong></td>
                    <td><strong>⭐ Ẩn/hiện thị</strong></td>
                    </tr>
                    <tr>
                    <td><strong>✅ Từ khóa:</strong></td>
                    <td><strong>⭐ Hỗ trợ nhiều từ khóa</strong></td>
                    </tr>
                    <tr>
                    <td><strong>✅ Thống kê:</strong></td>
                    <td><strong>⭐ Có tracking thống kê</strong></td>
                    </tr>
                    <tr>
                    <td><strong>✅ Time onsite:</strong></td>
                    <td><strong>⭐ 55 - 65s</strong></td>
                    </tr>
                    <tr>
                    <td><strong>✅ Nguồn traffic:</strong></td>
                    <td><strong>⭐ 100% từ Download file game, phần mềm</strong></td>
                    </tr>
                    <tr>
                    <td><strong>✅ Giá traffic user:</strong></td>
                    <td><strong>⭐ 1.000đ</strong></td>
                    </tr>
                    <tr>
                    <td><strong>✅ Time theo yêu cầu:</strong></td>
                    <td><strong>⭐ Liên hệ admin</strong></td>
                    </tr>
                    <tr>
                        <td><strong>✅ Thanh toán:</strong></td>
                        <td><strong>⭐ không yêu cầu số tiền tối thiểu thanh toán </strong></td>
                    </tr>
                </tbody>
                </table>
            </figure>
            </p>
            </div>
        </div>
        <div class="box-header with-border">
            <h3 style="font-weight: 700" class="box-title">Traffic user download - loại 2</h3>
            </div>
            <div  class="box-body chat">
            <div style="background-color: #FFFFCC; padding: 5px; display: flex; align-items: center;">
            <i class='fab fa-audible' style="font-size: 24px; margin-right: 10px; color: #FF0033; "></i>
            <p class="feature-desc" data-v-55d6390f>
            <figure class="wp-block-table">
                    <table>
                        <tbody>
                        <tr>
                            <td><strong>✅ Button:</strong></td>
                            <td><strong>⭐ Hiện thị</strong></td>
                        </tr>
                        <tr>
                            <td><strong>✅ Từ khóa:</strong></td>
                            <td><strong>⭐ Hỗ trợ nhiều từ khóa</strong></td>
                        </tr>
                        <tr>
                            <td><strong>✅ Thống kê:</strong></td>
                            <td><strong>⭐ Có tracking thống kê</strong></td>
                        </tr>
                        <tr>
                            <td><strong>✅ Time onsite:</strong></td>
                            <td><strong>⭐ Page 1: 70 - 80s next Page 2: 15 - 20s</strong></td>
                        </tr>
                        <tr>
                            <td><strong>✅ Nguồn traffic:</strong></td>
                            <td><strong>⭐ 100% từ Download file game, phần mềm</strong></td>
                        </tr>
                        <tr>
                            <td><strong>✅ Giá traffic user:</strong></td>
                            <td><strong>⭐ 1.500đ</strong></td>
                        </tr>
                        <tr>
                            <td><strong>✅ Time theo yêu cầu:</strong></td>
                            <td><strong>⭐ Liên hệ admin</strong></td>
                        </tr>
                        <tr>
                            <td><strong>✅ Thanh toán:</strong></td>
                            <td><strong>⭐ không yêu cầu số tiền tối thiểu thanh toán </strong></td>
                        </tr>
                        </tbody>
                    </table>
                    </figure>
            </p>
            </div>
        </div>

        <div class="box-header with-border">
            <h3 style="font-weight: 700" class="box-title">Dịch vụ traffic user download</h3>
            </div>
            <div  class="box-body chat">
            <div style="background-color: #FFFFCC; padding: 5px; display: flex; align-items: center;">
            <i class='fab fa-audible' style="font-size: 24px; margin-right: 10px; color: #FF0033; "></i>
            <p class="feature-desc" data-v-55d6390f>
            <figure class="wp-block-table">
                    <table>
                        <tbody>
                        <tr>
                            <td><strong>⭐ Tăng lượng truy cập từ nhiều thiết bị khác nhau như mobile, desktop, tablet,…toàn bộ là người dùng thật.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>⭐ Tăng CTR (Tỷ lệ nhấp chuột) tự nhiên.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>⭐ Tăng thứ hạng website trên tìm kiếm Google.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>⭐ Đẩy từ khóa lên top 1 cách nhanh chóng.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>⭐ Tạo Google Suggest &#8211; Tăng nhận diện thương hiệu.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>⭐ Duy trì nguồn traffic ổn định, giảm tỷ lệ thoát trang, tăng Time On Site trên website của bạn.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>⭐ Không làm nhiệm vụ, không dùng tool, không traffic ảo, không fake IP</strong></td>
                        </tr>
                        <tr>
                            <td><strong>⭐ Cơ chế minh bạch, khách hàng tự theo thống kê trên hệ thống của chúng tôi.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>⭐ Khách hàng sẽ hài lòng với những traffic đúng chuẩn như những gì chúng tôi đã giới thiệu, chúng tôi làm việc luôn đặt Uy Tín trên hàng đầu.</strong></td>
                        </tr>
                        </tbody>
                    </table>
                    </figure>
            </p>
            </div>
        </div>
        @endif

        @if(auth()->user()->role_active == 0 && auth()->user()->role == 0)
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <div class="box box-primary">
        <div class="box-header with-border">
            <h3 style="font-weight: 700" class="box-title">Tài khoản của bạn chưa được xác minh, vui lòng liên hệ admin</h3>
        </div>
       <div  class="box-body chat">
        <div style="background-color: #FFFFCC; padding: 5px; display: flex; align-items: center;">
       <i class='fab fa-audible' style="font-size: 24px; margin-right: 10px; color: #FF0033; "></i>

                                        <ul><h3 style ="font-weight: 600">💬Liên hệ Telergram (duyệt tài khoản):<a href="https://t.me/adwebvip"> Admin </a></h3></div>
                </div>
       
        @endif


        @if(auth()->user()->role_active == 2 && auth()->user()->role == 0)
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <div class="box box-primary">
            
        <div class="box-header with-border">
            <h3 style="font-weight: 700" class="box-title">Rút gọn liên kết</h3>
        </div>
           <div  class="box-body chat">
            <div style="background-color: #FFFFCC; padding: 5px; display: flex; align-items: center;">
           <i class='fab fa-audible' style="font-size: 24px; margin-right: 10px; color: #FF0033;"></i>
    
                                        <ul><h4 style="font-weight: 700">
                                          <li><strong>Công cụ hỗ trợ rút gọn link, thu gọn link, làm ngắn link, thống kê lượt truy cập, short link, hoàn toàn miễn phí.</strong></li><br>
                                          <li><strong>Kiếm thu nhập từ việc chia sẻ liên kết rút gọn đó của mình.</strong></li><br>
                                          <li><strong>Trong thời gian tham gia kiếm tiền các hành vi gian lận để kiếm tiền sẽ bị ban không lý do!.</strong></li><br>
                                          <li><strong>Nhiều event siêu hấp dẫn tăng cao doanh thu.</strong></li><br>
                                          <li><strong>Cần có kênh YOUTUBE chia sẻ phần mềm, download game mobile,... mới có thể tham gia kiếm tiền</strong></li><br>
                                          <li><strong>Hệ thống thanh toán nhanh chóng, uy tín.</strong></li>
                                        </ul></h4></div>
                    </div>
            <div class="box-header with-border">
                <h3 style="font-weight: 700" class="box-title">Thông báo</h3>
            
            <div style="background-color: #FFFFCC; padding: 5px; display: flex; align-items: center;">
              <i class="fas fa-exclamation-circle" style="font-size: 24px; margin-right: 10px; color: #FF0033;"></i>
              <ul>
                  <li>
              <h4 style="font-weight: 700">Chấp nhận điều khoản tham gia kiếm tiền!</h4></li>
              <li><h3 style ="font-weight: 600">💬Liên hệ Telergram (duyệt tài khoản):<a href="https://t.me/adwebvip"> Admin </a></h3></li></ul>
           </div></div>
        @endif
        <div class="box">
            @if(in_array(auth()->user()->role, [1,2])) 
            <div>
                <select id="select-month">
                    <option value="-1">-- Chọn tháng --</option>
                </select>
            </div>
            <div class="user__home-css">
                <div class="user__home-child">
                    <div style="display: flex; flex-direction: column; align-items: center">
                        <span style="color: white">Tổng lượt xem</span>
                        <h3 style="color: white;font-weight: 600;">{{!empty($totalView) ? $totalView : 0}}</h3>
                    </div>
                    <span>
                        <svg color="white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye fill-secondary"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </span>
                </div>

                <div class="user__home-child">
                    <div style="display: flex; flex-direction: column; align-items: center">
                        <span style="color: white">Tổng Thu Nhập</span>
                        <h3 style="color: white;font-weight: 600">{{!empty($totalMoney) ? $totalMoney : 0}}</h3>
                    </div>
                    <span>
                       <svg color="white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                          <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                        </svg>
                    </span>
                </div>

                <div class="user__home-child">
                    <div style="display: flex; flex-direction: column; align-items: center">
                        <span style="color: white">CPM</span>
                        <h3 style="color: white;font-weight: 600">{{!empty($cpm) ? $cpm : 0}}</h3>
                    </div>
                    <span>
                        <svg color="white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign fill-secondary"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </span>
                </div>

            </div>
            <!-- /.box-body -->
        </div>
        
        <div class="box box-primary">
        <div class="box-header with-border">
            <i class="fa fa-bullhorn"></i>
            <h2 class="box-title"><strong>Thông báo</strong></h2>
        </div>
        <div class="box-body chat">
                            <div class="item">
                    <p class="announcement">
                            <span>
                                <small class="text-muted pull-right"><i class="fa fa-clock-o"></i>
                                    00:00, 01/01/2023</small>
                              <h3 style="color:#e74c3c;">  <i class="fa fa-angle-double-right"></i> <strong>Quy định rút tiền</strong></h3>
                            </span>

                        <div>
    <h4>⭐ Cập nhật thông tin tại channel<strong> <a href="https://t.me/webvipmoney" target="_blank" style="color:#e74c3c;"> Channel WebMoney </a></strong></h4>
	<h4>⭐ Mọi th&ocirc;ng tin c&aacute;c bạn li&ecirc;n hệ qua Telergram:<strong><a href="https://t.me/adwebvip" target="_blank" style="color:#e74c3c;"> Admin </a></strong></h4>
	<h4>⭐ Hệ thống kiểm duyệt v&agrave; thanh to&aacute;n <strong>h&agrave;ng ng&agrave;y.</strong></h4>
	<h4>⭐ Min r&uacute;t chỉ từ <strong>200k.</strong> </h4>
	<h4>⭐ 1 view / 1 thiết bị / 1 IP / 1 ngày.</strong> </h4>
    <h4>⭐ C&oacute; 2 phương thức r&uacute;t tiền l&agrave; <strong>MOMO </strong>v&agrave; <strong>chuyển khoản ng&acirc;n h&agrave;ng</strong>.</h4>
</div>
                    </p>
                    <p class="announcement">
                            <span>
                                <small class="text-muted pull-right"><i class="fa fa-clock-o"></i>
                                    00:00, 01/01/2023</small>
                                <h3 style="color:#e74c3c;"> <i class="fa fa-angle-double-right"></i> <strong>Quy định</strong></h3>
                            </span><div>
<h4>⭐ Hệ thống <strong>ưu tiên </strong>c&aacute;c bạn l&agrave;m mảng<strong> tải phần mềm, game, t&agrave;i liệu</strong>,....&nbsp;<strong>c&oacute; k&ecirc;nh Youtube, Website </strong>tham gia r&uacute;t gọn link kiếm tiền tr&ecirc;n hệ thống:</h4>

<h4>⭐ Chỉ tính view từ người thật đến từ Việt Nam (Không tính view từ nước ngoài, vpn, poxry, tools...).</strong></h4>
<h4>⭐ Phát hiện vi phạm sẽ bị block tài khoản và không thanh toán.</strong></h4>
              </ul>  
                                </div>
        @endif
    </div>
@if(in_array(auth()->user()->role, [1,2])) 
        <div class="chart__link-css chart__view-css" style="overflow: auto;">
            <canvas id="myChart" style="min-width:325px !important;"></canvas>

        </div>
@endif
    </section>
    <!-- /.content -->
@endsection
<style>
    .chart__link-css{
        border-radius: 3px 3px;
        border-top: 3px solid green;
        background-color: white;
        padding: 3px;
    }
    .user__home-css{
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2%;
    }
    .user__home-child{
        margin-top: 15px;
        width: 32%;
        background-color: #0b97c4;
        display: flex;
        padding: 10px;
        justify-content: space-between;
        border-radius: 10px;
    }
    .user__home-child:nth-child(1){
        background-color: #F46B68;
    }
    .user__home-child:nth-child(2){
        background-color: #369DC9;
    }
    .user__home-child:nth-child(3){
        background-color: #2bc155!important;
    }
    #select-month {
        background-color: #FFFF99;
        color: black;
        padding: 3px 5px;
        border: none;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid black; 
    }
    @media only screen and (max-width: 600px) {
        .user__home-child{
            width: 100%;
        }
        .view-total {
            width: 100% !important;
        }
    }
</style>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script>
    $(document).ready(function (e){
        var select = document.getElementById("select-month");

        for (var i = 0; i < 7; i++) {
            var option = document.createElement("option");
            var date = new Date();
            date.setMonth(date.getMonth() - i);
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            option.value = i;
            option.text = year + " - Tháng " + month;
            select.add(option);
        }
        $('#select-month').change(function (e){
            const dat = $(this).val()
            if (dat == -1) return
            window.location.href = '{{route('admin.home.index')}}' + `?month=${dat}`
        }).trigger('change')
        const  urlParams = new URLSearchParams(window.location.search);
        let month1 = urlParams.get('month');
        if (!month1) month1 = 0
        console.log(month1)
        var currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - month1);
        var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

// Định dạng ngày tháng trong label dưới dạng 'yyyy-mm-dd'
        var labelFormat = function(date) {
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            return year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
        }
        // Lấy dữ liệu từ cơ sở dữ liệu của bạn và định dạng nó thành một mảng các giá trị số
        const expectations = JSON.parse('{{$expectations}}')
        const actuals = JSON.parse('{{$actuals}}')

// Định dạng label cho mảng labels
        var labels = Array.from({length: lastDayOfMonth.getDate()}, (_, i) => {
            var date = new Date(firstDayOfMonth.getTime());
            date.setDate(date.getDate() + i);
            return labelFormat(date);
        });
        // Tạo biểu đồ
        let ww = $('.chart__view-css').width()

        var ctx = document.getElementById("myChart").getContext("2d");
        if (ww < 600) {
            ctx.canvas.height = 300;
            ctx.canvas.width = 380;
        }
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                // {
                //     label: 'Số lần nhấp chuột',
                //     data: expectations,
                //     borderColor: 'rgba(255, 99, 132, 1)',
                //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
                //     fill: false
                // },
                {
                    label: 'Lượt xem',
                    data: actuals,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    })
</script>
