<?php

namespace App\Models;

class TemtremStore extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'name',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	public function validate($data=[]) {
		return \Validator::make($data, ['name' => ['required']]);
	}
}