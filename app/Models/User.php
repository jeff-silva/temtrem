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
		'email_verified_at',
		'password',
		'remember_token',
		'created_at',
		'updated_at'
	];

     
    public function getJWTIdentifier() {
		return $this->getKey();
	}


	public function getJWTCustomClaims() {
		return [];
	}

	public function setPasswordAttribute($value) {
		if (! $value) return;
		if (! \Hash::needsRehash($value)) return;
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

	public function usersNotifications() {
		return $this->hasMany(\App\Models\UsersNotification::class, 'user_id', 'id');
	}
}