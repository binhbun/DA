@if(in_array(\Illuminate\Support\Facades\Auth::user()->role, [1,2]))
<li >
        <a href="{{route('site.all-link')}}">
        <!-- <i class="fa fa-link"></i> -->
        <img src="https://i.imgur.com/z3vb4l7.png" alt="Thống kê" style="width: 20px; height: 20px;">
        <span class="title__v1">Quản lý links</span>
        <span class="pull-right-container">
                <!-- <i class="fa fa-angle-left pull-right"></i> -->
            </span>
    </a>

    </li>
<!-- <li class="treeview {{ (request()->is('check-price*', 'widget/*')) ? 'active menu-open' : '' }}" style="height: auto;">
    <a href="#">
        <i class="fa fa-link"></i>
        <span>Quản lý links</span>
        <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
    </a>
    <ul class="treeview-menu"
        style="{{ (request()->is('check-price*', 'widget/*')) ? '' : 'display: none;' }}">
        <li class="{{ request()->is('check-price') ? 'active' : '' }}">
            <a href="{{route('site.all-link')}}" ><i class="fa fa-send-o"></i>
                <span>Tất cả link</span></a>
        </li>

    </ul>
</li> -->
@endif
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('js/jquery.toaster.js')}}"></script>
<!-- <script>
    $('#send-mail').click(function (e) {
        e.preventDefault()
        $.ajax({
            type: "POST",
            url: "{{route('admin.home.send-mail')}}",
            data: {
                'email' : 'hoangthianh1704@gmail.com',
                "_token": "{{ csrf_token() }}",
            },
            success: function (res) {
                $.toaster({message: 'success',title: 'Thông báo'});
            },
            error: function (err) {
                $.toaster({message: 'error',title: 'Thông báo',priority: 'error'});
            }
        })
    })
</script> -->
