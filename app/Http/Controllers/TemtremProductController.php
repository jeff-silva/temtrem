<?php

namespace App\Http\Controllers;

class TemtremProductController extends Controller
{

	public function getSearch() {
		return \App\Models\TemtremProduct::querySearch();
	}

	public function getFind($id) {
		return \App\Models\TemtremProduct::find($id);
	}

	public function postSave() {
		return (new \App\Models\TemtremProduct)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\TemtremProduct::find($id)->remove();
	}
}