
namespace App\Models;
@if ($table->Name=='users') 
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class User extends \Illuminate\Foundation\Auth\User implements JWTSubject {
	
    use \App\Traits\Model, HasFactory, Notifiable;
@else 
class {{ $table->Model->Name }} extends \Illuminate\Database\Eloquent\Model {
	
    use \App\Traits\Model;
@endif 
	protected $fillable = [
        '<?php echo implode("',\n\t\t'", $table->FieldNames); ?>',
    ];

    @if ($table->Name=='users') 
    public function getJWTIdentifier() {
		return $this->getKey();
	}


	public function getJWTCustomClaims() {
		return [];
	}

	public function setPasswordAttribute($value) {
		if (! $value) return;
		return $this->attributes['first_name'] = \Hash::make($value);
	}

    @endif

	public function validate($data=[]) {
		return \Validator::make($data, [
			'name' => ['required'],
		]);
	}
}