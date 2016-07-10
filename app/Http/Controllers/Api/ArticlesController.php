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
     * Fetches a single article by the date of publication and the slug from the backing store and returns it.
     * GET: /api/articles/get/{year}/{month}/{day}/{slug}
     *
     * @param $year     string  The year of the article.
     * @param $month    string  The month of the article.
     * @param $day      string  The day of the article.
     * @param $slug     string  The slug of the article.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function get($year, $month, $day, $slug) {
        $article = $this->articles->retrieveByUrl($year, $month, $day, $slug);
        return response()->json($article, 200);
    }

    /**
     * PUT: /api/articles/create
     * 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request) {
        $json = $request->json()->all();
        $article = $this->articles->create($json);

        return response()->json($article, 200);
    }
}
