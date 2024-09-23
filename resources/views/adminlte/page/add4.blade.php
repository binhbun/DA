@extends('adminlte.layouts.app')
@section('content')
    <div class="table-box">
        <div class="container">
            <h4 style="font-size: 25px; text-align: center; padding: 20px; font-weight: 700; font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;"
            >Tạo quảng cáo</h4>
            <div class="row-1">
                <div class="row-2">
                    <div class="card">
                        <div class="card-header card-text">
                            <label>Gói quảng cáo</label>
                            <select id="create-page" name="type3">
                                <option value="create-page-1"> Lever 1: User Google tìm kiếm (ID, Mã KM, Hotline,..)</option>
                            </select>
                        </div>


                        <div class="card-body create-page-1 create-page card-text">
                            <form method="post" action="{{route('user.add-page')}}" enctype="multipart/form-data">
                                @csrf
                                <input name="type_page" value="available" type="hidden">
                                <div class="form-group">
                                    <label>Thời gian tương tác và giá</label>
                                    <!-- <select class="form-control" name="type" >
                                        @foreach($types as $key => $type)
                                            <option value="{{$key}}">{{$type}}</option>
                                        @endforeach
                                    </select> -->
                                    <select class="form-control" name="type" >
                                        @foreach($types as $key => $type)
                                            <option value="{{$key}}" @if($key == 3) selected @else disabled @endif>{{$type}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label style="width: 40%">Ngày bắt đầu:</label>
                                    <input required type="date" name="start-date" min="{{ now()->format('Y-m-d') }}"/>
                                </div>
                                <div class="form-group">
                                    <label style="width: 40%">Ngày kết thúc:</label>
                                    <input required type="date" name="end-date" min="{{ now()->format('Y-m-d') }}"/>
                                </div>
                                <div class="form-group">
                                    <label>Link website:</label>
                                    <input type="url" name="link_page" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label>Từ khóa: (Mỗi từ khóa 1 dòng)</label>
                                    <textarea  class="form-control" required name="title" rows="4" cols="50"></textarea>
                                    <!--<input type="text" name="title" class="form-control" required/>-->
                                </div>
                                <div class="form-group">
                                    <label>View mỗi ngày</label>
                                    <input type="number" min="1" name="view_per_day" class="form-control" required/>
                                </div>
                                <div class="form-group">
                                    <label>Mã code <strong style="color:blue;">(ID bài viết</strong> hoặc <strong style="color:blue;">Mã KM</strong> hoặc <strong style="color:blue;">Hotline,...)</strong> có trong bài viết/trang website:</label>
                                    <input type="text"  name="code" class="form-control" required/>
                                </div>
                                <!-- <div class="form-group">
                                    <label><strong>Ảnh minh họa mã code (Chèn link *) =>>> </strong> <strong>
                                    <button type="button" class="btn btn-primary btn-xs" style="white-space:nowrap; border-radius: 10px; padding: 5px; margin: 5px; text-align: center;" onclick="window.open('{{ route('upanh') }}', '_blank')"><strong class="card-text">Bấm vào đây để up ảnh lấy link!</strong></button>

                                    </label>
                                    <input type="url" min="1" name="image_code" class="form-control" required/>
                                    <label>Hình ảnh minh họa mã code là <strong style="color:blue;">ID bài viết</strong> hoặc <strong style="color:blue;">Mã KM</strong> hoặc <strong style="color:blue;">Hotline,...</strong> có trong bài viết/trang website</strong> ví dụ như ảnh dưới</label>
                                    <img src="https://i.imgur.com/Y0e58bH.png" width="100%" style="min-height: 50px;">
                                    <label>Bạn không cần làm mờ <strong style="color:blue;">hệ thống sẽ tự động che đi số, mã sau khi up ảnh lên hệ thống</strong></label>
                                </div> -->

                                <div class="form-group">
                                <label><strong>Link ảnh minh họa mã code</strong>
                                     </label>
                                    <div class="dropzone" id="dropzone2" style="display: flex; justify-content: center; align-items: center;"></div>
                                    <input type="url" min="1" name="image_code" class="form-control link-show2" required />
                                    <label>Hình ảnh minh họa mã code là <strong style="color:blue;">ID bài viết</strong> hoặc <strong style="color:blue;">Mã KM</strong> hoặc <strong style="color:blue;">Hotline,...</strong> có trong bài viết/trang website</strong> ví dụ như ảnh dưới</label>
                                    <img src="https://i.imgur.com/Y0e58bH.png" width="100%" style="min-height: 50px;" class="image-show2">
                                    <label>Bạn không cần làm mờ chỉ cần up ảnh giống như mẫu <strong style="color:blue;">hệ thống sẽ tự động che đi số, mã sau khi up ảnh lên hệ thống</strong></label>
                                </div>


                                
                                <!-- <div class="form-group">
                                <label><strong>Ảnh minh họa bài viết chạy traffic (Chèn link *) =>>> </strong> <strong>
                                        <button type="button" class="btn btn-primary btn-xs" style="white-space:nowrap; border-radius: 10px; padding: 5px; margin: 5px; text-align: center;" onclick="window.open('{{ route('upanh') }}', '_blank')"><strong class="card-text">Bấm vào đây để up ảnh lấy link!</strong></button>

                                     </label>
                                    <input type="url" min="1" name="image" class="form-control" required/>
                                <label>Hình ảnh minh họa bài viết chạy traffic là  <strong style="color:blue;">kết quả được hiển thị trên google tìm kiếm</strong> ví dụ như ảnh dưới</label>
                                <img src="https://i.imgur.com/WfnYv9z.png" width="100%" style="min-height: 50px;">
                                </div> -->
                                <div class="form-group">
                                <label><strong>Link ảnh minh họa bài viết chạy traffic</strong>
                                </label>
                                    <div class="dropzone" id="dropzone1" style="display: flex; justify-content: center; align-items: center;"></div>
                                    <input type="url" min="1" name="image" class="form-control link-show" required />
                                    <label>Hình ảnh minh họa bài viết chạy traffic là  <strong style="color:blue;">kết quả được hiển thị trên google tìm kiếm</strong> ví dụ như ảnh dưới</label>
                                    <img src="https://i.imgur.com/WfnYv9z.png" width="100%" style="min-height: 50px;" class="image-show">
                                </div>

                                
                                <!-- <div class="form-group">
                                    <label>Mô tả Mã code  *:</label>
                                    <input type="text" name="code_content" class="form-control" value=" " required/>
                                </div> -->
                                <div class="form-group text-center">
                                    <button id="article-ckeditor" type="submit" class="btn btn-success">Save</button>
                                </div>
                                <hr>
                                <div class="is-show-btn">
                            </form>
                            <div class="feature_img">
                                    <img width="auto" height="auto" src="https://i.imgur.com/qFEEg2d.png" alt="Traffic user, traffic user download"/>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
<script>
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
        height: auto;
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

