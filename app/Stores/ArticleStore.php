<?php
namespace OneRocketRoad\Stores;

use Illuminate\Support\Facades\Auth;
use OneRocketRoad\Models\Article;

class ArticleStore implements ArticleStoreInterface {

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
        $article = new Article();
        $article->title = $data['title'];
        $article->body = $data['body'];
        /* $article->author = Auth::user(); */
        $article->author_name = /* Auth::user()->fullname(); */ "Esteban Winsmore";
        $article->published_at = $data['publishedAt'];
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
}