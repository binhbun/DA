@extends('adminlte.layouts.app')
@section('content')

    <div class="container" style="margin-top: 20px">
        <h4>Config </h4>
        <button class="btn btn-primary" style="margin: 20px" data-toggle="modal" data-target="#exampleModal" onclick="addData()">Tạo mới <i class="fa fa-plus"></i></button>
        <div class="table__type-css">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Thời gian và giá</th>
                        <th>Money</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($configs as $config)
                        <tr>
                            <td>{{$config->id}}</td>
                            <td>{{$config->names}}</td>
                            <td>{{$config->name}}</td>
                            <td>{{$config->type_money}}</td>
                            <td>{{$config->created_at}}</td>
                            <td>{{$config->updated_at}}</td>
                            <td>
                                <div>
                                    <!-- <i class="fa fa-edit" data-toggle="modal" data-target="#exampleModal" onclick="addData('{{$config}}')">EDIT</i> -->

                                    <button class="Btn" onclick="addData('{{$config}}')"  data-toggle="modal" data-target="#exampleModal">
                                        <svg class="edit" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="15" width="20" viewBox="0 0 24 24">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                        </button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal edit</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="form-type" action="" method="post">
                        @csrf
                        <input type="hidden" name="id" id="id"/>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="names" name="names" placeholder="input name" required>
                        </div>
                        <div class="form-group">
                            <label for="name">Mô tả</label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="input mô tả" required>
                        </div>
                        <div class="form-group">
                            <label for="type_money">Money</label>
                            <input type="number" class="form-control" id="type_money" name="type_money" placeholder="input view" required>
                        </div>
                        <div class="modal-footer" style="padding-right: 0 !important;">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" id="save-type">Save changes</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
@endsection
<style>
    .table__type-css{
        overflow: auto;
        background-color: white;
        border-top: 2px solid #0b97c4;
        border-radius: 3px 3px;
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
    function addData(data) {
        if (data) {
            data = JSON.parse(data)
            $('#id').val(data.id)
            $('#names').val(data.names)
            $('#name').val(data.name)
            $('#type_money').val(data.type_money)
        } else {
            $('#id').val('')
            $('#names').val('')
            $('#name').val('')
            $('#type_money').val('')
        }
    }
</script>
