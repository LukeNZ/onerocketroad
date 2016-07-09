<?php

namespace OneRocketRoad\Stores;

interface StoreInterface {
    /**
     * Fetch all entities from the store.
     *
     * @param array $columns
     * @return mixed
     */
    function all($columns = array('*'));

    function create(array $data);

    function delete($id);

    function update(array $data);

    function find($id, $columns = array('*'));
}