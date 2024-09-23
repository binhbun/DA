@extends('adminlte.layouts.app')
@section('content')
    <div class="table-box">
        <div class="container">
            <h4 style="font-size: 25px; text-align: center; padding: 20px; font-weight: 700; font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;"
            >Tạo quảng cáo</h4>
            <div class="row-1">
                <div class="row-2">
                    <div class="card">
                        <!-- <div class="box-header with-border">
                            <h3 style="font-weight: 700" class="box-title"><img src="https://i.imgur.com/3btrluO.gif" alt="" title="Thong bao">Một website chỉ chạy một loại quảng cáo. Chỉ chạy lever 1 hoặc chỉ chạy lever 2.</h3>
                        </div> -->
                    <!-- <hr> -->
                        <div class="card-header card-text">
                            <label>Gói quảng cáo <strong style="color:blue;"> (Nếu bạn chuyển đổi level vui lòng chèn lại các mã JS tương ứng)</strong></label>
                            
                            <select id="create-page">
                                <option value="create-page-1"> Lever 1: User Google tìm kiếm</option>
                                <option value="create-page-2" @if($page->next_link_page != '') selected @endif> Lever 2: User Google tìm kiếm + chuyển hướng bài viết chỉ định   </option>
                            </select>
                        </div>

                        
                        <div class="card-body create-page-1 create-page card-text">
                            <form method="post" action="{{route('user.edit-page')}}" enctype="multipart/form-data">
                                @csrf
                                <input name="__id" type="hidden" value="{{$page->id}}">
                                <div class="form-group">
                                    <label>Ẩn button lấy mã</label>
                                    <strong style="color:blue;"> (Nếu bạn chuyển đổi ẩn/hiện button vui lòng chèn lại các mã JS tương ứng)</strong>
                                    <select class="form-control" name="type_page" >
                                        <option value="v1" @if($page->type_page == 'v1') selected @endif >Không ẩn</option>
                                        <option value="v2" @if($page->type_page == 'v2') selected @endif>Có ẩn</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>Thời gian tương tác và giá</label>
                                    <select class="form-control" name="type">
                                        @foreach($types as $key => $type)
                                            @if($page->type_id == 1)
                                                <option value="{{$key}}" @if($key == $page->type_id) selected @else disabled @endif>{{$type}}</option>
                                            @else
                                                <option value="{{$key}}" @if($key == 1) selected @else disabled @endif>{{$type}}</option>
                                            @endif
                                        @endforeach
                                    </select>

                                </div>
                                <div class="form-group">
                                    <label style="width: 40%">Ngày bắt đầu:</label>
                                    <input required value="{{$page->start_date}}" type="date" name="start-date" min="{{ now()->format('Y-m-d') }}"/>
                                </div>
                                <div class="form-group">
                                    <label style="width: 40%">Ngày kết thúc:</label>
                                    <input required value="{{$page->end_date}}" type="date" name="end-date" min="{{ now()->format('Y-m-d') }}"/>
                                </div>
                                <div class="form-group">
                                    <label>Link website: </label>
                                    <input type="url" name="link_page" class="form-control" value="https://{{$page->link_page}}" required/>
                                </div>
                                <div class="form-group">
                                    <label>Từ khóa: (Mỗi từ khóa 1 dòng)</label>
                                    <textarea  class="form-control" required name="title" rows="4" cols="50">{{$page->title}}</textarea>
                                </div>
                                <div class="form-group">
                                    <label>View mỗi ngày</label>
                                    <input type="number" min="1" name="view_per_day" class="form-control" value="{{$page->view_per_day}}" required/>
                                </div>
                                <!-- <div class="form-group">
                                    <label><strong>Link ảnh minh họa bài viết chạy traffic =>>> </strong> <strong>
                                        <button type="button" class="btn btn-primary btn-xs" style="white-space:nowrap; border-radius: 10px; padding: 5px; margin: 5px; text-align: center;" onclick="window.open('{{ route('upanh') }}', '_blank')"><strong class="card-text">Bấm vào đây để up ảnh lấy link!</strong></button>
                                     </label>
                                    <input type="url" min="1" name="image" class="form-control" value="{{$page->description}}" required/>
                                    <label>Hình ảnh minh họa bài viết chạy traffic là  <strong style="color:blue;">kết quả được hiển thị trên google tìm kiếm</strong> ví dụ như ảnh dưới </label>
                                <img src="https://i.imgur.com/WfnYv9z.png" width="100%" style="min-height: 50px;">
                                </div> -->
                                
                                <div class="form-group">
                                <label><strong>Link ảnh minh họa bài viết chạy traffic</strong>
                                     </label>
                                    <div class="dropzone" id="dropzone1" style="display: flex; justify-content: center; align-items: center;"></div>
                                    <input class="form-control link-show" type="url" min="1" name="image" class="form-control" value="{{$page->description}}" required />
                                    <label>Hình ảnh minh họa bài viết chạy traffic là  <strong style="color:blue;">kết quả được hiển thị trên google tìm kiếm</strong> ví dụ như ảnh dưới</label>
                                    <img src="https://i.imgur.com/WfnYv9z.png" width="100%" style="min-height: 50px;" class="image-show">
                                </div>

                                <div class="form-group text-center">
                                    <button id="article-ckeditor" type="submit" class="btn btn-success">Save</button>
                                </div>
                                <hr>
                                
                                <div class="is-show-btn">
                                <h3><center><strong>Mã Javascript dùng để dán dưới trang website của bạn. (lever 1)</strong></center></h3>
                                <pre id="code1" style="white-space: pre-wrap;">
