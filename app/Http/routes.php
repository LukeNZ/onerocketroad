<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Home
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

// API routes
Route::group(['namespace' => 'Api', 'prefix' => 'api'], function() {
    Route::group(['prefix' => 'home'], function() {
        Route::get('get', 'HomeController@get');
    });

    Route::group(['prefix' => 'drafts'], function() {
        Route::get('all', 'DraftsController@all');
        Route::get('get/{id}', 'DraftsController@get');
        Route::put('create', 'DraftsController@create');
        Route::patch('update', 'DraftsController@update');
        Route::delete('delete/{id}', 'DraftsController@delete');
    });

    Route::group(['prefix' => 'articles'], function() {
        Route::get('get/{year}/{month}/{day}/{slug}', 'ArticlesController@get');
        Route::get('getrecent/{offset}', 'ArticlesController@getRecent');
        Route::put('create', 'ArticlesController@create');
        Route::patch('update', 'ArticlesController@update');
        Route::patch('delete/{id}', 'ArticlesController@delete');
    });

    Route::group(['prefix' => 'images'], function() {
        Route::get('all', 'ImagesController@all');
        Route::post('create', 'ImagesController@create');
    });

    Route::group(['prefix' => 'auth'], function() {
        Route::post('login', 'AuthController@login');
        Route::post('signup', 'AuthController@signup');
    });
});

// Catch-all route to handle routes which doesn't exist, implicitly
// redirecting back to the homepage so Angular can redirect as appropriate.
Route::get('/api/{any}', function($any) {
    return response("Invalid API call", 404);
})->where('any', '.*');

Route::get('{any}', function($any) {
    return view('home');
})->where('any', '.*');