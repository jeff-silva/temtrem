<?php

/**
 *  @OA\Tag(
 *      name="User",
 *      description="Operações de Usuários",
 *  )
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{                             
	public function getSearch() {
		return \App\Models\User::querySearch();
	}

	public function getFind($id) {
		return \App\Models\User::find($id);
	}

	public function postSave() {
		return (new \App\Models\User)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\User::find($id)->remove();
	}
}