&lt;div style="display: flex;justify-content: center;"&gt;&lt;div id="bb"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;
  var version = new Date().getTime();
  document.write('&lt;script src="{{asset('js/bb.js')}}?v=' + version + '"&gt;&lt;\/script&gt;');
&lt;/script&gt;
</pre>

<!-- <pre id="code1" style="white-space: pre-wrap;">
&lt;div style="display: flex; justify-content: center;"&gt;&lt;div id="bb"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;
  var version = new Date().getTime();
  var script = document.createElement('script');
  script.src = 'https://bbmkts.com/js/bb.js?v=' + version;
  script.async = true;
  document.head.appendChild(script);
&lt;/script&gt;
</pre> -->

<span class="copy-button" onclick="copyCode('code1')">Sao chép</span>

<div class="feature_img">
                                    <img width="auto" height="auto" src="https://i.imgur.com/Y9Rp9BU.png" alt="Traffic user, traffic user download"/>
                        </div>
<h3 style="color: red;"><center><strong>Mã dưới đây yêu cầu trang chạy cần phải có các bài viết khác (ví dụ: bài viết liên quan, nổi bật,...) có trên trang. </strong></center></h3>

                                <pre id="code11" style="white-space: pre-wrap;">
&lt;div style="display: flex;justify-content: center;"&gt;&lt;div id="bbv1"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;
  var version = new Date().getTime();
  document.write('&lt;script src="{{asset('js/bbv1.js')}}?v=' + version + '"&gt;&lt;\/script&gt;');
&lt;/script&gt;
</pre>
<!-- 
<pre id="code11" style="white-space: pre-wrap;">
&lt;div style="display: flex; justify-content: center;"&gt;&lt;div id="bbv1"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;
  var version = new Date().getTime();
  var script = document.createElement('script');
  script.src = 'https://bbmkts.com/js/bbv1.js?v=' + version;
  script.async = true;
  document.head.appendChild(script);
&lt;/script&gt;
</pre> -->

