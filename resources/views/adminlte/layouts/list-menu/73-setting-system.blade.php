
@if(\Illuminate\Support\Facades\Auth::user()->role == 1)
<li >
        <a href="{{route('page.accept')}}">
        <!-- <i class="fa fa-money"></i> -->
        <img src="https://i.imgur.com/25r3F2f.png" alt="Thống kê" style="width: 25px; height: 25px;">
            <span class="title__v1">Duyệt Hóa Đơn</span>
            <span class="pull-right-container">
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
            </span>
        </a>

    </li>

    <!-- <li class="treeview" style="height: auto;">
        <a href="#">
            <i class="fa fa-money"></i>
            <span>Duyệt Hóa Đơn</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu"
            style="{{ (request()->is('check-price*', 'widget/*')) ? '' : 'display: none;' }}">
            <li class="{{ request()->is('check-price') ? 'active' : '' }}">
                <a href="{{route('page.accept')}}"><i class="fa fa-send-o"></i>
                    <span>Tất cả</span></a>
            </li>
        </ul>
    </li> -->
@endif

<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>

