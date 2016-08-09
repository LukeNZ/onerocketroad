<?php

namespace OneRocketRoad\Http\Controllers\Api;

use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use OneRocketRoad\Http\Controllers\OneRocketRoadBaseController;
use OneRocketRoad\Services\AuthenticationServiceInterface;
use OneRocketRoad\Stores\UserStore;
use OneRocketRoad\Stores\UserStoreInterface;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class AuthController extends OneRocketRoadBaseController {
    use ThrottlesLogins;

    protected $authenticationService, $users;

    public function __construct(AuthenticationServiceInterface $authenticationService,
                                UserStoreInterface $userStore) {
        $this->authenticationService = $authenticationService;
        $this->users = $userStore;
    }

    /**
     * Logs a user in to One Rocket Road. Provides a JSON Web Token to the client on success.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 200 OK if the operation completed successfully.
     * Returns 422 Unprocessable Entity if the login was invalid.
     */
    public function login(Request $request) {
        $json = $request->json()->all();
        $token = $this->authenticationService->login($json['email'], $json['password']);

        if ($token != null) {
            return $this->ok()->header('Authorization', "bearer {$token}");
        }

        return $this->unprocessableEntity();
    }

    /**
     * Signs a user up to One Rocket Road.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 204 No Content if the operation completed successfully.
     * Returns 422 Unprocessable Entity if the sign up was invalid.
     */
    public function signup(Request $request) {
        $json = $request->json()->all();

        if ($this->authenticationService->isSignUpValid($json['email'])) {
            try {
                $this->users->create($json);
                return $this->noContent();

            } catch (UnprocessableEntityHttpException $e) {
                return $this->unprocessableEntity();
            }
        }

        return $this->unprocessableEntity();
    }
}