<?php

namespace App\Http\Controllers;

class TemtremCategoryController extends Controller
{

	public function getSearch() {
		return \App\Models\TemtremCategory::querySearch();
	}

	public function getFind($id) {
		return \App\Models\TemtremCategory::find($id);
	}

	public function postSave() {
		return (new \App\Models\TemtremCategory)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\TemtremCategory::find($id)->remove();
	}
}