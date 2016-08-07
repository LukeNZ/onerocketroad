<?php

namespace OneRocketRoad\Http\Controllers\Api;

use Illuminate\Http\Request;
use OneRocketRoad\Http\Controllers\OneRocketRoadBaseController;

class TaggablesController extends OneRocketRoadBaseController {

    public function __construct(TagStoreInterface $tagStore) {
        $this->middleware('jwtauthenticate');
    }

    public function addTagToDraft(Request $request) {

    }

    public function deleteTagFromDraft(Request $request) {

    }
}