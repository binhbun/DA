<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;

class IsUserTraffic
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, \Closure $next)
    {
        if (!Auth::check()) {
            return redirect()->route('home.login');
        }
        if (Auth::user()->role != 2 && Auth::user()->role != 1){
            return abort(403);
        }
        return $next($request);
    }
}
