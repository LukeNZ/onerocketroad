<?php

namespace OneRocketRoad\Http\Middleware;

use Closure;

class PassJwtToNextRequest
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
        if ($request->hasHeader('Authorization')) {

        }
        return $next($request);
    }
}
