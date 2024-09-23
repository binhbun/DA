@if(Auth::check() && in_array(Auth::user()->role, [1,3]))
    <li class="treeview {{ (request()->is('check-price*', 'widget/*')) ? 'active menu-open' : '' }}" style="height: auto;">
        <a href="#" id="quangcao-menu">
            <img src="https://i.imgur.com/cQ0maHj.png" alt="Thống kê" style="width: 20px; height: 20px;">
            <span class="title__v1">Tạo chiến dịch</span>
            <span class="pull-right-container">
                <img src="https://i.imgur.com/o7a0dBp.png" alt="trái" style="width: 12px; height: 12px;" id="trai-image">
                <img src="https://i.imgur.com/qpg0je7.png" alt="dưới" style="width: 12px; height: 12px;" id="duoi-image">
            </span>
        </a>
        <ul class="treeview-menu menu-con1" style="{{ (request()->is('check-price*', 'widget/*')) ? '' : 'display: none;' }}">
            <li class="treeview {{ (request()->is('check-price*', 'widget/*')) ? 'active menu-open' : '' }}" style="height: auto;">
                <a href="#" id="quangcao-menu1">
                    <img src="https://i.imgur.com/EEzKvwC.png" alt="Thống kê" style="width: 18px; height: 18px;">
                    <span class="title__v1">LV1: Google Search</span>
                    <span class="pull-right-container">
                        <img src="https://i.imgur.com/o7a0dBp.png" alt="trái" style="width: 12px; height: 12px;" id="trai-image1">
                        <img src="https://i.imgur.com/qpg0je7.png" alt="dưới" style="width: 12px; height: 12px;" id="duoi-image1">
                    </span>
                </a>
                <ul class="treeview-menu menu-con2" style="{{ (request()->is('check-price*', 'widget/*')) ? '' : 'display: none;' }}">
                    <li class="{{ request()->is('check-price') ? 'active' : '' }}">
                        <a href="{{route('page.show-create2')}}">
                            <img src="https://i.imgur.com/8nNccjM.png" alt="Thống kê" style="width: 20px; height: 20px;">
                            <span class="title__v1">Hiện nút lấy mã</span>
                        </a>
                    </li>
                    <li class="{{ request()->is('check-price') ? 'active' : '' }}">
                        <a href="{{route('page.show-create1')}}">
                            <img src="https://i.imgur.com/8nNccjM.png" alt="Thống kê" style="width: 20px; height: 20px;">
                            <span class="title__v1">Ẩn nút lấy mã</span>
                        </a>
                    </li>
                    <li class="{{ request()->is('check-price') ? 'active' : '' }}">
                        <a href="{{route('page.show-create4')}}">
                            <img src="https://i.imgur.com/8nNccjM.png" alt="Thống kê" style="width: 20px; height: 20px;">
                            <span class="title__v1">ID, Mã KM, Hotline,..</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="{{ request()->is('check-price') ? 'active' : '' }}">
                <a href="{{route('page.show-create3')}}">
                    <img src="https://i.imgur.com/LEVv1dt.png" alt="Thống kê" style="width: 20px; height: 20px;">
                    <span class="title__v1">LV2: GG Search + Direct</span>
                </a>
            </li>
        </ul>
    </li>
@endif
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script>
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
            $(".menu-con2").hide();
            $("#trai-image1").show();
            $("#duoi-image1").hide();
        });

        $("#quangcao-menu1").click(function(event) {
            $(".menu-con2").toggle();

            if ($(".menu-con2").is(":visible")) {
                $("#trai-image1").hide();
                $("#duoi-image1").show();
            } else {
                $("#trai-image1").show();
                $("#duoi-image1").hide();
            }
        });
    });
</script>
