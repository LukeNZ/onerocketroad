<?php

namespace OneRocketRoad\Http\Middleware;

use Closure;
use Lcobucci\JWT\Parser;

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
            if ($request->hasHeader('Authorization') && $this->parseToken($request) != null) {

                $token = $this->parseToken($request);

                // Validate

                // Verify

                // Auth::once
            }

            return response('Unauthorized', 401);
        }
        return $next($request);
    }

    /**
     * Parses a JSON Web Token from the header of the request, if it exists.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return string|null
     */
    private function parseToken($request) {
        $tokenArray = explode(" ", $request->header('Authorization'));

        if (count($tokenArray) === 2) {
            return (new Parser())->parse((string) $tokenArray[1]);
        }
        return null;
    }

    private function validateToken() {

    }

    private function verifyToken() {
        
    }
}
