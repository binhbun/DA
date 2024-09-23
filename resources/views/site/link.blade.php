@extends('adminlte.layouts.app')

@section('content')
    <section class="content-header">
        <h4 style="font-weight: 700">Quản Lý Liên Kết</h4>
    </section>

    <!-- Main content -->
    <section class="content">
        <form>
            <div style="display: flex;align-items: center; gap: 1rem">
                <!-- <label>Bí danh</label> -->
                <input name="aliases" class="form-control" style="width: 50%;" placeholder="Bí danh" value="{{request()->get('aliases', '')}}"/>
                <button class="btn btn-primary" >Tìm kiếm</button>
            </div>
        </form>
        <div style="overflow: auto">
            @foreach($links as $link)
                <div class="link__user-list">
                    <span>{{$link->aliases}}</span>
                    <div>
                        <a href="{{route('link.chart', $link->id)}}"><i class="fa fa-bar-chart"> Số liệu thống kê</i></a>
                        
                    </div>
                    <div>
                        <span><i class="fa fa-calendar"></i> {{$link->created_at}}</span>
                        <span style="background-color: #0b97c4; border-radius: 5px; color: white; padding: 3px">{{$link->status == 1 ? 'Hiện' : 'Ẩn'}}</span>
                    </div>
                    <div>
                        <div class="link__user-copy">
                            <input type="text" readonly="" onfocus="javascript:this.select()" value="{{route('home.nextpage', $link->aliases)}}">
                            <i class="fa fa-clone" style="color: #0b93d5" onclick="copy('{{route('home.nextpage', $link->aliases)}}')">
                            </i>
                        </div>
                        <button class="btn btn-primary" onclick="addData('{{$link}}')" data-toggle="modal" data-target="#exampleModal">Sửa</button>
                    </div>
                </div>
            @endforeach

        </div>
    </section>
    {{$links->links()}}

    <!-- Button trigger modal -->

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <form action="{{route('site.edit-link')}}" method="post" >

            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal edit</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    @csrf
                    <h4 style="font-weight: 700">Chỉnh Sửa Liên Kết</h4>
                    <input id="_idlink" name="_idlink" type="hidden"/>
                    <div class="form-group">
                        <!-- <label >Nhập link file <span style="color: red">*</span>:</label> -->
                        <input type="text" class="form-control" id="edit-link" placeholder="URL của bạn ở đây" name="link-file" required>
                    </div>
                    <div class="form-group">
                        <!-- <label >Nhập sublink phụ( Nếu bạn có):</label> -->
                        <input type="text" class="form-control" id="edit-sublink" placeholder="Liên kết dự phòng" name="sublink">
                    </div>
                    <div class="form-group" >
                        <label >Trạng thái:</label>
                        <select class="form-control" id="link-status" name="status">
                            <option value="1">Hiện</option>
                            <option value="0">Ẩn</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
            </form>
        </div>
    </div>
    <!-- /.content -->
@endsection
<style>
    @media only screen and (max-width: 600px) {
        .view-total {
            width: 100% !important;
        }
    }
</style>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>

<script>
    function addData(data){
        data = JSON.parse(data)
        $('#_idlink').val(data.id)
        $('#edit-link').val(data.linkfile)
        $('#edit-sublink').val(data.sublink)
        $('#link-status').val(data.status)
    }

    function copy(data) {
        let text = data
        {{--text = '{{route('home.nextpage', data)}}'+'?id='+data--}}
        toastr.success('Đã sao chép')
        if (window.clipboardData && window.clipboardData.setData) {
            // IE: prevent textarea being shown while dialog is visible
            return window.clipboardData.setData("Text", text);

        } else if (document.queryCommandSupported &&
            document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            // Prevent scrolling to bottom of page in MS Edge
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.select();
            try {
                // Security exception may be thrown by some browsers
                return document.execCommand("copy");
            } catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }
</script>
<style>
    .link__user-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        margin-top: 20px;
        padding: 10px;
    }

    .link__user-list > div {
        display: flex;
        justify-content: space-between;
    }

    .link__user-copy {
        display: flex;
        align-items: center; /* Căn các phần tử con theo chiều dọc */
        padding-right: 5px;
        height: max-content;
        font-size: 13px;
        width: 80%;
    }

    .link__user-copy > input {
        flex-grow: 1; /* Để input tự mở rộng và căn đều */
        border: 0.01px solid rgba(0, 0, 0, 0.25);
        padding: 5px;
        background-color: #d2d6de;
        width: 80%; /* Input tự căn ngang trên mọi thiết bị */
    }

    .link__user-copy > i {
        padding-left: 5px;
        font-size: 16px;
        border: 0.01px solid rgba(0, 0, 0, 0.25);
        padding: 6px;
    }

    @media screen and (max-width: 600px) {
        .link__user-list > div {
            flex-wrap: wrap;
        }

        .link__user-copy {
            width: 100%;
        }
    }
</style>
