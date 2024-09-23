@extends('adminlte.layouts.app')

@section('content')
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
    <section class="content">
        <div style="overflow: auto">

            <table class="table table-responsive table-borderless">

                <thead>
                <tr class="bg-light">
                    <!-- <th scope="col" width="5%"><input class="form-check-input" type="checkbox"></th> -->
                    <th scope="col" width="30%">Name</th>
                    <th scope="col" width="50%">Value</th>
                </tr>
                </thead>
                <tbody>
                <form action="{{route('site.update-setting')}}" method="post">
                    <input type="hidden" name="_token" value="{{csrf_token()}}">
                    @foreach($settings as $setting)
			@if($setting->name != 'is_insert')
                        <tr>
                            <!-- <th scope="row"><input class="form-check-input" type="checkbox"></th> -->
                            <td>{{$setting->name}}</td>
                            <td width="50%"><input class="form-control"
                                                   style="border-radius: 5px"
                                                   name="{{$setting->name}}"
                                                   value="{{$setting->value}}"></td>
                        </tr>
			 @endif
                    @endforeach
                    <!-- <tr>
                        <td colspan="0">Time: {{$hour = now()->hour}}</td> 
                        <td colspan="1"> View/hour: {{intval(\Illuminate\Support\Facades\Cache::get("get_total_job_per_hour_$hour"))}} </td>
                    </tr> -->
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Cập nhật</button>
                        </div>
                </form>
                </tbody>
            </table>
        </div>

    </section>
    <!-- /.content -->
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
</style>
<script src="https://code.jquery.com/jquery-3.6.3.js"></script>


