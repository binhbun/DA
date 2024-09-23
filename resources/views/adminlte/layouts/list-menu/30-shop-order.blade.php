@if(in_array(\Illuminate\Support\Facades\Auth::user()->role, [1,2]))
    <li class="treeview " style="height: auto;">
    <a href="#" id="payment-menu">
        <img src="https://i.imgur.com/9n6werZ.png" alt="Thống kê" style="width: 20px; height: 20px;">
        <!-- <i class="fa fa-dollar"></i> -->
        <span class="title__v1">Payment</span>
        <span class="pull-right-container">
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
            <img src="https://i.imgur.com/o7a0dBp.png" alt="trái" style="width: 12px; height: 12px;" id="payment-trai-image">
            <img src="https://i.imgur.com/qpg0je7.png" alt="dưới" style="width: 12px; height: 12px;" id="payment-duoi-image">
        </span>
    </a>
    <ul class="treeview-menu menu-con"
        style="{{ (request()->is('check-price*', 'widget/*')) ? '' : 'display: none;' }}">
        <li class="{{ request()->is('check-price') ? 'active' : '' }}">
            <a href="{{route('site.get-payment')}}" >
                <!-- <i class="fa fa-send-o"></i> -->
        <img src="https://i.imgur.com/Xb6htcm.png" alt="Thống kê" style="width: 18px; height: 18px;">
                <span class="title__v1">Add Payment</span></a>
        </li>
        <li class="{{ request()->is('check-price') ? 'active' : '' }}">
            <a href="{{route('site.withdrawal-view')}}" >
                <!-- <i class="fa fa-send-o"></i> -->
        <img src="https://i.imgur.com/7ymGWUd.png" alt="Thống kê" style="width: 18px; height: 18px;">
                <span class="title__v1">Rút tiền</span></a>
        </li>
    </ul>
</li>
@endif
<script>
    $(document).ready(function() {
        $("#payment-trai-image").show();
        $("#payment-duoi-image").hide();

        $("#payment-menu").click(function() {
            $(".menu-con").toggle();

            if ($(".menu-con").is(":visible")) {
                $("#payment-trai-image").hide();
                $("#payment-duoi-image").show();
            } else {
                $("#payment-trai-image").show();
                $("#payment-duoi-image").hide();
            }
        });
    });
</script>
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('js/jquery.toaster.js')}}"></script>

