<?php

namespace App\Http\Controllers;

class TemtremBusinessController extends Controller
{

	public function getSearch() {
		$input = request()->all();
		$search = \App\Models\TemtremBusiness::with(['user']);

		if (isset($input['latMin']) AND isset($input['latMax']) AND isset($input['lngMin']) AND isset($input['lngMax'])) {
			$search = $search->where(function($q) use($input) {
				$q->where('lat', '>=', $input['latMin']);
				$q->where('lat', '<=', $input['latMax']);
				$q->where('lng', '>=', $input['lngMin']);
				$q->where('lng', '<=', $input['lngMax']);
			});
		}

		return $search->querySearch();
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