<span class="copy-button" onclick="copyCode('code11')">Sao chép</span> <h3><center><strong>Mã Javascript dùng để dán dưới trang website của bạn. (lever 1) - click thêm bài viết liên quan, nổi bật,...</strong></center></h3>
<h4 style="color: red;"><center><strong>Đoạn mã này phải được gắn trong tất cả các bài viết (hiển thị trên toàn bộ trang/bài viết của website) mới có thể hoạt động (ví dụ: trong thẻ "Footer" hoặc "Cuối body", cuối tất cả các bài viết,....) </strong></center></h4>
 <div class="feature_img">
                                    <img width="auto" height="auto" src="https://i.imgur.com/1xWiokj.png" alt="Traffic user, traffic user download"/>
                        </div>
                    </div>   
                                <div  class="is-show-disable">
                                <h3><center><strong>Mã Javascript dùng để dán dưới trang website của bạn. (lever 1) - ẩn button</strong></center></h3>
                                <pre id="code2" style="white-space: pre-wrap;">
&lt;script&gt;
  var version = new Date().getTime();
  document.write('&lt;script src="{{asset('js/bbv2.js')}}?v=' + version + '"&gt;&lt;\/script&gt;');
&lt;/script&gt;
</pre>

<!-- <pre id="code2" style="white-space: pre-wrap;">
&lt;script&gt;
  var version = new Date().getTime();
  var script = document.createElement('script');
  script.src = 'https://bbmkts.com/js/bbv2.js?v=' + version;
  script.async = true;
  document.head.appendChild(script);
&lt;/script&gt;
</pre> -->

