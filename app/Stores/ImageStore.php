<?php
namespace OneRocketRoad\Stores;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use OneRocketRoad\Models\Image;

class ImageStore implements ImageStoreInterface {

    /**
     * Retrieve all articles.
     *
     * @param array $columns    The columns of the article to retrieve.
     * @return \Illuminate\Database\Eloquent\Collection
     */
    function all($columns = array('*')) {
        return Article::all($columns);
    }

    function create(array $data) {
        $article = new Image();
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

    function delete($id) {
        Article::destroy($id);
    }

    function find($id, $columns = array('*')) {
        return Article::find($id, $columns);
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
     * @return Article  Returns the single article that matches the parameters.
     */
    function retrieveByUrl($year, $month, $day, $slug) {
        $dateOfArticle = Carbon::createFromDate(intval($year), intval($month), intval($day));

        return Article::whereDate('created_at', '=', $dateOfArticle->toDateString())->get()
            ->first(function($key, $article) use($slug) {
                return $slug === str_slug($article->title);
            });
    }

    function getRecent($cursor, $take) {
        return Article::orderBy('created_at', 'desc')->take($take)->offset($cursor)->get();
    }
}