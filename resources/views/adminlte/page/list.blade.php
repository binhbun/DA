@extends('adminlte.layouts.app')
@section('content')
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <div class="table-box">
        <div class="container mt-5">
            <center><h3 style="font-weight: 700">Quản Lý Quảng Cáo</h3></center>
            <div class="alert title__v1" style="font-size: 16px; background-color: #ffcccc; border-radius: 10px; margin: 8px;" >
            <a href="{{route('pay.index')}}" style="text-decoration: none; color: black;">
                <img src="https://i.imgur.com/M107JKW.png" alt="Thống kê" style="width: 24px; height: 24px;">  
                Bạn cần có số dư để gia hạn chiến dịch, mua thêm view Google-Direct, chạy thêm từ khóa, mua thêm view cho từ khóa... Bấm vào đây để nạp tiền mà không cần phải chờ đợi duyệt hóa đơn. 
                <img src="https://i.imgur.com/PdSLZkr.png" alt="Thống kê" style="width: 24px; height: 24px;">  
                </a>
            </div>
            <div class="view__box-body">
                <div class="view__box-small">
                    <div>
                        <span class="title__v1">Tổng Camp đang chạy</span>
                        <span>{{$totalCamps}}</span>
                    </div>
                    <div></div>
                </div>
                <div class="view__box-small">
                    <div>
                        <span class="title__v1">Tổng lượt xem hôm nay</span>
                        <span>{{$totalViewedToday}}</span>
                    </div>
                    <div></div>
                </div>
                <div class="view__box-small">
                    <div>
                        <span class="title__v1">Tổng lượt cần chạy hôm nay</span>
                        <span>{{$totalViewsToday}}</span>
                    </div>
                    <div></div>
                </div>
                <div class="view__box-small">
                    <div>
                        <span class="title__v1">Tổng view đã xem</span>
                        <span>{{$totalViewed}}</span>
                    </div>
                    <div></div>
                </div>
                @if($isAdmin)
                    <div class="view__box-small">
                        <div>
                            <span class="title__v1">Số tiền còn lại</span>
                            <span>{{$totalMoneys}}</span>
                        </div>
                        <div></div>
                    </div>
                @else
                    <div class="view__box-small">
                        <div>
                            <span class="title__v1">Số tiền còn lại</span>
                            <span>{{number_format(auth()->user()->money - auth()->user()->total_viewed, 0, ',', '.').'đ'}}</span>
                        </div>
                        <div></div>
                    </div>
                @endif
            </div>

            <div class="chart__view-css" style="overflow: auto">
                <h4>Thống kê</h4>
                <canvas id="myChart" style="min-width:150px;"></canvas>
            </div>
            <div class="page__view-filter" style="background-color: white; padding: 20px">
                @if($isAdmin)
                    <div style="display: flex; align-items: center">
                    <select name="options" style="align-self: flex-start;  padding: 5px; background-color: #4CAF50;color: white;     text-align: center;   text-decoration: none;  display: inline-block; font-size: 16px;  font-weight: 700;  font-family: 'Source Sans Pro',sans-serif;  border: 1px solid black;   border-radius: 5px; cursor: pointer;">
                                            <option value="0" selected>Lựa chọn trạng thái</option>
                                            <option value="1">Hoạt động</option>
                                            <option value="2">Ngừng hoạt động</option>
                                            <option value="4">Chờ thanh toán</option>
                                            <option value="6">Đang xử lý</option>
                                        </select>
                    <form action="{{route('page.get-all-page-admin')}}" method="get" style="width: 100%; margin: 5px">
                        <div class="form-group col-lg-3 col-sm-3" >
                            <input type="text" class="form-control" name="title" placeholder="nhập từ khóa, domain, user_id" value="{{!empty(request()->get('title'))? request()->get('title') : ''}}">
                        </div>
                        <div class="form-group col-lg-3 col-sm-3">
                            <select class="form-control" name="type_id">
                                <option value="-1" @if(empty(request()->get('type_id')) || request()->get('type_id') == -1) selected @endif>Select</option>
                                @foreach($types as $key => $type)
                                    <option value="{{$key}}" @if(request()->get('type_id') == $key) selected @endif>{{$type}}</option>
                                @endforeach
                            </select>
                        </div>
                        <button type="submit" class="btn btn-secondary" style="background-color: #4CAF50;color: white;  padding: 8px;    text-align: center;   text-decoration: none;  display: inline-block; font-size: 16px;  font-weight: 700;  font-family: 'Source Sans Pro',sans-serif;  border: 1px solid black;   border-radius: 5px; cursor: pointer;" >Tìm kiếm</button>
                    </form>
                    
                    </div>
                @else
                    <div style="display: flex;">
                        <select name="options" style="align-self: flex-start; padding: 8px; background-color: #4CAF50; color: white;    text-align: center;   text-decoration: none;  display: inline-block; font-size: 16px;  font-weight: 700;  font-family: 'Source Sans Pro',sans-serif;  border: 1px solid black;   border-radius: 5px; cursor: pointer;" >
                        <option value="0" selected>Lựa chọn trạng thái</option>
                        <option value="1">Hoạt động</option>
                        <option value="2">Ngừng hoạt động</option>
                    </select>
                    <form action="{{route('page.get-all-page')}}" method="get" style="width: 100%; margin: 5px">
                        <!--<div class="form-group col-lg-3 col-sm-3">-->
                        <!--    <input type="number" class="form-control" name="id" placeholder="ID" value="{{!empty(request()->get('id'))? request()->get('id') : ''}}">-->
                        <!--</div>-->
                        <div class="form-group col-lg-3 col-sm-3" >
                            <input type="text" class="form-control" name="title" placeholder="nhập từ khóa, domain" value="{{!empty(request()->get('title'))? request()->get('title') : ''}}">
                        </div>
                        <div class="form-group col-lg-3 col-sm-3">
                            <select class="form-control" name="type_id">
                                <option value="-1" @if(empty(request()->get('type_id')) || request()->get('type_id') == -1) selected @endif>Select</option>
                                @foreach($types as $key => $type)
                                    <option value="{{$key}}" @if(request()->get('type_id') == $key) selected @endif>{{$type}}</option>
                                @endforeach
                            </select>
                        </div>
                        <button type="submit" class="btn btn-secondary" style="background-color: #4CAF50;color: white;  padding: 8px;    text-align: center;   text-decoration: none;  display: inline-block; font-size: 16px;  font-weight: 700;  font-family: 'Source Sans Pro',sans-serif;  border: 1px solid black;   border-radius: 5px; cursor: pointer;">Tìm kiếm</button>
                    </form>
                        <div>
                        <button style="background-color: #4CAF50; color: white; width: 120px; padding: 5px;    text-align: center;   text-decoration: none;  display: inline-block; font-size: 16px;  font-weight: 700;  font-family: 'Source Sans Pro',sans-serif;  border: 1px solid black;   border-radius: 5px; cursor: pointer;" class="sort-by-drag">Sắp xếp</button>
                        
                    </div>
                    </div>

                @endif
            </div>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="thead-dark">
                <tr class="table-primary">
                    <th style="text-align: center; align-content: center;" class="title__v1">Chọn All<br><input type="checkbox"  name="selectall" ></th>
                    <th style="text-align: center; align-content: center;" class="title__v1">Từ khóa (Search Keyword)</th>
                    <th style="text-align: center; align-content: center;" class="title__v1">Trạng thái</th>
                    <th style="text-align: center; align-content: center;" class="title__v1">Ngày BĐ</th>
                    <th style="text-align: center; align-content: center;" class="title__v1">Ngày KT</th>
                    <th style="text-align: center; align-content: center;" class="title__v1">Lever/Ẩn</th>
                    <th style="text-align: center; align-content: center;" class="title__v1">Tên miền</th>
{{--                    <th>View đăng kí</th>--}}
                    <th style="text-align: center; align-content: center;" class="title__v1">View Đã xem</th>
                    <th style="text-align: center; align-content: center;" class="title__v1">Xem hôm nay</th>
                    <th style="text-align: center; align-content: center;" class="title__v1">Xem mỗi ngày</th>
                    <!-- <th>Rank</th> -->
{{--                    <th>Tổng tiền</th>--}}
                    <th style="text-align: center; align-content: center;" class="title__v1">
                        Chỉnh sửa
                    </th>
                </tr>
                </thead>
                <tbody class="sort-list">
                @foreach($pages as $page)
                    <tr class="table-secondary sort-item" data-id="{{$page->id}}">
                        <td  class="title__v">
                            @if(in_array($page->getRawOriginal('status'),[0, 1, 2, 3, 4, 5, 6]))
                            <input type="checkbox" class="pageid" name="pageid" multiple value="{{$page->id}}"><br> {{$page->id}}
                            @endif
                        </td>
                        <td style="white-space: break-spaces; text-align: left;" class="title__v">{{$page->title}}</td>
                        <td style="white-space: nowrap; height: 100%;" class="title__v"><div style="background: {{$page->status[1]}}; border-radius: 10px;  padding: 5px; margin: 3px; color: #fff; font-weight: bold; text-align: center;">{{$page->status[0]}}</div></td>
                        <td  class="title__v">{{$page->start_date}}</td>
                        <td class="title__v" >{{$page->end_date}}</td>
                        <td style="white-space: pre-wrap" class="title__v">LV: {{$page->type_id}}/@if ($page->type_page == 'v1') không @elseif ($page->type_page == 'v2') có  @elseif ($page->type_page == 'available') {{$page->code}}@endif</td>
                        <td class="title__v">{{$page->link_page}}</td>
{{--                        <td>{{$page->total_view}}</td>--}}
                        <td class="title__v">{{$page->all_viewed}}</td>
                        <td class="title__v">{{$page->view_today}}</td>
                        <td class="title__v">{{$page->view_per_day}}</td>
                        <!-- <td>{{empty($page->position) ? "": $page->position}}</td> -->

