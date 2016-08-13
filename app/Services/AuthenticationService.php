<?php

namespace OneRocketRoad\Services;

use Illuminate\Support\Facades\Auth;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\ValidationData;
use OneRocketRoad\Models\User;
use PhpParser\Node\Scalar\String_;

class AuthenticationService implements AuthenticationServiceInterface {
    private $maySignUpFile = "maysignup.txt";

    /**
     * For a given email address, check if it has the rights to sign up for an editor account. This is determined
     * by whether the email address is present in a list of whitelisted email addresses, and whether the email
     * address doesn't already exist in the database.
     *
     * @param $email    string  The email to check for sign up ability.
     *
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

    /**
     * For a given email and password purporting to represent a user, attempt to log them in and return
     * a boolean value reflecting the outcome of the operation.
     *
     * @param $email        string  The email address of the claim.
     * @param $password     string  The password of the claim.
     *
     * @return bool
     */
    public function isLoginValid($email, $password) {
        return Auth::attempt(['email' => $email, 'password' => $password]);
    }

    /**
     * Provided with a valid email and password, returns a JSON Web Token representing a successful
     * login claim that the client may provide to the server to act as authentication for future
     * requests.
     *
     * @param $email        string  The email address of the claim.
     * @param $password     string  The password of the claim.
     *
     * @return string
     */
    public function getJsonWebToken($email, $password) {
        // If we have a user with the matching credentials supplied, create and return a JWT.
        if ($this->isLoginValid($email, $password)) {

            $user = User::where('email', $email)->first();

            // return jwt
            return (new Builder())->setIssuer('http://onerocketroad.com')
                                    ->setAudience('http://onerocketroad.com')
                                    ->setIssuedAt(time())
                                    ->setNotBefore(time())
                                    ->set('uid', $user->id)
                                    ->sign(new Sha256(), config('app.key'))
                                    ->getToken();
        }
        return null;
    }

    /**
     * @param $tokenString
     *
     * @return \Lcobucci\JWT\Token
     */
    public function parseToken($tokenString) {
        return (new Parser())->parse((string) $tokenString);
    }

    /**
     * @param $token
     *
     * @return bool
     */
    public function isJsonWebTokenCorrect($token) {
        $token = $this->parseToken($token);

        $data = new ValidationData();
        $data->setIssuer('http://onerocketroad.com');
        $data->setAudience('http://onerocketroad.com');

        return $token->validate($data) && $token->verify(new Sha256(), config('app.key'));
    }

    /**
     * @param $token
     *
     * @return mixed
     */
    public function getUser($token) {
        $token = $this->parseToken($token);

        return User::find($token->getClaim('uid'));
    }
}