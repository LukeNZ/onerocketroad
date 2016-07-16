<?php
namespace OneRocketRoad\Stores;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use OneRocketRoad\Models\Article;

class ArticleStore implements ArticleStoreInterface {

    /**
     * Retrieve all articles.
     *
     * @param array $columns    The columns of the article to retrieve.
     *
     * @return \Illuminate\Database\Eloquent\Collection Collection of articles.
     */
    function all($columns = array('*')) {
        return Article::all($columns);
    }

    /**
     * Creates an article.
     *
     * @param array $data
     *
     * @return Article  The created Article entity.
     */
    function create(array $data) {
        $article = new Article();
        $article->title = $data['title'];
        $article->body = $data['body'];
        /* $article->author = Auth::user(); */
        $article->author_name = /* Auth::user()->fullname(); */ "Esteban Winsmore";
        $article->save();

        return $article;
    }

    function update(array $data) {
        $article = Article::find($data['id']);
        $article->save();

        return $article;
    }

    /**
     * Deletes a pre-existing article by id.
     *
     * @param int   $id   The id of the article to delete.
     */
    function delete($id) {
        Article::destroy($id);
    }

    /**
     * Finds an article by its id and returns it.
     *
     * @param int      $id      The id of the article to retrieve.
     * @param array $columns    The columns to retrieve from the entity in the backing
     *                          store.
     *
     * @return Article|ModelNotFoundException The found article entity, or an exception.
     */
    function find($id, $columns = array('*')) {
        return Article::findOrFail($id, $columns);
    }

    /**
     * Retrieve a single article by the parameters available in the URL. To achieve this, it first retrieves
     * all the articles that occurred on the date specified, then retrieves the first one where the slug provided
     * matches the slugged title.
     *
     * @param $year     string  The year of the article's publication.
     * @param $month    string  The month of the article's publication.
     * @param $day      string  The day of the article's publication.
     * @param $slug     string  The slug of the article title to filter by.
     *
     * @return Article|ModelNotFoundException  Returns the single article that matches the parameters.
     */
    function retrieveByUrl($year, $month, $day, $slug) {
        $dateOfArticle = Carbon::createFromDate(intval($year), intval($month), intval($day));

        return Article::whereDate('created_at', '=', $dateOfArticle->toDateString())->get()
            ->firstOrFail(function($key, $article) use($slug) {
                return $slug === str_slug($article->title);
            });
    }

    /**
     * Get a slice of recent articles, starting from $cursor, and taking $take many.
     *
     * @param $cursor
     * @param $take
     *
     * @return Collection   A collection of articles.
     */
    function getRecent($cursor, $take) {
        return Article::orderBy('created_at', 'desc')->take($take)->offset($cursor)->get();
    }
}