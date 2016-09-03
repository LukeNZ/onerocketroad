<?php
namespace OneRocketRoad\Stores;

use Carbon\Carbon;
use ColorThief\ColorThief;
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
        $uniqid = uniqid("", true);
        
        $image = new Image();
        $image->filename = $uniqid . "." . $data['file']->extension();
        $image->thumbname = $uniqid . ".thumb." . $data['file']->extension();
        $image->summary = $data['summary'];
        $image->attribution = $data['attribution'];
        $image->size = $data['file']->getClientSize();
        $image->user_id = Auth::user()->id;
        $image->color = $data['color'];

        $image->save();
        
        return $image;
    }

    function update(array $data) {
    }

    function delete($id) {
        Image::destroy($id);
    }

    function find($id, $columns = array('*')) {
        return Image::findOrFail($id, $columns);
    }
}