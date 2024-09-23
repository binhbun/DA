<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;

class CheckAdminAndSite
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
        if (Auth::user()->role != 3 && Auth::user()->role != 1) {
            return abort(403);
        }
        return $next($request);
    }
}
