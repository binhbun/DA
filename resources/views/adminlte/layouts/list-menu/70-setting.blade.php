@if(in_array(\Illuminate\Support\Facades\Auth::user()->role, [1,3]))
<li >
        <a href="{{route('page.get-all-page')}}">
        <!-- <i class="fa fa-money"></i> -->
        <img src="https://i.imgur.com/K6lD4CM.png" alt="Thống kê" style="width: 25px; height: 25px;">
            <span class="title__v1">Thống kê chiến dịch</span>
            <span class="pull-right-container">
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
            </span>
        </a>

    </li>



    <!-- <li class="treeview {{ (request()->is('check-price*', 'widget/*')) ? 'active menu-open' : '' }}" style="height: auto;">
        <a href="#" id="quangcao-menu">
            <i class="fa fa-globe"></i>
        <img src="https://i.imgur.com/K6lD4CM.png" alt="Thống kê" style="width: 20px; height: 20px;">
            <span>Quảng Cáo</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <img src="https://i.imgur.com/o7a0dBp.png" alt="trái" style="width: 12px; height: 12px;" id="trai-image">
                <img src="https://i.imgur.com/qpg0je7.png" alt="dưới" style="width: 12px; height: 12px;" id="duoi-image">
            </span>
        </a>
        <ul class="treeview-menu menu-con1"
            style="{{ (request()->is('check-price*', 'widget/*')) ? '' : 'display: none;' }}">
            <li class="{{ request()->is('check-price') ? 'active' : '' }}">
                <a href="{{route('page.get-all-page')}}">
                    <i class="fa fa-dashboard"></i>
        <img src="https://i.imgur.com/cQ0maHj.png" alt="Thống kê" style="width: 20px; height: 20px;">
                    <span>Danh sách</span></a>
            </li>
            <li class="{{ request()->is('check-price') ? 'active' : '' }}">
                <a href="{{route('page.show-create')}}">
                    <i class="fa fa-send-o"></i>
        <img src="https://i.imgur.com/8nNccjM.png" alt="Thống kê" style="width: 20px; height: 20px;">
                    <span>Tạo Mới</span></a>
            </li>
        </ul>
    </li> -->
@endif
<!-- <script>
    $(document).ready(function() {
        $("#trai-image").show();
        $("#duoi-image").hide();

        $("#quangcao-menu").click(function() {
            $(".menu-con1").toggle();

            if ($(".menu-con1").is(":visible")) {
                $("#trai-image").hide();
                $("#duoi-image").show();
            } else {
                $("#trai-image").show();
                $("#duoi-image").hide();
            }
        });
    });
</script> -->
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>