<span class="copy-button" onclick="copyCode('code2')">Sao chép</span>
<div class="feature_img">
                                    <img width="auto" height="auto" src="https://i.imgur.com/Y9Rp9BU.png" alt="Traffic user, traffic user download"/>
                        </div>
                                </div>
                              
                                <hr />
                            </form>
                        </div>
                        <div class="card-body create-page-2 create-page card-text">
                            <form method="post" action="{{route('user.edit-page')}}" enctype="multipart/form-data">
                                @csrf
                                                                <input type="hidden" name="type3" value="create-page-2">
                                                                <input name="__id" type="hidden" value="{{$page->id}}">
                                <!-- <div class="form-group">
                                <img src="https://i.imgur.com/o7Nb2tk.jpg" width="100%" style="min-height: 50px;">
                                </div> -->
                                <div class="form-group">
                                    <label>Thời gian tương tác và giá</label>
                                    <!-- <select class="form-control" name="type">
                                        @foreach($types as $key => $type)
                                            <option value="{{$key}}" @if($key == $page->type_id) selected @endif>{{$type}}</option>
                                        @endforeach
                                    </select> -->

                                    <select class="form-control" name="type">
                                        @foreach($types as $key => $type)
                                            @if($page->type_id == 2)
                                                <option value="{{$key}}" @if($key == $page->type_id) selected @else disabled @endif>{{$type}}</option>
                                            @else
                                                <option value="{{$key}}" @if($key == 2) selected @else disabled @endif>{{$type}}</option>
                                            @endif
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label style="width: 40%">Ngày bắt đầu:</label>
                                    <input required value="{{$page->start_date}}" type="date" name="start-date" min="{{ now()->format('Y-m-d') }}"/>
                                </div>
                                <div class="form-group">
                                    <label style="width: 40%">Ngày kết thúc:</label>
                                    <input required value="{{$page->end_date}}" type="date" name="end-date" min="{{ now()->format('Y-m-d') }}"/>
                                </div>
                                <div class="form-group">
                                <label>Link website "Trang 1 - Bài viết xuất hiện khi tìm kiếm từ khóa"</label>
                                   
                                    <input type="url" value="https://{{$page->link_page}}" name="link_page" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                <label>Link bài viết "Trang 2 - Các bài viết muốn được chuyển hướng từ trang 1" Mỗi link 1 dòng</label>
                                    <textarea  class="form-control" required name="next_link_page" rows="4" cols="50">{{$page->next_link_page}}</textarea>
                                    <label>Lưu ý: trang 1 và trang 2 phải cùng trên một website ( cùng tên miền )</label>
                                </div>
                                <div class="form-group">
                                    <label>Từ khóa: (Mỗi từ khóa 1 dòng)</label>
                                    <textarea  class="form-control" required name="title" rows="4" cols="50">{{$page->title}}</textarea>
                                    <!--<input type="text" name="title" class="form-control" required/>-->
                                </div>
                                <div class="form-group">
                                    <label>View mỗi ngày</label>
                                    <input value="{{$page->view_per_day}}" type="number" min="1" name="view_per_day" class="form-control" required/>
                                </div>
{{--                                <div class="form-group">--}}
{{--                                    <label>Tổng View</label>--}}
{{--                                    <input type="number" min="1" name="total_view" class="form-control" required/>--}}
{{--                                </div>--}}
                                <!-- <div class="form-group">
                                <label><strong>Link ảnh minh họa bài viết chạy traffic =>>> </strong> <strong> 
                                        <button type="button" class="btn btn-primary btn-xs" style="white-space:nowrap; border-radius: 10px; padding: 5px; margin: 5px; text-align: center;" onclick="window.open('{{ route('upanh') }}', '_blank')"><strong class="card-text">Bấm vào đây để up ảnh lấy link!</strong></button>

                                     </label>
                                     <input type="url" min="1" name="image" class="form-control" value="{{$page->description}}" required/>
                                    <label>Hình ảnh minh họa bài viết chạy traffic là  <strong style="color:blue;">kết quả được hiển thị trên google tìm kiếm</strong> ví dụ như ảnh dưới</label>
                                <img src="https://i.imgur.com/WfnYv9z.png" width="100%" style="min-height: 50px;">
                                </div> -->

                                <div class="form-group">
                                <label><strong>Link ảnh minh họa bài viết chạy traffic</strong>
                                     </label>
                                    <div class="dropzone" id="dropzone1" style="display: flex; justify-content: center; align-items: center;"></div>
                                    <input class="form-control link-show" type="url" min="1" name="image" class="form-control" value="{{$page->description}}" required />
                                    <label>Hình ảnh minh họa bài viết chạy traffic là <strong style="color:blue;">kết quả được hiển thị trên google tìm kiếm</strong> ví dụ như ảnh dưới</label>
                                    <img src="https://i.imgur.com/WfnYv9z.png" width="100%" style="min-height: 50px;" class="image-show">
                                </div>
                                
                                <div class="form-group text-center">
                                    <button type="submit" class="btn btn-success">Save</button>
                                </div>
                                <hr>
                                <hr>
                                <h3><center><strong>Mã Javascript dùng để dán dưới trang website của bạn. (lever 2)</strong></center></h3>
                                <h4><center><strong>Gắn mã này vào trang 1 (trang xuất hiện trên google tìm kiếm theo "từ khóa") </strong></center></h4>
                                <pre id="code3" style="white-space:pre-wrap">
&lt;div style="display: flex;justify-content: center;"&gt;&lt;div id="bb1"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;
  var version = new Date().getTime();
  document.write('&lt;script src="{{asset('js/bb1.js')}}?v=' + version + '"&gt;&lt;\/script&gt;');
&lt;/script&gt;
</pre>

<!-- <pre id="code3" style="white-space: pre-wrap;">
&lt;div style="display: flex; justify-content: center;"&gt;&lt;div id="bb1"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;
  var version = new Date().getTime();
  var script = document.createElement('script');
  script.src = 'https://bbmkts.com/js/bb1.js?v=' + version;
  script.async = true;
  document.head.appendChild(script);
&lt;/script&gt;
</pre> -->

<span class="copy-button" onclick="copyCode('code3')">Sao chép</span>
                                <h4><center><strong>Gắn mã này trang 2 (các trang muốn chuyển hướng) </strong></center></h4>
                                <pre id="code4" style="white-space:pre-wrap">
&lt;div style="display: flex;justify-content: center;"&gt;&lt;div id="bb2"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;
  var version = new Date().getTime();
  document.write('&lt;script src="{{asset('js/bb2.js')}}?v=' + version + '"&gt;&lt;\/script&gt;');
