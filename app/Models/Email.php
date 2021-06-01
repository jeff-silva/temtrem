<?php
namespace App\Models;
 
class Email extends \Illuminate\Database\Eloquent\Model {
	
    use \App\Traits\Model;
 
	protected $fillable = [
        'id',
		'name',
		'subject',
		'body',
		'params',
		'created_at',
		'updated_at',
    ];

    
	public function validate($data=[]) {
		return \Validator::make($data, [
			'name' => ['required'],
		]);
	}
}