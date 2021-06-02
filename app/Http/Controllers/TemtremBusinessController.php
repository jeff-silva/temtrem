<?php

namespace App\Http\Controllers;

class TemtremBusinessController extends Controller
{

	public function getSearch() {
		return \App\Models\TemtremBusiness::with(['user'])->querySearch();
	}

	public function getFind($id) {
		return \App\Models\TemtremBusiness::find($id);
	}

	public function postSave() {
		return (new \App\Models\TemtremBusiness)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\TemtremBusiness::find($id)->remove();
	}
}