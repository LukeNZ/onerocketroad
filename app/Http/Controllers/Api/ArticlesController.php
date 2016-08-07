<?php

namespace OneRocketRoad\Http\Controllers\Api;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use OneRocketRoad\Http\Controllers\OneRocketRoadBaseController;
use OneRocketRoad\Http\Requests;
use OneRocketRoad\Stores\ArticleStoreInterface;

class ArticlesController extends OneRocketRoadBaseController
{
    protected $articles;
    protected $articlesPerRequest = 10;

    public function __construct(ArticleStoreInterface $articleStore) {
        $this->middleware('jwtauthenticate', ['only' => 'create']);
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
     * Returns 200 OK if the operation completed successfully.
     * Returns 404 Not Found if no article was found.
     */
    public function get($year, $month, $day, $slug) {
        try {
            $article = $this->articles->retrieveByUrl($year, $month, $day, $slug);
            return $this->ok($article);
        } catch (ModelNotFoundException $e) {
            return $this->notFound();
        }
    }

    /**
     * Fetches a set number of articles from a specified cursor offset, ordered by created_at date.
     * GET: /api/articles/getrecent/{cursor}
     *
     * @param $cursor   int     The offset in the database to fetch articles from.
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 200 OK if the operation completed successfully.
     * Returns 204 No Content if no more articles were found.
     */
    public function getRecent($cursor) {
        $articles = $this->articles->getRecent($cursor, $this->articlesPerRequest);

        if (count($articles) > 0) {
            return $this->ok($articles);
        }
        return $this->noContent();
    }

    /**
     * Creates an article from the provided request and inserts it into the backing store, before returning it.
     * PUT: /api/articles/create
     * 
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     * Returns 200 OK if the operation completed successfully.
     */
    public function create(Request $request) {
        $json = $request->json()->all();
        $article = $this->articles->create($json);

        return $this->ok($article);
    }
}
