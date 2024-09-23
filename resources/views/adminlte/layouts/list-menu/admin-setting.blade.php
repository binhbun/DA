@if(in_array(\Illuminate\Support\Facades\Auth::user()->role, [1]))
    <li>
    <a href="{{route('admin.get-view-config-job')}}">
        <!-- <i class="fa fa-gears"></i> -->
        <img src="https://i.imgur.com/46SgrWv.png" alt="Thống kê" style="width: 20px; height: 20px;">
        <span class="title__v1">Job/hour</span>
        <span class="pull-right-container">
                    <!-- <i class="fa fa-gears"></i> -->
            </span>
    </a>
</li>
@endif
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('js/jquery.toaster.js')}}"></script>

