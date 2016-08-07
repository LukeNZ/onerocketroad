<?php

namespace OneRocketRoad\Stores;

use Illuminate\Contracts\Validation\Validator;
use OneRocketRoad\Models\User;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class UserStore implements UserStoreInterface {

    /**
     * Fetch all entities from the store.
     *
     * @param array $columns
     *
     * @return mixed
     */
    function all($columns = array('*')) {
        return User::all($columns);
    }

    /**
     * Creates a User.
     *
     * @param array $data
     *
     * @return User|UnprocessableEntityHttpException    A user if creation succeeded or an exception if
     *                                                  validation failed.
     */
    function create(array $data) {
        $validator = Validator::make($data, [
            'fullname'  => ['required', 'max:255'],
            'email'     => ['required', 'email', 'max:255', 'unique:users'],
            'password'  => ['required', 'min:8'],
        ]);

        if ($validator->passes()) {

            // Split fullname into first and last
            $firstname = "";
            $lastname = "";

            return User::create([
                'firstname' => $firstname,
                'lastname' => $lastname,
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
            ]);
        } else {
            throw new UnprocessableEntityHttpException();
        }
    }

    function delete($id) {
        // TODO: Implement delete() method.
    }

    function update(array $data) {
        // TODO: Implement update() method.
    }

    function find($id, $columns = array('*')) {
        return User::find($id);
    }}