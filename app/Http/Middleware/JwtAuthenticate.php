<?php

namespace OneRocketRoad\Http\Middleware;

use Closure;

class JwtAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->ajax() || $request->wantsJson()) {
            // Check for presence and correctness of JWT.
                // return response('Unauthorized', 401);
        }
        return $next($request);
    }
}
