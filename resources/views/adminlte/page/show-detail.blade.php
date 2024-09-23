@extends('adminlte.layouts.app')
@section('content')
    <div id="loading-icon-12" style="display: none;position: fixed; top: 0; right: 0; left: 0; bottom: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: white">
        <img src="{{asset('images/ads.gif')}}"/>
    </div>
    <div style=" margin: 20px !important;">
        <h4 style="font-weight: 700; font-size: 20px">Quảng Cáo</h4>

        <div class="chart__view-css" style="overflow: auto">
            <select id="select-ip-date-mm" style="padding: 2px">
                @foreach($dates as $k => $t)
                    <option  value="{{$t}}">{{$k}}</option>
                @endforeach
            </select>
            <h4>Thống kê</h4>
            <div id="myChartP" >
                <canvas id="myChart" style="min-width:400px;"></canvas>
            </div>
        </div>
        <div class="page__detail-css">
            <span>Embed code</span>
            <div>

            </div>
            <div>
                <span>Trạng thái</span>
                <span>{{$page->status[0]}}</span>
            </div>
            <div>
                <span>Gói</span>
                <span>{{$page->type}}</span>
            </div>
            <div>
                <span>Xem hôm nay</span>
                <span>{{$page->view_today}}</span>
            </div>
            <div>
                <span>Xem mỗi ngày</span>
                <span>{{$page->view_per_day}}</span>
            </div>
            <div>
                <span>Tổng đã xem</span>
                <span>{{$page->all_viewed}}</span>
            </div>
            <div>
                <span>Tổng xem</span>
                <span>{{$page->total_view}}</span>
            </div>
            <div>
                <span>Tổng tiền</span>
                <span>{{number_format($page->total_money, 0, ',', '.').'đ'}}</span>
            </div>
        </div>
        <div style="background: white; margin-top: 50px">
            <select id="select-ip-date">
                @foreach($dataIp as $key => $time)
                    <option @if($key == array_keys($dataIp)[count($dataIp) - 1] ) selected @endif value="{{$key."--ip"}}">{{$key}}</option>
                @endforeach
            </select>
            @foreach($dataIp as $key => $times)
                <div class=" page__ip-css {{$key."--ip"}}">
                    <div>
                        <span>IP</span>
                        <span>View</span>
                        <span>Country</span>
                    </div>
                    @foreach($times as $value)
                        <div>
                            <span>{{$value['ip'] ?? 0}}</span>
                            <span>{{$value['ip_view_total'] ?? 0}}</span>
                            <span>{{!empty($value['country']) ? $value['country'] : "unknown"}}</span>
                        </div>
                    @endforeach
                </div>
            @endforeach
{{--        <!--<div class="page__ip-css">-->--}}
{{--        <!--    <div>-->--}}
{{--        <!--        <span>IP</span>-->--}}
{{--        <!--        <span>View</span>-->--}}
{{--        <!--    </div>-->--}}
{{--        <!--    @foreach($summedData as $datas)-->--}}
{{--        <!--        <div>-->--}}
{{--        <!--            <span>{{$datas->ip}}</span>-->--}}
{{--        <!--            <span>{{$datas->ip_view_total}}</span>-->--}}
{{--        <!--        </div>-->--}}
{{--        <!--    @endforeach-->--}}
{{--        <!--</div>-->--}}
    </div>
