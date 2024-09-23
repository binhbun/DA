@if(in_array(\Illuminate\Support\Facades\Auth::user()->role, [1,2]))

    <li >
    <a href="/admin">
        <!-- <i class="fa fa-dashboard"></i> -->
    <img src="https://i.imgur.com/MQ0Xobe.png" alt="Thống kê" style="width: 20px; height: 20px;">
        <span class="title__v1">Thống kê</span>
        <span class="pull-right-container">
                <!--<i class="fa fa-angle-left pull-right"></i>-->
            </span>
    </a>

</li>
@endif
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('js/jquery.toaster.js')}}"></script>

