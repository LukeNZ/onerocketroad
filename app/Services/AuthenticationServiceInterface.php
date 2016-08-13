<?php


namespace OneRocketRoad\Services;


interface AuthenticationServiceInterface {
    function isSignUpValid($email);

    function isLoginValid($email, $password);

    function getJsonWebToken($email, $password);

    function parseToken($tokenString);

    function isJsonWebTokenCorrect($token);

    function getUser($token);
}