<?php

namespace OneRocketRoad\Stores;

use Illuminate\Support\Facades\Validator;
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
     * @param array $data   The data from which a user will be created.
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
            $fullname = explode(" ", $data['fullname']);

            if (count($fullname) == 0) {
                throw new UnprocessableEntityHttpException();
            }

            $firstname = $fullname[0];
            if (count($fullname) === 2) {
                $lastname = $fullname[1];
            } else {
                $lastname = null;
            }

            // Create the user
            return User::create([
                'firstname' => $firstname,
                'lastname' => $lastname,
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
            ]);
        }

        throw new UnprocessableEntityHttpException();
    }

    /**
     *
     * @param int   $id     The id of the user to delete.
     */
    function delete($id) {
        User::destroy($id);
    }

    function update(array $data) {
        // TODO: Implement update() method.
    }

    function find($id, $columns = array('*')) {
        return User::find($id);
    }}