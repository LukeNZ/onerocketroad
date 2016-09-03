<?php
namespace OneRocketRoad\Stores;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use OneRocketRoad\Models\Draft;
use OneRocketRoad\Models\Image;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class DraftStore implements DraftStoreInterface {

    /**
     * Retrieve all drafts.
     *
     * @param array $columns    The columns of the draft to retrieve.
     *
     * @return \Illuminate\Database\Eloquent\Collection Collection of drafts.
     */
    function all($columns = array('*')) {
        return Draft::with('hero')->get();
    }

    /**
     * Creates an empty draft, containing only a title.
     * 
     * @param array $data   Data about the Draft to be commited to an entity.
     *
     * @return Draft    The created Draft entity.
     */
    function create(array $data) {
        $draft = new Draft();
        $draft->title = $data['title'];
        $draft->author_id = Auth::user()->id;
        $draft->author_name = Auth::user()->fullname;
        $draft->save();

        return $draft;
    }

    /**
     * Updates a pre-existing draft.
     *
     * @param array $data   Data about the Draft to be added to an entity.
     *
     * @return Draft|UnprocessableEntityHttpException   The created draft entity,
     *                                                  or an exception.
     */
    function update(array $data) {
        $draft = Draft::with('hero')->findOrFail($data['id']);

        if ($data['heroId'] !== null) {
            try {
                $image = Image::findOrFail($data['heroId']);
                $draft->hero()->associate(Image::find($data['heroId']));
            } catch(ModelNotFoundException $e) {
                throw new UnprocessableEntityHttpException();
            }
        }

        $draft->title = $data['title'];
        $draft->body = $data['body'];

        $draft->save();

        return $draft;
    }

    /**
     * Deletes a pre-existing draft by id.
     *
     * @param int   $id   The id of the draft to delete.
     */
    function delete($id) {
        Draft::destroy($id);
    }

    /**
     * Finds a draft by its id and returns it.
     *
     * @param int      $id      The id of the draft to retrieve.
     * @param array $columns    The columns to retrieve from the entity in the backing
     *                          store.
     *
     * @return Draft|ModelNotFoundException The found draft entity, or an exception.
     */
    function find($id, $columns = array('*')) {
        return Draft::with('hero')->findOrFail($id, $columns);
    }
}