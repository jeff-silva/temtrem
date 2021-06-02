<?php

namespace App\Models;

class TemtremBusiness extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'user_id',
		'name',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	public function validate($data=[]) {
		return \Validator::make($data, ['name' => ['required']]);
	}

	public function user() {
		return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
	}
}