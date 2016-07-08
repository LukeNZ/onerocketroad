<?php
namespace OneRocketRoad\Stores;

use OneRocketRoad\Models\Draft;

class DraftStore implements DraftStoreInterface {
    function all($columns = array('*')) {
        return Draft::all($columns);
    }

    function create(array $data) {
        Draft::create($data);
    }

    function update(array $data) {

    }

    function delete($id) {
        Draft::destroy($id);
    }

    function find($id, $columns = array('*')) {
        return Draft::find($id, $columns);
    }
}