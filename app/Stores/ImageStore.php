<?php
namespace OneRocketRoad\Stores;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use OneRocketRoad\Models\Image;

class ImageStore implements ImageStoreInterface {

    /**
     * Retrieve all articles.
     *
     * @param array $columns    The columns of the article to retrieve.
     * @return \Illuminate\Database\Eloquent\Collection
     */
    function all($columns = array('*')) {
        return Image::all($columns);
    }

    function create(array $data) {
    }

    function update(array $data) {
    }

    function delete($id) {
        Image::destroy($id);
    }

    function find($id, $columns = array('*')) {
        return Image::find($id, $columns);
    }
}