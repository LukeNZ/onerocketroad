<?php
namespace OneRocketRoad\Stores;

use Illuminate\Support\Facades\Auth;
use OneRocketRoad\Models\Draft;

class DraftStore implements DraftStoreInterface {
    function all($columns = array('*')) {
        return Draft::all($columns);
    }

    /**
     * Creates an empty draft, containing only a title 
     * 
     * @param array $data   Data about the Draft to be commited to an entity.
     * @return Draft    The created Draft entity.
     */
    function create(array $data) {
        $draft = new Draft();
        $draft->title = $data['title'];
        /* $draft->author = Auth::user(); */
        $draft->author_name = /* Auth::user()->fullname(); */ "Esteban Winsmore";
        $draft->save();

        return $draft;
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