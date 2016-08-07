<?php

namespace OneRocketRoad\Services;

use Illuminate\Support\Facades\Auth;
use OneRocketRoad\Models\User;

class AuthenticationService implements AuthenticationServiceInterface {
    private $maySignUpFile = "maysignup.txt";

    /**
     * For a given email address, check if it has the rights to sign up for an editor account. This is determined
     * by whether the email address is present in a list of whitelisted email addresses, and whether the email
     * address doesn't already exist in the database.
     *
     * @param $email    String  The email to check for sign up ability.
     * @return bool             Whether the provided email address may attempt to sign up.
     */
    public function isSignUpValid($email) {
        $file = new \SplFileObject(base_path($this->maySignUpFile));
        $emailToSignUpWith = null;

        while (!$file->eof()) {
            $maySignUpEmail = trim($file->fgets());

            if ($maySignUpEmail === $email) {
                $emailToSignUpWith = $email;
                break;
            }
        }
        $file = null;

        // If no matching email address was found, or the email address already exists in the database,
        // prevent the user from signing up.
        if ($emailToSignUpWith === null || User::where('email', $emailToSignUpWith)->first() !== null) {
            return false;
        }
        return true;
    }

    public function signUp($email) {
        if ($this->isSignUpValid($email)) {

        }
    }

    /**
     * For a given email and password purporting to represent a user, attempt to log them in and return
     * a boolean value reflecting the outcome of the operation.
     *
     * @param $email        String  The email address of the claim.
     * @param $password     String  The password of the claim.
     * @return bool
     */
    public function isLoginValid($email, $password) {
        return Auth::once(['email' => $email, 'password' => $password]);
    }

    public function login($email, $password) {
        // If we have a user with the matching credentials supplied, create and return a JWT.
        if ($this->isLoginValid($email, $password)) {

        }
    }
}