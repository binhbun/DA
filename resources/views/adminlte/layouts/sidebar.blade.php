<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
            <li class="header">Home</li>
            @foreach (glob(base_path() . '/resources/views/adminlte/layouts/list-menu/*.blade.php') as $file)
                @include('adminlte.layouts.list-menu.' . basename(str_replace('.blade.php', '', $file)))
            @endforeach
        </ul>
        <!-- /.sidebar-menu -->
    </section>
    @if(auth()->user()->role == 3)
    <section class="sidebar">
        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
            <li class="header">Help Center</li>
            @foreach (glob(base_path() . '/resources/views/adminlte/layouts/list-menu-footer/*.blade.php') as $file)
                @include('adminlte.layouts.list-menu-footer.' . basename(str_replace('.blade.php', '', $file)))
            @endforeach
        </ul>
        <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
    @endif
</aside>
<style>
    @media only screen and (max-width: 600px) {
        .main-sidebar {
            padding-top: auto;
        }
    }
</style>
