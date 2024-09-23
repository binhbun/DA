<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Auth;

class IsHacker
{
    public function handle($request, \Closure $next)
    {
        if (!Auth::check()) {
            return redirect()->route('home.login');
        }
        if (Auth::user()->role != 22) {
            return abort(404);
        }
        return $next($request);
    }
}
