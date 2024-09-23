@extends('adminlte.layouts.app')
@section('pageTitle','Webhook Logging Request | ')
@section('content')
    <div class="col-md-12">
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title">Webhook Logging</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <div class="row">
                    <form action="" method="GET" id="frmLoggingFilter">
                        <div class="col-sm-2 col-md-2">
                            <input type="date" class="form-control" name="date"
                                   value="{{ !empty(request('date')) ? request('date') : $rangeDefault}}"
                                   placeholder="Thời gian"/>
                        </div>

                        <div class="col-sm-2 col-md-2">
                            <div class="input-group input-group margin-bottom">
                                <input type="text" class="form-control search" name="q"
                                       placeholder="Nhập id" value="{{request('q')}}"/>
                                <span class="input-group-btn">
                                <button type="submit" class="btn btn-info btn-flat"><i class="fa fa-filter"></i> Lọc</button>
                            </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <tr>
                            <th>USER ID</th>
                            <th>FULL DOMAIN</th>
                            <th>CREATED AT</th>
                            <th style="width: 135px;">ACTION</th>
                        </tr>
                        @foreach($loggings as $logging)
                            <tr>
                                <td>{{$logging->user_id}}</td>
                                <td>{{$logging->full_domain}}</td>
                                <td>{{$logging->created_at}}</td>
                                <td><i class="fa fa-eye eye-show" style="color: green" data-id="{{$logging->_id}}"></i></td>
                            </tr>
                            <tr>
                                <td colspan="12">
                                    <div class="col-md-12" style="display: none" id="{{$logging->_id}}" check-show="false">
                                        <div class="box">
                                            <div class="box-header with-border">
                                                <h3 class="box-title">Log Detail</h3>
                                            </div>
                                            <div class="box-body">
                                                <div class="box-body">
                                                    <pre id="json-display-{{$logging->_id}}" class="json-editor-blackbord"></pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </table>
                    <div>
                        <span>Hiển thị: </span> <b>{{($loggings->perPage() * ($loggings->currentPage() - 1)) + 1}}</b> -
                        <b>{{$loggings->perPage() * $loggings->currentPage()}}</b> của <b>{{$loggings->total()}}</b>
                    </div>
                </div>

            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
                {{$loggings->appends(request()->except('page'))->links()}}
            </div>
        </div>
        <!-- /.box -->
    </div>
@endsection
@section('script')
        <script src="{{asset('js/jquery.json-editor.min.js')}}"></script>
        <script>
            @foreach($loggings as $log)
                $('#json-display-{{$log->_id}}').jsonViewer(@json($log), {
                    rootCollapsable: true,
                    collapsed: false
                });
            @endforeach

        </script>
    <script type="text/javascript">
        $(function () {
            $('#delivery_code').select2({
                allowClear: true,
            });
            $('#status, #type, #responseFromKv').select2({
                allowClear: true,
                tags: true,
                selectOnBlur: true,
                insertTag: function(data, tag) { // https://github.com/select2/select2/issues/3566#issuecomment-329072552
                    let $found = false;
                    $.each(data, function(index, value) {
                    if($.trim(tag.text).toUpperCase() == $.trim(value.text).toUpperCase()) {
                        $found = true;
                    }
                    });
                    if(!$found) data.unshift(tag);
                }
            });

            $('.search').keypress(function (e) {
                if (e.which == 13) {
                    $('form#frmLoggingFilter').submit();
                    return false;    //<---- Add this line
                }
            });
            $('.eye-show').click(function () {
                const id = $(this).attr('data-id')
                const checkShow = $(`#${id}`).attr('check-show')
                if(checkShow == true || checkShow == "true") {
                    $(`#${id}`).attr('check-show', 'false')
                    $(`#${id}`).hide()
                } else {
                    $(`#${id}`).attr('check-show', 'true')
                    $(`#${id}`).show()
                }
            })

        });
    </script>
@endsection
