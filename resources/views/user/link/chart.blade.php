@extends('adminlte.layouts.app')


@section('content')
    <div class="chart__view-css" style="overflow: auto">
        <h4>Thống kê (Link ID) {{$link->id}}</h4>
        <canvas id="myChart" style="max-height: 500px"></canvas>
    </div>
@endsection
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script>
    $(document).ready(function (e){
        var currentDate = new Date();
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
            ctx.canvas.width = 400;
        }
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                //     {
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
    // Lấy dữ liệu từ cơ sở dữ liệu

</script>
<style>
    .chart__view-css{
        border-top: 3px solid #0b97c4;
        border-radius: 3px 3px;
        background-color: white;
        margin: 20px;
    }
</style>