@endsection
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script>
    function initChart(dta, date)
    {
        $("#myChart").remove();
        let can = `<canvas id="myChart" style="min-width:400px;"></canvas>`;
        $("#myChartP").append(can);
        let currentDate = new Date(date);
        let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

// Định dạng ngày tháng trong label dưới dạng 'yyyy-mm-dd'
        let labelFormat = function(date) {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            return year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
        }

// Lấy dữ liệu từ cơ sở dữ liệu của bạn và định dạng nó thành một mảng các giá trị số
        console.log(dta)
        let data = JSON.parse(dta);

// Định dạng label cho mảng labels
        let labels = Array.from({length: lastDayOfMonth.getDate()}, (_, i) => {
            let date = new Date(firstDayOfMonth.getTime());
            date.setDate(date.getDate() + i);
            return labelFormat(date);
        });

// Khởi tạo biểu đồ bằng Chart.js
        let ww = $('.chart__view-css').width()

        let ctx = document.getElementById("myChart").getContext("2d");
        if (ww < 600) {
            ctx.canvas.height = 300;
            ctx.canvas.width = 400;
        } else {
            ctx.canvas.height = 150;

        }
        let chart = new Chart(ctx, {
            // Loại biểu đồ: cột
            type: 'bar',

            // Dữ liệu biểu đồ
            data: {
                labels: labels,
                datasets: [{
                    label: 'View',
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },

            // Cấu hình biểu đồ
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
    }
    $(document).ready(function (){
        let dataClss = []
        let dataClssTime = []
        @foreach($dataIp as $key => $times)
            dataClss.push('{{$key."--ip"}}')
        @endforeach
        @foreach($dates as $k => $t)
        dataClssTime.push('{{$k."--time"}}')
        @endforeach
        $('#select-ip-date-mm').change(function (e) {
            setTimeout(() => {
                initData();
            },200)
        }).trigger('change')
        $('#select-ip-date').change(function (e) {
            const vl = $(this).val()
            for (const vlElement of dataClss) {
                $(`.${vlElement}`).hide()
            }
            $(`.${vl}`).show()
        }).trigger('change')

        $('.select').change(function (e){
            const val = $(this).val()
            if (val == 2) {
                window.location.href = `/page/show-detail/${$(this).attr('data-id')}`
            }
        }).trigger('change')
//init data chart
        initData();

    })
    function initData()
    {
        $('#loading-icon-12').show();
        try {
            let currentDate = $('#select-ip-date-mm');
            $.ajax({
                url: '{{route('page.get-data')}}',
                data: {
                    'page-id': '{{$page->id}}',
                    'current-date': currentDate.val(),
                    'user-id': '{{$page->user_id}}'
                },
                success: function (data) {
                    initChart(data.data, data.date);
                    $('#loading-icon-12').hide();
                },
                error: function (err){
                    $.toaster({
                        message: err.responseJSON.message, title: 'Notification', priority: 'error'
                    })
                    $('#loading-icon-12').hide();
                }
            })
        }catch (e) {
            $.toaster({
                message: 'Có lỗi xảy ra. Vui lòng liên hệ admin.', title: 'Notification', priority: 'error'
            })
            $('#loading-icon-12').hide();
        }

    }
    function add() {
        window.location.href = '{{route('page.show-create')}}'
    }
</script>
<style>
    .chart__view-css{
        background-color: white;
        padding-top: 20px;
    }
    .page__detail-css{
        margin-top: 40px;
        background-color: white;
        border-top: 3px solid #0b97c4;
        border-radius: 3px 3px;
        padding: 20px;
    }
    .page__detail-css > div{
        display: flex;
        gap: 20px;
        padding-top: 20px;
    }
    .page__detail-css > div > span:nth-child(1){
        flex-basis: 30%;
        display: inline-block;
    }
    .page__detail-css > div > span:nth-child(2){
        white-space: pre-wrap;
        word-break: break-word;
        flex-basis: 70%;
    }
    .page__ip-css{
        margin-top: 40px;
        background-color: white;
        border-top: 3px solid #0b97c4;
        border-radius: 3px 3px;
        padding: 20px;
    }
    .page__ip-css > div {
        display: flex;
        padding: 30px;
        gap: 20px;
    }
    .page__ip-css > div:nth-child(1) {
        background-color: #0b97c4;
    }
    .page__ip-css > div > span{
        flex-basis: 50%;
    }


</style>

