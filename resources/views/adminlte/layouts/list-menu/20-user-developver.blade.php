@if(in_array(\Illuminate\Support\Facades\Auth::user()->role, [1,2]))

    <li >
        <a style="cursor: pointer" href="{{route('user.quick-link')}}">
        <img src="https://i.imgur.com/kIEbq78.png" alt="Thống kê" style="width: 20px; height: 20px;">
        <span class="title__v1">API Quick link</span>
        <span class="pull-right-container">
            </span>
        </a>

    </li>
@endif
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('js/jquery.toaster.js')}}"></script>

