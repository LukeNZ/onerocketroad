<?php

namespace OneRocketRoad\Http\Controllers\Api;

use Illuminate\Http\Request;
use OneRocketRoad\Http\Controllers\Controller;
use OneRocketRoad\Http\Requests\ImageUploadRequest;
use OneRocketRoad\Services\ImageServiceInterface;
use OneRocketRoad\Stores\ImageStoreInterface;

class ImagesController extends Controller {
    protected $images, $imageService;
    
    public function __construct(ImageStoreInterface $imageStore, ImageServiceInterface $imageService) {
        $this->images = $imageStore;
        $this->imageService = $imageService;
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

    /**
     * Accepts a given image and metadata; and moves the image to an uploads directory along with
     * creating a lower resolution thumbnail. Inserts the metadata into the backing store.
     * POST: /api/images/create
     *
     * @param ImageUploadRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(ImageUploadRequest $request) {
        $image = $this->images->create($request->all());
        $this->imageService->handle($request->file, $image);
        return response()->json($image, 200);
    }
}