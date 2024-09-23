
@if(\Illuminate\Support\Facades\Auth::user()->role == 3)
<li >
        <a href="https://www.facebook.com/binhbun02" target="_bank">
        <img src="https://i.imgur.com/Rk8vMaR.png" alt="Thống kê" style="width: 20px; height: 20px;">
            <span class="title__v1">Facebook</span>
            <span class="pull-right-container">
            </span>
        </a>
    </li>

@endif

<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>

