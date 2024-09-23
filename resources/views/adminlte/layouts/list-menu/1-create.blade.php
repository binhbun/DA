@if(in_array(\Illuminate\Support\Facades\Auth::user()->role, [1,2]))

    <li >
    <a id="user-click-show-create-link" style="cursor: pointer">
        <!-- <i class="fa fa-paper-plane"></i> -->
        <img src="https://i.imgur.com/JM9kcBv.png" alt="Thống kê" style="width: 28px; height: 28px;">
        <span style="font-size: 18px" class="title__v1">Rút Gọn Link Mới</span>
        <span class="pull-right-container">
                <!--<i class="fa fa-angle-left pull-right"></i>-->
            </span>
    </a>

</li>
@endif
<script src="{{asset('templates/adminlte/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('js/jquery.toaster.js')}}"></script>
<script>
    $(document).ready(function (e){
       $('#user-click-show-create-link').click(function (e){
           $('.show-link').hide()
           $('#link-text').text('')
           const t = $('.link__user-create').attr('check-show')
           if (t == "yes") {
               $('.link__user-create').attr('check-show', "no")
               $('.link__user-create').hide()
           } else {
               $('.link__user-create').attr('check-show', "yes")
               $('.link__user-create').show()
           }
       })
    })
</script>
