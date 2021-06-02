<?php

namespace App\Http\Controllers;

class TemtremStoreController extends Controller
{

	public function getSearch() {
		return \App\Models\TemtremStore::querySearch();
	}

	public function getFind($id) {
		return \App\Models\TemtremStore::find($id);
	}

	public function postSave() {
		return (new \App\Models\TemtremStore)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\TemtremStore::find($id)->remove();
	}
}