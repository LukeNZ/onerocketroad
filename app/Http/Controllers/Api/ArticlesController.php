<?php

namespace OneRocketRoad\Http\Controllers\Api;

use Illuminate\Http\Request;
use OneRocketRoad\Http\Requests;
use OneRocketRoad\Http\Controllers\Controller;
use OneRocketRoad\Stores\ArticleStoreInterface;

class ArticlesController extends Controller
{
    protected $articles;

    public function __construct(ArticleStoreInterface $articleStore) {
        $this->articles = $articleStore;
    }

    /**
     * Fetches a single article by id from the backing store and returns it.
     * GET: /api/articles/get/{year}/{month}/{day}/{slug}
     *
     * @param $articleId
     * @return \Illuminate\Http\JsonResponse
     */
    public function get($articleId) {
        return response()->json($this->articles->find($articleId), 200);
    }
}
