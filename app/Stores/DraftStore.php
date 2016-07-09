<?php
namespace OneRocketRoad\Stores;

use Illuminate\Support\Facades\Auth;
use OneRocketRoad\Models\Draft;

class DraftStore implements DraftStoreInterface {

    /**
     * Retrieve all drafts.
     *
     * @param array $columns    The columns of the draft to retrieve.
     * @return \Illuminate\Database\Eloquent\Collection
     */
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
        $draft->author_name = "Esteban Winsmore"; // Auth::user()->fullname()
        $draft->save();

        return $draft;
    }

    function update(array $data) {
        $draft = Draft::find($data['id']);
        $draft->title = $data['title'];
        $draft->body = $data['body'];
        $draft->save();

        return $draft;
    }

    function delete($id) {
        Draft::destroy($id);
    }

    function find($id, $columns = array('*')) {
        return Draft::find($id, $columns);
    }
}