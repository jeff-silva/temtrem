<?php

namespace App\Models;

class TemtremCategory extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'name',
		'description',
		'type',
		'icon',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	public function validate($data=[]) {
		return \Validator::make($data, [
			'name' => ['required'],
		]);
	}

	public function getIconAttribute($value) {
		if (!is_array($value)) {
			$value = json_decode($value, true);
			$value = is_array($value)? $value: [];
		}
		return $value;
	}

	public function temtremBusinesses() {
		return $this->hasMany(\App\Models\TemtremBusiness::class, 'category_id', 'id');
	}
}