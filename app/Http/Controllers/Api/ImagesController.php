<?php

namespace OneRocketRoad\Http\Controllers\Api;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use OneRocketRoad\Http\Controllers\Controller;
use OneRocketRoad\Http\Controllers\OneRocketRoadBaseController;
use OneRocketRoad\Http\Requests\ImageUploadRequest;
use OneRocketRoad\Services\ImageServiceInterface;
use OneRocketRoad\Stores\ImageStoreInterface;

class ImagesController extends OneRocketRoadBaseController {
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
     * Returns 200 OK if the operation completed successfully.
     */
    public function all() {
        return $this->ok($this->images->all());
    }


    /**
     * Fetches a single image by id from the backing store and returns it.
     * GET: /api/images/get/{imageId}
     *
     * @param $imageId
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 200 OK if the operation completed successfully.
     * Returns 404 Not Found if the image was not found.
     */
    public function get($imageId) {
        try {
            return $this->ok($this->images->find($imageId));
        } catch (ModelNotFoundException $e) {
            return $this->notFound();
        }
    }

    /**
     * Accepts a given image and metadata; and moves the image to an uploads directory along with
     * creating a lower resolution thumbnail. Inserts the metadata into the backing store.
     * POST: /api/images/create
     *
     * @param ImageUploadRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 200 OK if the operation completed successfully.
     */
    public function create(ImageUploadRequest $request) {
        $image = $this->images->create($request->all());
        $this->imageService->handle($request->file, $image);

        return $this->ok($image);
    }
}