{{--                        <td>{{number_format($page->total_money, 0, ',', '.').'đ'}}</td>--}}
                        <td  class="title__v"><select class="select" data-id="{{$page->id}}" data-status="{{$page->getRawOriginal('status')}}">
                                <option value="0">__Lựa chọn__</option>
                                <option value="1" >Sửa</option>
                                <option value="3" >Xóa</option>
                                <!-- @if(in_array($page->getRawOriginal('status'),[1, 2, 3]))
                                    <option value="4" >@if($page->getRawOriginal('status') == 1) Tạm dừng @endif @if($page->getRawOriginal('status') == 2) Hoạt động @endif @if($page->getRawOriginal('status') == 3) Hoạt động @endif</option>
                                @endif -->
                                @if(in_array($page->getRawOriginal('status'), [0, 1, 2, 3, 4, 5, 6]))
                                    <option value="4">
                                        @if($page->getRawOriginal('status') == 1) 
                                            Tạm dừng 
                                        @else 
                                            Hoạt động 
                                        @endif
                                    </option>
                                @endif
                                <option value="2">Xem chi tiết lượt xem</option>
                            </select>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
            {{$pages->links()}}
    </div>

        <!-- Modal -->
        <div class="modal fade" id="delete-model-page" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form method="post" action="{{route('page.delete-page')}}">
                        @csrf
                        <input type="hidden" name="id" id="add-id">
                        <div class="modal-body">
                            <span>Bạn có chắc muốn xóa không?</span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="pending-model-page" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form method="post" action="{{route('page.pending-page')}}">
                        @csrf
                        <input type="hidden" name="id" id="pending-id">
                        <input type="hidden" name="status" id="status-page">
                        <div class="modal-body">
                            <span>Bạn có chắc muốn update không?</span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
