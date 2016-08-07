<?php

namespace OneRocketRoad\Stores;

use OneRocketRoad\Models\User;

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

    function create(array $data) {
        // TODO: Implement create() method.
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