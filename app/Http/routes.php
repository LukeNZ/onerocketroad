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

Route::get('/', function () {
    return view('home');
});

Route::group(['namespace' => 'Api'], function() {

});

// Catch-all route to handle routes which doesn't exist, implicitly
// redirecting back to the homepage so Angular can redirect as appropriate.
Route::get('/api/{any}', function($any) {
    return response("Invalid API call", 404);
})->where('any', '.*');

Route::get('{any}', function($any) {
    return view('home');
})->where('any', '.*');