@endsection
<style>
    input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none; 
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 50%; 
    position: relative;
    cursor: pointer;
    }

    input[type="checkbox"]:checked {
    background-color: green;
    }

    input[type="checkbox"]:checked::after {
    content: '✔';
    color: white;
    font-size: 16px;
    position: absolute;
    top: 0;
    left: 3px;
    }

    .sort-item .dragging {
        opacity: 0.6;
    }
    .sort-item.dragging :where(i) {
        opacity: 0;
    }
    .view__box-body{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2%;
    }
    .view__box-body > .view__box-small:nth-child(1){
        background-color: #00c0ef!important;
    }
    .view__box-body > .view__box-small:nth-child(2){
        background-color: #f012be!important;
    }
    .view__box-body > .view__box-small:nth-child(3){
        background-color: #f39c12!important;
    }
    .view__box-body > .view__box-small:nth-child(4){
        background-color: green;
    }
    .view__box-body > .view__box-small:nth-child(5){
        background-color: #dd4b39!important;
    }
    .view__box-body > .view__box-small:nth-child(6){
        background-color: #0073b7!important;
    }

    .view__box-small{
        margin-top: 20px;
        width: 32%;
        height: 150px;
        color: white;
        font-weight: 800;
        font-size: 20px;
        border-radius: 10px;
    }
    .view__box-small > div:nth-child(1){
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        align-items: center;
    }
    .chart__view-css{
        margin-top: 20px;
        margin-bottom: 50px;
        border-top: 3px solid #2e51ab;
        border-radius: 3px 3px;
        background-color: white;
    }
    @media screen and (max-width: 600px) {
        .view__box-body{
            flex-direction: column;
            align-items: center;
        }
        .view__box-small{
            width: 100%;
        }
    }
    .table-responsive::-webkit-scrollbar {
        width: 10px;
    }

    .table-responsive::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }

    .table-responsive::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        border-radius: 10px;
    }
    .table-responsive{
        overflow: auto;
    }
    .container{
        width: 100% !important;
    }
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

    body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        background-color: #f8f9fa;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        background-color: #fff;
        border: 1px solid #ddd;
        margin-bottom: 30px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }

    th, td {
        padding: 15px;
        text-align: center;
        border: 1px solid #ddd;
        font-size: 14px;
        font-weight: 550;
    }

    th {
        background-color: #3498db;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
    }

    td {
        background-color: #f8f9fa;
        color: #333;
    }

    tr:nth-child(even) td {
        background-color: #f2f2f2;
    }

    tr:hover td {
        background-color: #e2e6ea;
        color: #004a8f;
    }

    .add-new-button {
        margin-top: 40px;
        margin-bottom: 20px;
        text-align: right;
    }

    .add-new-button button {
        background-color: #004a8f;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }

    .add-new-button button:hover {
        background-color: #003366;
    }
    .table-box {
        /*padding: 20px;*/
        /*background-color: #fff;*/
        /*border: 1px solid #ddd;*/
        /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);*/
        /*border-radius: 10px;*/
    }
    .select {
    background-color: #FFFF99;
    color: black;
    padding: 3px 5px;
    border: none;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid black; 
    }
    .table-bordered tbody tr {
    border: 2px solid #ddd;
    }
    @media screen and (max-width: 600px) {
        .table-box{
            margin-top: auto;
        }
    }
