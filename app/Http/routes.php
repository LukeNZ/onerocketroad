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
Route::get('/', function () {
    return view('home');
});

// API routes
Route::group(['namespace' => 'Api', 'prefix' => 'api'], function() {
    Route::group(['prefix' => 'drafts'], function() {
        Route::get('all', 'DraftsController@all');
        Route::put('create', 'DraftsController@create');
        Route::patch('update', 'DraftsController@update');
        Route::delete('delete/{id}', 'DraftsController@delete');
        Route::post('publish', 'DraftsController@publish');
    });

    Route::group(['prefix' => 'articles'], function() {

    });

    Route::group(['prefix' => 'images'], function() {

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