<?php

namespace OneRocketRoad\Http\Controllers\Api;

use OneRocketRoad\Http\Controllers\Controller;
use OneRocketRoad\Stores\ImageStoreInterface;

class ImagesController extends Controller {
    protected $imageStore;
    
    public function __construct(ImageStoreInterface $imageStore) {
        $this->imageStore = $imageStore;
    }
    
    public function all() {
        
    }
}