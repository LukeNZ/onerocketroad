<?php

namespace OneRocketRoad\Services;

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
    public function maySignUp($email) {
        $file = new \SplFileObject($this->maySignUpFile);
        $emailToSignUpWith = null;

        while (!$file->eof()) {
            $maySignUpEmail = $file->fgets();

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
}