<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Apps
// Route::get('/', '\App\Http\Controllers\AppController@index');
Route::get('/upload', '\App\Http\Controllers\AppController@upload');
Route::get('/test', '\App\Http\Controllers\AppController@test');
Route::get('/dashboard', '\App\Http\Controllers\AppController@dashboard');
Route::get('/app/navigation', '\App\Http\Controllers\AppController@getNavigation');
Route::get('/cron', '\App\Http\Controllers\AppController@cron');



// Auth routes
Route::group(['middleware' => 'api'], function($router) {
    Route::post('auth/login', '\App\Http\Controllers\AuthController@login');
    Route::post('auth/logout', '\App\Http\Controllers\AuthController@logout');
    Route::post('auth/refresh', '\App\Http\Controllers\AuthController@refresh');
    Route::post('auth/me', '\App\Http\Controllers\AuthController@me');
    Route::post('auth/password-token', '\App\Http\Controllers\AuthController@passwordToken');
    Route::post('auth/password-reset', '\App\Http\Controllers\AuthController@passwordReset');
});



// Route::group(['middleware' => ['auth:api', 'permission']], function($router) {
// });



// Convigurações
// Route::get('/setting/search', '\App\Http\Controllers\SettingController@search');
// Route::get('/setting/find/{id}', '\App\Http\Controllers\SettingController@find');
// Route::post('/setting/save', '\App\Http\Controllers\SettingController@save');
// Route::post('/setting/delete/{id}', '\App\Http\Controllers\SettingController@delete');
// Route::get('/setting/load-all', '\App\Http\Controllers\SettingController@loadAll');
// Route::post('/setting/save-all', '\App\Http\Controllers\SettingController@saveAll');

include __DIR__ . '/api-generated.php';