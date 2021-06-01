<?php
namespace App\Models;
 
class UserNotification extends \Illuminate\Database\Eloquent\Model {
	
    use \App\Traits\Model;
 
	protected $fillable = [
        'id',
		'user_id',
		'title',
		'body',
		'image',
		'url',
		'seen',
		'created_at',
		'updated_at',
    ];

    
	public function validate($data=[]) {
		return \Validator::make($data, [
			'name' => ['required'],
		]);
	}

	public function user() {
		return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
	}
}