<?php

namespace App\Models;

class CorreioRastreamento extends \Illuminate\Database\Eloquent\Model
{
	use \App\Traits\Model;

	protected $fillable = [
		'id',
		'user_id',
		'name',
		'object',
		'data',
		'created_at',
		'updated_at',
		'deleted_at'
	];

	protected static function booted() {
		static::saving(function($model) {
            $model->data = $model->rastreamento();
        });
	}

	public function getDataAttribute($value) {
		if (! is_array($value)) {
			$value = json_decode($value, true);
			$value = is_array($value)? $value: [];
		}
		return $value;
	}

	public function setDataAttribute($value) {
		if (is_array($value) OR is_object($value)) {
			$value = json_encode($value);
			$this->attributes['data'] = $value;
		}
	}


	public function rastreamento() {
		if (! $this->id) return [];

		$cache_id = "correio-rastreamento-{$this->object}";
		$object = $this->object;

		return \Cache::remember($cache_id, 60*60*24, function() use($object) {
			
			// get source
			$html = call_user_func(function($objeto) {
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, "https://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm");
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(['Objetos' => $objeto]));
				$output = curl_exec($ch);
				curl_close($ch);
				return $output;
			}, $this->object);
	
			$html = str_replace('id="somediv"', '', $html);
	
			$dom = new \DOMDocument();
			$dom->loadHTML($html);
			$dom->preserveWhiteSpace = false;
			
			$table = $dom->getElementsByTagName('table');
			$table = $table[0];
	
			$return = [];
			foreach($table->getElementsByTagName('tr') as $tr) {
				$tds = $tr->getElementsByTagName('td');
	
				$_limpar = function($value) {
					$value = str_replace(["\r", "\n", "\t"], '', $value);
					$value = trim($value);
					return $value;
				};
	
				$returnItem = [];
	
				$returnItem['datetime'] = call_user_func(function($local) {
					preg_match_all('/\d{2}\/\d{2}\/\d{4}.+\d{2}:\d{2}/s', $local, $dt);
					$dt = isset($dt[0])? implode('', $dt[0]): '';
					$dt = preg_replace('/\s+/', ' ', $dt);
					return \DateTime::createFromFormat('d/m/Y H:i', $dt)->format('Y-m-d H:i:s');
				}, $tds->item(0)->nodeValue);
	
				$returnItem['status'] = $_limpar($tds->item(1)->nodeValue);
	
				$returnItem['place'] = preg_replace('/.+\d{2}\/\d{2}\/\d{4}.+\d{2}:\d{2}/s', '', $tds->item(0)->nodeValue);
				$returnItem['place'] = $_limpar($returnItem['place']);
				$returnItem['place'] = call_user_func(function($place) {
					$cache_key = md5(implode('-', ['openstreetmap-search', $place]));
					return \Cache::rememberForever($cache_key, function() use($place) {
						$content = "https://nominatim.openstreetmap.org/search.php?format=json&addressdetails=1&extratags=1&namedetails=1&limit=10&q={$place}";
						$content = \Illuminate\Support\Facades\Http::get($content)->json();
						if (isset($content[0])) {
							$local = $content[0];
							$city = isset($local['address']['city'])? $local['address']['city']: false;
							$city = $city? $city: (isset($local['address']['town'])? $local['address']['town']: false);
							return [
								'state' => $local['address']['state'],
								'city' => $city,
								'lat' => floatval($local['lat']),
								'lng' => floatval($local['lon']),
							];
						}
					});
				}, $returnItem['place']);
	
				$return[] = $returnItem;
			}

			return $return;
		});
	}

	public function validate($data=[]) {
		return \Validator::make($data, ['name' => ['required']]);
	}

	public function user() {
		return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
	}
}