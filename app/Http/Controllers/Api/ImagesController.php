<?php

namespace OneRocketRoad\Http\Controllers\Api;

use Illuminate\Http\Request;
use OneRocketRoad\Http\Controllers\Controller;
use OneRocketRoad\Stores\ImageStoreInterface;

class ImagesController extends Controller {
    protected $images;
    
    public function __construct(ImageStoreInterface $imageStore) {
        $this->images = $imageStore;
    }

    /**
     * Fetches all images from the backing store and returns them.
     * GET: /api/images/all
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function all() {
        return response()->json($this->images->all(), 200);
    }

    public function get($imageId) {

    }

    public function create(Request $request) {
        return response()->json($request->all());
    }
}