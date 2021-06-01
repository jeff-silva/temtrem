<?php
namespace App\Models;
 
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class User extends \Illuminate\Foundation\Auth\User implements JWTSubject {
	
    use \App\Traits\Model, HasFactory, Notifiable;
 
	protected $fillable = [
        'id',
		'name',
		'email',
		'password',
		'type',
		'email_verified_at',
		'remember_token',
		'created_at',
		'updated_at',
		'deleted_at',
    ];

     
    public function getJWTIdentifier() {
		return $this->getKey();
	}


	public function getJWTCustomClaims() {
		return [];
	}

	public function setPasswordAttribute($value) {
		if (! $value) return;
		return $this->attributes['password'] = \Hash::make($value);
	}

    
	public function validate($data=[]) {
		return \Validator::make($data, [
			'name' => ['required'],
		]);
	}

	public function type($id) {
		$items = $this->types();
		return isset($items[$id])? $items[$id]: false;
	}

	public function types() {
		return array (
		  'admin' => 'Admin',
		  'user' => 'User',
		);
	}

	public function temtremBusinesses() {
		return $this->hasMany(\App\Models\TemtremBusiness::class, 'user_id', 'id');
	}

	public function temtremBusinessesItems() {
		return $this->hasMany(\App\Models\TemtremBusinessesItem::class, 'store', 'id');
	}

	public function userNotifications() {
		return $this->hasMany(\App\Models\UserNotification::class, 'user_id', 'id');
	}

	public function usersNotifications() {
		return $this->hasMany(\App\Models\UsersNotification::class, 'user_id', 'id');
	}

	public function correiosRastreamentos() {
		return $this->hasMany(\App\Models\CorreiosRastreamento::class, 'user_id', 'id');
	}

	public function correioRastreamentos() {
		return $this->hasMany(\App\Models\CorreioRastreamento::class, 'user_id', 'id');
	}
}