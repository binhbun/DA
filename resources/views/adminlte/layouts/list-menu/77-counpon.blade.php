@if(in_array(\Illuminate\Support\Facades\Auth::user()->role, [1]))
<li class="treeview " style="height: auto;">
    <a href="#" id="payment-menuz">
        <img src="https://i.imgur.com/f8vEjSy.png" alt="Thống kê" style="width: 20px; height: 20px;">
        <!-- <i class="fa fa-dollar"></i> -->
        <span class="title__v1">Mã gói giảm giá</span>
        <span class="pull-right-container">
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
            <img src="https://i.imgur.com/o7a0dBp.png" alt="trái" style="width: 12px; height: 12px;" id="payment-trai-imagez">
            <img src="https://i.imgur.com/qpg0je7.png" alt="dưới" style="width: 12px; height: 12px;" id="payment-duoi-imagez">
        </span>
    </a>
    <ul class="treeview-menu menu-conz"
        style="{{ (request()->is('check-price*', 'widget/*')) ? '' : 'display: none;' }}">
        <li class="{{ request()->is('check-price') ? 'active' : '' }}">
            <a href="{{route('coupons.index')}}" >
                <!-- <i class="fa fa-send-o"></i> -->
        <img src="https://i.imgur.com/PFWnlEw.png" alt="Thống kê" style="width: 18px; height: 18px;">
                <span class="title__v1">Tạo mã</span></a>
        </li>
        <li class="{{ request()->is('check-price') ? 'active' : '' }}">
            <a href="{{route('packages.index')}}" >
                <!-- <i class="fa fa-send-o"></i> -->
        <img src="https://i.imgur.com/PFWnlEw.png" alt="Thống kê" style="width: 18px; height: 18px;">
                <span class="title__v1">Tạo gói</span></a>
        </li>
    </ul>
</li>
@endif
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('js/jquery.toaster.js')}}"></script>
<script>
    $(document).ready(function() {
        $("#payment-trai-imagez").show();
        $("#payment-duoi-imagez").hide();

        $("#payment-menuz").click(function() {
            $(".menu-conz").toggle();

            if ($(".menu-conz").is(":visible")) {
                $("#payment-trai-imagez").hide();
                $("#payment-duoi-imagez").show();
            } else {
                $("#payment-trai-imagez").show();
                $("#payment-duoi-imagez").hide();
            }
        });
    });
</script>