<?php

namespace App\Models;

class TemtremBusiness extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'user_id',
		'category_id',
		'slug',
		'name',
		'description',
		'cover',
		'lat',
		'lng',
		'route',
		'number',
		'complement',
		'zipcode',
		'district',
		'city',
		'state',
		'state_code',
		'country',
		'country_code',
		'nomadic',
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

	public function user() {
		return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
	}

	public function temtremCategory() {
		return $this->belongsTo(\App\Models\TemtremCategory::class, 'category_id', 'id');
	}

	public function temtremProducts() {
		return $this->hasMany(\App\Models\TemtremProduct::class, 'business_id', 'id');
	}
}