&lt;/script&gt;
</pre>

<!-- <pre id="code4" style="white-space: pre-wrap;">
&lt;div style="display: flex; justify-content: center;"&gt;&lt;div id="bb2"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;script&gt;
  var version = new Date().getTime();
  var script = document.createElement('script');
  script.src = 'https://bbmkts.com/js/bb2.js?v=' + version;
  script.async = true;
  document.head.appendChild(script);
&lt;/script&gt;
</pre> -->

<span class="copy-button" onclick="copyCode('code4')">Sao chép</span>
                                <hr>

                            </form>
                            <div class="feature_img">
                                    <img width="auto" height="auto" src="https://i.imgur.com/4QaK79B.png" alt="Traffic user, traffic user download"/>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
<script>
function copyCode(codeId) {
    var code = document.getElementById(codeId);

    if (!code) {
        console.error('Element with id ' + codeId + ' not found.');
        return;
    }

    if (navigator.clipboard) {
        navigator.clipboard.writeText(code.textContent)
            .then(function () {
                toastr.success('Đã sao chép đoạn mã!');
            })
            .catch(function (err) {
                console.error('Unable to copy text to clipboard', err);
            });
    } else {
        var range = document.createRange();
        range.selectNode(code);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            document.execCommand('copy');
            toastr.success('Đã sao chép đoạn mã!');
        } catch (err) {
            console.error('Unable to copy text to clipboard', err);
        } finally {
            window.getSelection().removeAllRanges();
        }
    }
}
</script>
<script src="{{ asset('ckeditor/ckeditor.js')}}"></script>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script>
    $(document).ready(function (e){

        $('#create-page').change(function (e1){
            const vv1 = $(this).val()
            $(".create-page").hide()
            $(`.${vv1}`).show()
        }).trigger('change')

        $('select[name="type_page"]').change(function () {
            $val = $(this).val()
            if ($val == 'v1') {
                $('.is-show-btn').show()
                $('.is-show-disable').hide()
            } else {
                $('.is-show-btn').hide()
                $('.is-show-disable').show()
            }
        }).trigger('change')
    })
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');

    body, h4 {
        font-family: 'Montserrat', sans-serif !important;
    }
    .container{
        width: 100% !important;
    }
    .feature_img {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        max-width: 100%;
        height: auto;
    }
    .btn-success {
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        width: 200px;
        height: 40px;
        border-radius: 10px !important;
    }

    .add-new-button button:hover {
        background-color: #003366;
    }
    .table-box {
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-top: 3px solid green;
        border-radius: 3px;
        /*height: 100%;*/
        margin: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .row-1 {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .row-2{
        width: 100%;
        max-width: 1000px;
    }
    .card-header select {
      /* Kiểu cho phần select */
      width: 100%;
      padding: 8px;
      border: 2px solid #ccc;
      border-radius: 4px;
    }

    .card-header select option {
      /* Kiểu cho các tùy chọn trong select */
      padding: 5px;
    }

    .card-header select:focus {
      /* Kiểu khi select được focus */
      outline: none;
      border-color: blue;
      box-shadow: 0 0 5px blue;
    } 
    .copy-button {
    display: inline-block;
    padding: 8px 16px; /* Adjust padding as needed */
    font-size: 14px; /* Adjust font size as needed */
    cursor: pointer;
    border: 2px solid #15f2fd; /* Light blue border color */
    border-radius: 4px; /* Add border-radius for rounded corners */
    background-color: #f2f2f2; /* Add background color */
    color: #333; /* Set text color */
    }

    .copy-button:hover {
        background-color: #15f2fd; /* Change background color on hover */
    }
    .card-text {
        font-weight: 700;
        font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 16px;
    }
    @media screen and (max-width: 600px) {
        .table-box{
            margin-top: 40px;
            margin-left: 0;
            margin-right: 0 !important;
        }
        .card-text {
        font-size: 14px;
    }
    }

</style>

