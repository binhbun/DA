@extends('adminlte.layouts.app')
@section('content')
    <div class="box container">
    <tr>
                        <td colspan="0">Time: {{$hour = now()->hour}}</td> 
                    </tr>
        <form style="overflow: auto; padding: 5px" method="post" action="{{route('admin.set-view-config-job')}}">
            @csrf
        <table class="table table-responsive table-borderless table-bordered table-hover" style="overflow:auto">
            <thead class="thead-dark">
            <tr class="bg-light" class="title__v1">
                <th scope="col" >ID</th>
                <th scope="col" >Name</th>
                <th scope="col" >View cần chạy</th>
                <th scope="col" >View giờ</th>
                <th scope="col" >Số dư</th>
                <th scope="col" >Giới hạn view</th>
            </tr>
            </thead>
            <tbody>
            @foreach($users as $user)
                <input type="hidden" name="userid[]" value="{{$user->id}}"/>
                    <tr class="title__v1">
                        <th >{{$user->id}}</th>
                        <td >{{$user->name}}</td>
                        <td >{{$user->pages()->where('status', 1)->sum('view_per_day') - $user->viewPartners()->whereDate('created_at', now()->toDateString())->sum('total')}}</td>
                        <td>{{intval(Cache::tags('config')->get("get_total_job_per_hour_{$hour}_{$user->id}"))}}</td>
                        <td>{{number_format($user->total_money - $user->total_viewed, 0, ',', '.') . 'đ' }}</td>
                        <td><input type="text" min="1" value="{{$user->configJob->value}}" name="config_jobs[]" /></td>
                    </tr>
            @endforeach

            </tbody>
        </table>
            <button type="submit" class="btn btn-bitbucket mb-5">Cập nhật</button>
        </form>
        {{$users->links()}}
    </div>
@endsection


