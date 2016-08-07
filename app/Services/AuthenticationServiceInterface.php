<?php


namespace OneRocketRoad\Services;


interface AuthenticationServiceInterface {
    function isSignUpValid($email);

    function isLoginValid($email, $password);

    function login($email, $password);
}