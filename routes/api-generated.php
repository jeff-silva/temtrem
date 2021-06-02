<?php

// File generated automatically
// Do not edit or your changes will be lost

Route::get('app/routes', '\App\Http\Controllers\AppController@getRoutes');
Route::get('app/dashboard', '\App\Http\Controllers\AppController@getDashboard');
Route::get('app/cron', '\App\Http\Controllers\AppController@getCron');

Route::post('auth/login', '\App\Http\Controllers\AuthController@postLogin');
Route::post('auth/me', '\App\Http\Controllers\AuthController@postMe');
Route::post('auth/logout', '\App\Http\Controllers\AuthController@postLogout');
Route::post('auth/refresh', '\App\Http\Controllers\AuthController@postRefresh');
Route::post('auth/password-token', '\App\Http\Controllers\AuthController@postPasswordToken');
Route::post('auth/password-reset', '\App\Http\Controllers\AuthController@postPasswordReset');




Route::get('temtrem-product/search', '\App\Http\Controllers\TemtremProductController@getSearch');
Route::get('temtrem-product/find/{id}', '\App\Http\Controllers\TemtremProductController@getFind');
Route::post('temtrem-product/save', '\App\Http\Controllers\TemtremProductController@postSave');
Route::post('temtrem-product/delete/{id}', '\App\Http\Controllers\TemtremProductController@postDelete');

Route::get('temtrem-store/search', '\App\Http\Controllers\TemtremStoreController@getSearch');
Route::get('temtrem-store/find/{id}', '\App\Http\Controllers\TemtremStoreController@getFind');
Route::post('temtrem-store/save', '\App\Http\Controllers\TemtremStoreController@postSave');
Route::post('temtrem-store/delete/{id}', '\App\Http\Controllers\TemtremStoreController@postDelete');

Route::get('user/search', '\App\Http\Controllers\UserController@getSearch');
Route::get('user/find/{id}', '\App\Http\Controllers\UserController@getFind');
Route::post('user/save', '\App\Http\Controllers\UserController@postSave');
Route::post('user/delete/{id}', '\App\Http\Controllers\UserController@postDelete');

