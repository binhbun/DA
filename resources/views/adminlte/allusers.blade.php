@extends('adminlte.layouts.app')

@section('content')
    <head>


    </head>
    <section class="content-header">
        <h1>
            Admin
            <small>Managerment</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Dashboard</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content" >
        <div style="overflow: auto; background: white">
            <div style="padding: 20px">
                <select id="select-type-user">
                    @foreach($allUsers as $key => $val)
                        <option value="{{$key}}">{{$name[intval($key)]}}</option>
                    @endforeach
                </select>
                <input type="text" id="search-email" placeholder="Nhập Gmail..." class="form-control">
            </div>
            @foreach($allUsers as $key => $allUser)
            <div class=" type-user type-user-{{$key}}">
                <table class="table table-responsive table-borderless table-striped">

                    <thead>
                    <tr class="bg-light" class="title__v1">
                        <th scope="col">ID</th>
                        <th scope="col" >User Name</th>
                        <th scope="col" >Email</th>
                        <th scope="col" >Tổng tiền</th>
                        <th scope="col" >
                        @if($allUser->first()->role != 2)
                                Số dư
                            @else
                                Mật khẩu
                            @endif
                        </th>
                        <th scope="col">
                        @if($allUser->first()->role == 3)
                                Mật khẩu
                            @else
                                View
                            @endif
                        </th>

                        <th scope="col" class="text-end">Login</th>
                        <th scope="col" class="text-end">Action</th>
                    </tr>
                    </thead>
                    <tbody class="user-list">
                    @foreach($allUser as $user)
                        <tr class="title__v1">
                            <td>{{$user->id}}</td>
                            <td>{{$user->name}}</td>
                            <td class="user-email">{{$user->email}}</td>
                            <td>{{number_format($user->total_money, 0, ',','.').'đ'}}</td>
                            <!-- <td>{{number_format($user->total_viewed, 0, ',','.').'đ'}}</span></td> -->
                            <td>
                            @if($user->role == 2)
                                    {{$user->pwd}}
                                @else
                                    {{number_format($user->total_money - $user->total_viewed, 0, ',', '.') . 'đ' }}
                                @endif
                            <!-- {{ number_format($user->total_money - $user->total_viewed, 0, ',', '.') . 'đ' }} -->
                            </td>
                            <!-- <td>{{$user->viewOfLinks->whereIn('status',[1,2])->sum('input_coded')}}</td> -->
                            <td>
                                @if($user->role == 3)
                                    {{$user->pwd}}
                                @else
                                    {{$user->viewOfLinks->whereIn('status',[1,2])->sum('input_coded')}}
                                @endif
                            </td>
                            <td>
                                <button class="Btn" onclick="loginUser('{{$user->id}}')">
                                
                                <div class="sign"><svg viewBox="0 0 512 512">
                                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div>
                        
                                </button>

                        </td>
                         <td>
                            @if(in_array($user->role, [0,1,2,3]))
                                <!-- <i onclick="addId('{{$user->id}}')" class="fa fa-edit" data-toggle="modal" data-target="#modeledit">
                                    EDIT
                                </i> -->
                                <button class="Btn" onclick="addId('{{$user->id}}')"  data-toggle="modal" data-target="#modeledit">
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

{{--            {{$allUsers->links()}}--}}
        </div>
    </section>
    <!-- /.content -->

{{--/ edit--}}
    <div class="modal fade" id="modeledit" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Payment User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="{{route('admin.active-user')}}" method="post" id="form-edit">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <div class="form-group">
                            <label for="activity">Activity</label>
                            <select class="form-control" name="status" id="activity">
                                <option value="1">Từ chối</option>
                                <option value="2">Phê duyệt</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="user_id">ID</label>
                            <input type="text" readonly class="form-control" name="user_id_1" id="user_id" >
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
<style>
    @media only screen and (max-width: 600px) {
        .view-total {
            width: 100% !important;
        }
    }
    .bank {
        display: none;
    }
    .bank1 {
        display: none;
    }
    .type-user {
        display: none;
    }
    /* Add borders to each row in the table */
    .table-borderless tbody tr {
        border-bottom: 2px solid #ddd; /* Adjust the color and size as needed */
    }

    /* Style the select as a button */
    #select-type-user {
        background-color: #FFFF66;
        color: black;
        padding: 5px 15px;
        border: 2px solid black;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
        height: 40px;
        margin: 5px;

    }

    #search-email {
        padding: 5px 15px;
        border: 2px solid black;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
        height: 40px;
        margin: 5px;
    }

    .fa.fa-edit {
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

    /* plus sign */
    .sign {
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .sign svg {
    width: 15px;
    }

    .sign svg path {
    fill: white;
    }

    .Btn:hover .sign {
    width: 100%;
    transition-duration: .3s;
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
</style>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>
<script>
    function getPayment(url) {
        $.ajax({
            type: 'GET',
            url: url,
            success: function (dt) {
                $('#_bankInfo').empty()
                for (let i = 0; i<dt.length;i++) {
                    let string = `<tr><td>${dt[i].type}</td><td>${dt[i].phone}</td><td>${dt[i].bank_number}</td><td>${dt[i].bank_name}</td><td>${dt[i].bank_account}</td></tr>`
                    $('#_bankInfo').append(string)
                }
            }
        })
    }
    function loginUser(userId) {
        $.ajax({
            type: 'POST',
            url: '{{ route('loginAuto') }}',
            data: {
                _token: '{{ csrf_token() }}',
                user_id: userId
            },
            success: function (response) {
                window.location.href = '/admin';
            },
            error: function (xhr) {
                alert('Đăng nhập thất bại!');
            }
        });
    }
    function addId(data) {
        if(data) {
            $('#user_id').val(data)
        }

    }
    $(document).ready(function () {
        $('#select-type-user').change(function (e){
            $(`.type-user`).hide()
            $(`.type-user-${$(this).val()}`).show()
        }).trigger('change')
        $('#type_payment').on('change', function () {
           let type = $('#type_payment').val()
            if (type == 1) {
                $('.momo').show()
                $('.bank').hide()
            } else {
                $('.momo').hide()
                $('.bank').show()
            }
        })
        $('#type_payment_edit').on('change', function () {
            let type = $('#type_payment_edit').val()
            if (type == 1) {
                $('.momo1').show()
                $('.bank1').hide()
            } else {
                $('.momo1').hide()
                $('.bank1').show()
            }
        })
    })

    $(document).ready(function () {
        $('#select-type-user').change(function (e){
            $(`.type-user`).hide();
            $(`.type-user-${$(this).val()}`).show();
        }).trigger('change');

        // Tìm kiếm email
        $('#search-email').on('keyup', function() {
            var value = $(this).val().toLowerCase();
            $('.user-list tr').filter(function() {
                $(this).toggle($(this).find('.user-email').text().toLowerCase().indexOf(value) > -1)
            });
        });

    });
</script>

