@extends('adminlte.layouts.app')
@section('content')
    <div class="table-box" style="margin: 10px">
       <div>
           <span style="font-weight: 600; font-size: 16px">Chọn khách hàng</span>
           <select id="user__select" class="form-control">
               @foreach($users as $user)
                @if($user->invoiceMoney()->count() > 0)
                   <option value="page-{{$user->id}}">{{$user->name}}</option>
                @endif
               @endforeach
           </select>
       </div>
        <div>
            @foreach($users as $user)
                <div class="page-{{$user->id}} page_css">
                    <table class="table table-responsive table-borderless">
                        <thead>
                        <tr class="bg-light">
                            <th scope="col" >ID</th>
                            <th scope="col" >Trạng thái</th>
                            <!--<th scope="col" width="40%">Payment Method</th>-->
                            <!--<th scope="col" width="10%">Date Pay</th>-->
                            <th scope="col" >Số tiền</th>
                            <!--<th scope="col" width="20%">Description</th>-->
                            <th scope="col">Payment time</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($user->invoiceMoney()->orderBy('id', 'DESC')->get() as $invoice2)
                            <tr>
                                <td>{{$invoice2->id}}</td>
                                <td ><span style="white-space:nowrap;border-radius: 8px;background: {{$invoice2->status[1]}};  border-radius: 10px;  padding: 5px; margin: 5px; color: #fff; font-weight: bold; text-align: center;">{{$invoice2->status[0]}}</span></td>
                                <!--<td width="40%">{{$invoice2->payment_method}}</td>-->
                                <!--<td>{{$invoice2->date_pay}}</span></td>-->
                                <td>{{number_format($invoice2->money,0,',','.').'đ'}}</span></td>
                                <!--<td>{{$invoice2->description}}</td>-->
                                <td>{{$invoice2->created_at}}</td>
                                <td>
                                    @if($invoice2->getRawOriginal('status') != 3)
                                        <!-- <i class="fa fa-pencil" onclick="addId({{$invoice2}}, {{$invoice2->getRawOriginal('status')}}, 2)" data-toggle="modal" data-target="#modeledit">EDIT</i> -->
                                        <button class="Btn" onclick="addId({{$invoice2}}, {{$invoice2->getRawOriginal('status')}}, 2)"  data-toggle="modal" data-target="#modeledit">
                                        <svg class="edit" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="15" width="20" viewBox="0 0 24 24">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                        </button>
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            @endforeach
        </div>
    </div>
    <div class="modal fade" id="modeledit" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLongTitle">Duyệt hóa đơn</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="{{route('admin.page-active')}}" method="post" id="form-edit-config">
                        <input type="hidden" name="_id" id="_id" value="" />
                        <input type="hidden" name="_type" id="_type" value="" />
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <div class="form-group">
                            <label>Activity</label>
                            <select class="form-control" name="status" id="status">
                                <!-- <option value="0">Chờ thanh toán</option> -->
                                <!--<option value="1">Đang hoạt động.</option>-->
                                <option value="2">Chờ thanh toán.</option>
                                <option value="3">Đã Thanh Toán.</option>
                                <!--<option value="4">Thanh toán không hợp lệ.</option>-->
                                <!--<option value="5">Hoàn tiền.</option>-->
                                <!--<option value="6">Đang xử lý.</option>-->
                            </select>
                        </div>
                    <hr>
                        <div class="form-group">
                            <label>Date Pay</label>
                            <input type="date" class="form-control" name="invoice-date" id="invoice-date">
                        </div>
                        <div class="form-group">
                            <label>Mô Tả</label>
                            <input type="text" class="form-control" name="invoice-description" id="invoice-description">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
@endsection

<script src="{{ asset('ckeditor/ckeditor.js')}}"></script>
<style>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');

.table-borderless {
    margin-top: 20px;
    padding: 10px;
    border-top: 3px solid #8a8a0f;
    border-radius: 3px 3px;
    font-size: 13px;
}

body, h4 {
    font-family: 'Montserrat', sans-serif !important;
}

.container {
    width: 100% !important;
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
    overflow: auto;
    border-radius: 3px 3px;
    border-top: 3px solid green;
    padding: 20px;
    background-color: #fff;
}

.row-1 {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.row-2 {
    width: 100%;
    max-width: 1000px;
}
.select2-container--default .select2-selection--single {
    height: 500px;
    line-height: 500px;
    border: 2px solid black;
    border-radius: 4px;
    background-color: #FFFF66;
}
.select2-container .select2-search--dropdown .select2-search__field {
    color: black;
    padding: 5px 15px;
    border: 2px solid black;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    height: 40px;
}

.select2-container--default .select2-selection--single .select2-selection__rendered {
    padding: 0 15px;
    line-height: 60px;
    color: black;
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 500px;
    line-height: 60px;
}

.select2-container--default .select2-results>.select2-results__options {
    min-height: 500px;
    overflow-y: auto;
}
.fa.fa-pencil {
    display: inline-block;
    padding: 3px 8px;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #FFFF66;
}

.Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: rgb(163, 142, 255);
    }

    .edit {
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .edit svg {
    width: 15px;
    }

    .edit svg path {
    fill: white;
    }

    .Btn:hover .edit {
    width: 100%;
    transition-duration: .3s;
    }
@media screen and (max-width: 600px) {
    .table-box {
        margin-top: 40px;
        margin-left: 0;
        margin-right: 0 !important;
    }
}

</style>

<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>
<script>
    $(document).ready(function () {
        $('#user__select').select2({
            placeholder: 'Chọn khách hàng',
            width: 'resolve'
        });
        $('#user__select').next('.select2-container').find('.select2-selection--single').css({
            'background-color': '#FFFF66',
            'color': 'black',
            'border': '2px solid black',
            'font-weight': '600',
            'border-radius': '4px',
            'cursor': 'pointer',
            'height': '40px'
        });

        $('#user__select').on('change', function () {
            let selectedValue = $(this).val();
            $('.page_css').hide();
            $(`.${selectedValue}`).show();
        }).trigger('change');

        window.addId = function(data, status, type) {
            $('#_id').val(data.id);
            $('#invoice-date').val(data.date_pay);
            $('#invoice-description').val(data.description);
            $('#status').val(status);
            $('#_type').val(type);
        }
    });
</script>
<!-- <script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script>
    function addId(data,status, type) {
        console.log(data,status, type, 'data,status, type')
        $('#_id').val(data.id)
        $('#invoice-date').val(data.date_pay)
        $('#invoice-description').val(data.description)
        $('#status').val(status)
        $('#_type').val(type)
    }
    $(document).ready(function (e){
        let clss = []
        @foreach($users as $user)
            clss.push('page-{{$user->id}}')
        @endforeach

        $('#user__select').change(function (e){
            for(elm of clss){
                $(`.${elm}`).hide()
            }
            $(`.${$(this).val()}`).show()
        }).trigger('change')

    })
</script> -->

