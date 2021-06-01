<?php

Route::get('correio-rastreamento/search', '\App\Http\Controllers\CorreioRastreamentoController@getSearch');
Route::get('correio-rastreamento/find/{id}', '\App\Http\Controllers\CorreioRastreamentoController@getFind');
Route::post('correio-rastreamento/save', '\App\Http\Controllers\CorreioRastreamentoController@postSave');
Route::post('correio-rastreamento/delete/{id}', '\App\Http\Controllers\CorreioRastreamentoController@postDelete');