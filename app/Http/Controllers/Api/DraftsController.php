<?php

namespace OneRocketRoad\Http\Controllers\Api;

use Illuminate\Http\Request;
use OneRocketRoad\Http\Requests;
use OneRocketRoad\Http\Controllers\Controller;
use OneRocketRoad\Models\Draft;
use OneRocketRoad\Stores\DraftStoreInterface;

class DraftsController extends Controller
{
    protected $drafts;

    public function __construct(DraftStoreInterface $draftStore) {
        $this->drafts = $draftStore;
    }

    /**
     * Fetches all drafts from the backing store and returns them.
     * GET: /api/drafts/all.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function all() {
        return response()->json($this->drafts->all(), 200);
    }

    /**
     * Fetches a single draft by id from the backing store and returns it.
     * GET: /api/drafts/get/{id}
     *
     * @param $draftId
     * @return \Illuminate\Http\JsonResponse
     */
    public function get($draftId) {
        return response()->json($this->drafts->find($draftId), 200);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request) {
        $json = $request->json()->all();
        $draft = $this->drafts->create($json);

        return response()->json($draft, 200);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request) {
        $json = $request->json()->all();
        $this->drafts->update($json);
        return response()->json(null, 204);
    }

    /**
     * @param $draftId
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($draftId) {
        $this->drafts->delete($draftId);
        return response()->json(null, 204);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function publish(Request $request) {
        $json = $request->json()->all();
        return response()->json(null, 200);
    }
}
