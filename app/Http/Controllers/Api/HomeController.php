<?php

namespace OneRocketRoad\Http\Controllers\Api;

use OneRocketRoad\Http\Controllers\Controller;
use OneRocketRoad\Stores\ArticleStoreInterface;

class HomeController extends Controller {
    protected $articles;

    public function __construct(ArticleStoreInterface $articleStore) {
        $this->articles = $articleStore;
    }

    /**
     * Fetches the articles and any other information necessary for the construction of the home
     * page. 
     * GET: /api/home/get
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function get() {
        $articles = $this->articles->getRecent(0, 6);
        return response()->json($articles, 200);
    }
}