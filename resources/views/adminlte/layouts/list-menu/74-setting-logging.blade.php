@if(\Illuminate\Support\Facades\Auth::user()->role == 1)
<li >
        <a href="{{route('page.get-all-page-admin')}}">
        <!-- <i class="fa fa-eye"></i> -->
        <img src="https://i.imgur.com/TaOd4tl.png" alt="Thống kê" style="width: 20px; height: 20px;">
            <span class="title__v1">Tất cả chiến dịch</span>
            <span class="pull-right-container">
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
            </span>
        </a>

    </li>

    <!-- <li class="treeview" style="height: auto;">
        <a href="#">
            <i class="fa fa-eye"></i>
            <span>Tất cả quảng cáo</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu"
            style="{{ (request()->is('check-price*', 'widget/*')) ? '' : 'display: none;' }}">
            <li class="{{ request()->is('check-price') ? 'active' : '' }}">
                <a href="{{route('page.get-all-page-admin')}}"><i class="fa fa-send-o"></i>
                    <span>All Camps</span></a>
            </li>
        </ul>
    </li> -->
@endif

<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
