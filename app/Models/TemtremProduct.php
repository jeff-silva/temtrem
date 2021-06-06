<?php

namespace App\Models;

class TemtremProduct extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'business_id',
		'name',
		'price',
		'cover',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	public function validate($data=[]) {
		return \Validator::make($data, ['name' => ['required']]);
	}

	public function getCoverAttribute($value) {
		if (!is_array($value)) {
			$value = json_decode($value, true);
			$value = is_array($value)? $value: [];
		}
		return $value;
	}

	public function temtremBusiness() {
		return $this->belongsTo(\App\Models\TemtremBusiness::class, 'business_id', 'id');
	}
}