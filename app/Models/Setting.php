<?php
namespace App\Models;
 
class Setting extends \Illuminate\Database\Eloquent\Model {
	
    use \App\Traits\Model;
 
	protected $fillable = [
        'id',
		'name',
		'value',
    ];

	public $defaults = [
		'jwt.ttl' => '90',
		'mail.mailers.smtp.encryption' => '',
		'mail.mailers.smtp.host' => '',
		'mail.mailers.smtp.port' => '',
		'mail.mailers.smtp.username' => '',
		'mail.mailers.smtp.password' => '',
	];

    
	public function validate($data=[]) {
		return \Validator::make($data, [
			'name' => ['required'],
		]);
	}

	public function loadAll() {

		foreach(self::get() as $item) {
			$this->defaults[ $item->name ] = $item->value;
		}
		
		return $this->defaults;
	}

	public function saveAll($settings=[]) {
		$settings = array_merge($this->loadAll(), $settings);

		foreach($settings as $name=>$value) {
			if ($item = self::where('name', $name)->first()) {
				$item->value = $value;
				$item->save();
				continue;
			}

			self::create([
				'name' => $name,
				'value' => $value,
			]);
		}

		return $settings;
	}
}