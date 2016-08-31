<?php

namespace OneRocketRoad\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Lcobucci\JWT\Parser;
use OneRocketRoad\Services\AuthenticationServiceInterface;

class JwtAuthenticate
{
    private $authenticationService;

    public function __construct(AuthenticationServiceInterface $authenticationService) {
        $this->authenticationService = $authenticationService;
    }

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
            if ($request->hasHeader('Authorization') && $this->getTokenString($request) != null) {

                // Get the token from the tokenString
                $token = $this->authenticationService->parseToken(
                    $this->getTokenString($request)
                );

                // Check if the token is valid and verifies.
                if ($this->authenticationService->isJsonWebTokenCorrect($token)) {

                    // Get the user from the claim in the token and authenticate them for the current server session
                    $user = $this->authenticationService->getUser($token);
                    Auth::onceUsingId($user->id);

                    return $next($request);
                }
            }

            return response('Unauthorized', 401);
        }
        return $next($request);
    }

    /**
     * Returns the token string from the Authorization header if it exists.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return string|null
     */
    private function getTokenString($request) {
        $tokenArray = explode(" ", $request->header('Authorization'));

        if (count($tokenArray) === 2) {
            return $tokenArray[1];
        }
        return null;
    }
}
