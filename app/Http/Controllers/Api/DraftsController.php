<?php

namespace OneRocketRoad\Http\Controllers\Api;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use OneRocketRoad\Http\Controllers\OneRocketRoadBaseController;
use OneRocketRoad\Stores\DraftStoreInterface;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class DraftsController extends OneRocketRoadBaseController
{
    protected $drafts;

    public function __construct(DraftStoreInterface $draftStore) {
        $this->middleware('jwtauthenticate');
        $this->drafts = $draftStore;
    }

    /**
     * Fetches all drafts from the backing store and returns them.
     * GET: /api/drafts/all
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 200 OK if the operation completed successfully.
     */
    public function all() {
        return $this->ok($this->drafts->all());
    }

    /**
     * Fetches a single draft by id from the backing store and returns it.
     * GET: /api/drafts/get/{draftId}
     *
     * @param $draftId
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 200 OK if the operation completed successfully.
     * Returns 404 Not Found if the draft was not found.
     */
    public function get($draftId) {
        try {
            return $this->ok($this->drafts->find($draftId));
        } catch (ModelNotFoundException $e) {
            return $this->notFound();
        }
    }

    /**
     * Creates an draft from the provided request and inserts it into the backing store, before returning it.
     * PUT: /api/articles/create
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 200 OK if the operation completed successfully.
     */
    public function create(Request $request) {
        $json = $request->json()->all();
        $draft = $this->drafts->create($json);

        return $this->ok($draft);
    }

    /**
     * Updates a given draft and returns the draft if it is found.
     * PATCH: /api/articles/update
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 200 OK if the operation completed successfully.
     * Returns 404 Not Found if the draft was not found.
     * Returns 422 Unprocessable Entity if the patch was not correct.
     */
    public function update(Request $request) {
        $json = $request->json()->all();
        
        try {
            $draft = $this->drafts->update($json);
            return $this->ok($draft);

        } catch (ModelNotFoundException $e) {
            return $this->notFound();

        } catch (UnprocessableEntityHttpException $e) {
            return $this->unprocessableEntity();
        }
    }

    /**
     * Deletes a given draft by id from the back store.
     * DELETE: /api/articles/delete/{draftId}
     *
     * @param $draftId
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 204 No Content.
     */
    public function delete($draftId) {
        $this->drafts->delete($draftId);
        return $this->noContent();
    }
}