</style>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
<script>
    window.onload = function() {
        // Lấy ngày đầu tiên và ngày cuối cùng của tháng hiện tại
        // Lấy ngày đầu tiên và ngày cuối cùng của tháng hiện tại
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
        var data = JSON.parse('{{$data}}');

// Định dạng label cho mảng labels
        var labels = Array.from({length: lastDayOfMonth.getDate()}, (_, i) => {
            var date = new Date(firstDayOfMonth.getTime());
            date.setDate(date.getDate() + i);
            return labelFormat(date);
        });
        let ww = $('.chart__view-css').width()
// Khởi tạo biểu đồ bằng Chart.js
        var ctx = document.getElementById('myChart').getContext('2d');
        if (ww < 600) {
            ctx.canvas.height = 200;
            ctx.canvas.width = 300;
        }

        var chart = new Chart(ctx, {
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
    let selectedOptions = []
    function checkSelectOption() {
        var checkboxes = document.querySelectorAll('input[name="pageid"]:checked');
        selectedOptions = [];
        checkboxes.forEach(function(checkbox) {
            selectedOptions.push(checkbox.value);
        });
        if (selectedOptions.length  > 0) {
            $('select[name="options"]').show()
        } else {
            $('select[name="options"]').hide()
        }
    }
    $(document).ready(function (){
        $('input[name="pageid"]').change(function () {
            setTimeout(() => {
                checkSelectOption()
            }, 100)
        }).trigger('change')
        $('input[name="selectall"]').change(function () {
            if ($(this).is(':checked')) {
                $('input[name="pageid"]').prop('checked', true);
                setTimeout(() => {
                    checkSelectOption()
                }, 100)
            } else {
                $('input[name="pageid"]').prop('checked', false);

                setTimeout(() => {
                    checkSelectOption()
                }, 100)
            }
        });
        $('select[name="options"]').change(function () {
            if ($(this).val() != 1 && $(this).val() != 2 && $(this).val() != 4 && $(this).val() != 6) return
            $.ajax({
                url: '{{route('page.setting-page')}}',
                data: {options: selectedOptions, '_token': '{{csrf_token()}}', 'type': $(this).val()},
                type: 'POST',
                success: function (dat) {
                    $.toaster({
                        'priority': 'success',
                        'message': 'Sửa thành công'
                    })
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                },
                error: function (err) {
                    $.toaster({
                        'priority': 'error',
                        'message': 'Sửa thất bại'
                    })
                }
            })

        }).trigger('change')
        checkSelectOption()

        $('.select').change(function (e){
            const val = $(this).val()
            if (val == 1) {
                window.location.href = `/site/edit-page/${$(this).attr('data-id')}`
            }
            if (val == 2) {
                window.location.href = `/page/show-detail/${$(this).attr('data-id')}`
            }
            if (val == 3) {
                $('#add-id').val(`${$(this).attr('data-id')}`)
                $('#delete-model-page').modal('show')
            }
            if (val == 4) {
                $('#pending-id').val(`${$(this).attr('data-id')}`)
                $('#status-page').val(`${$(this).attr('data-status')}`)
                $('#pending-model-page').modal('show')
            }
        }).trigger('change')
    })
    function add() {
        window.location.href = '{{route('page.show-create')}}'
    }

    $(document).ready(function () {
        $('tbody').sortable();
        $('.sort-by-drag').click(function () {
            var userConfirmation = confirm("Xác nhận sắp xếp lại vị trí camp?");
            if (!userConfirmation) return;
            const sortableList = document.querySelector(".sort-list");
            const items = sortableList.querySelectorAll(".sort-item");
            let data = []
            let sort = 0;
            items.forEach(item => {
                data.push({id: $(item).data('id'), sort: sort})
                sort++;
            });
            $.ajax({
                type:"post",
                data: {
                    _token: '{{csrf_token()}}',
                    data: data
                },
                url: '{{route('page.sort-page')}}',
                success: function () {
                    $.toaster({
                        message: "Thành công.",
                        title: 'Thông báo',
                        priority: 'success'
                    })
                },
                error: function () {
                    $.toaster({
                        message: "Có lỗi xảy ra.",
                        title: 'Thông báo',
                        priority: 'danger'
                    })
                }
            })
        })
    })
</script>
<script>
    function addData(data) {
        if (data) {
            data = JSON.parse(data)
            $('#id').val(data.id)
            $('#name').val(data.name)
            $('#type_money').val(data.type_money)
        } else {
            $('#id').val('')
            $('#name').val('')
            $('#type_money').val('')
        }
    }
    $(document).ready(function(e) {
        $('.btn-add-invoice').click(function(ee) {
            $('#add-model-invoice').modal('show')
        })
        $('.btn-add-invoice-2').click(function(ee) {
            $('#add-model-invoice-2').modal('show')
        })
    })
    let arr = []
    $(document).ready(function(e) {
        $('#select-payment').change(function(e) {
            const val = $(this).val()
            if (val == 0) {
                for (const valKey in arr) {
                    $(`.${arr[valKey]}`).hide()
                }
            } else {
                for (const valKey in arr) {
                    $(`.${arr[valKey]}`).hide()
                }
                $(`.${val}`).show()
            }
        }).trigger('change')
    })
</script>