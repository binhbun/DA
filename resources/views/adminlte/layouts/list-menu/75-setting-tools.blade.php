@if(in_array(\Illuminate\Support\Facades\Auth::user()->role, [1,3]))

<li>
    <a href="{{route('pay.index')}}">
        <img src="https://i.imgur.com/M107JKW.png" alt="Thống kê" style="width: 20px; height: 20px;">
        <span class="title__v1">Nạp tiền</span>
        <span class="pull-right-container">
            </span>
    </a>
</li>
<!-- <li class="treeview " style="height: auto;">
    <a href="#" id="payment-menuz1">
        <img src="https://i.imgur.com/M107JKW.png" alt="Thống kê" style="width: 20px; height: 20px;">
        <span class="title__v1">Nạp tiền</span>
        <span class="pull-right-container">
            <img src="https://i.imgur.com/o7a0dBp.png" alt="trái" style="width: 12px; height: 12px;" id="payment-trai-imagez1">
            <img src="https://i.imgur.com/qpg0je7.png" alt="dưới" style="width: 12px; height: 12px;" id="payment-duoi-imagez1">
        </span>
    </a>
    <ul class="treeview-menu menu-conz1"
        style="{{ (request()->is('check-price*', 'widget/*')) ? '' : 'display: none;' }}">
        <li class="{{ request()->is('check-price') ? 'active' : '' }}">
            <a href="{{route('pay.index')}}" >
        <img src="https://i.imgur.com/M107JKW.png" alt="Thống kê" style="width: 18px; height: 18px;">
                <span class="title__v1">Nạp tiền</span></a>
        </li>
        <li class="{{ request()->is('check-price') ? 'active' : '' }}">
            <a href="{{route('select.package')}}" >
        <img src="https://i.imgur.com/ndNCXFd.png" alt="Thống kê" style="width: 18px; height: 18px;">
                <span class="title__v1">Hóa đơn</span></a>
        </li>
    </ul>
</li> -->
@endif
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('js/jquery.toaster.js')}}"></script>
<!-- <script>
    $(document).ready(function() {
        $("#payment-trai-imagez1").show();
        $("#payment-duoi-imagez1").hide();

        $("#payment-menuz1").click(function() {
            $(".menu-conz1").toggle();

            if ($(".menu-conz1").is(":visible")) {
                $("#payment-trai-imagez1").hide();
                $("#payment-duoi-imagez1").show();
            } else {
                $("#payment-trai-imagez1").show();
                $("#payment-duoi-imagez1").hide();
            }
        });
    });
</script> -->