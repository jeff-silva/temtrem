<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{   
    protected $fillable = [
        'id',
        'name',
        'ref',
        'ref_id',
        'lat',
        'lng',
        'route',
        'number',
        'complement',
        'zipcode',
        'district',
        'city',
        'state',
        'st',
        'country',
        'co',
    ];

    protected $attributes = [
        'id' => false,
        'name' => '',
        'ref' => '',
        'ref_id' => '',
        'lat' => '',
        'lng' => '',
        'route' => '',
        'number' => '',
        'complement' => '',
        'zipcode' => '',
        'district' => '',
        'city' => '',
        'state' => '',
        'st' => '',
        'country' => '',
        'co' => '',
    ];

    public function addressByZipcode($zipcode)
    {
        $addr = new \App\Address(['zipcode'=>$zipcode]);
        return $addr;
    }

    public function endpoints()
    {
        \Route::get('/address/search', function() {
            $input = request()->all();
            $query = new Address;

            if (array_key_exists('ref', $input)) {
                $query = $query->where('ref', $input['ref']);
            }

            if (array_key_exists('ref_id', $input)) {
                $query = $query->where('ref_id', $input['ref_id']);
            }

            // return $query->toSql();
            return $query->get();
        });

        \Route::get('/address/find', function($request) {
            return $request->all();
        });

        \Route::post('/address/save', function() {
            $addr = Address::firstOrNew(['id' => request()->input('id')]);
            $addr->fill(request()->all());
            $addr->save();
            return $addr;
        });

        \Route::post('/address/delete', function($request) {
            return $request->all();
        });
    }


    public function tableMigration($table, $fields)
    {
        if (!in_array('name', $fields)) {
            $table->string('name')->nullable();
        }

        if (!in_array('ref', $fields)) {
            $table->string('ref')->nullable();
        }

        if (!in_array('ref_id', $fields)) {
            $table->string('ref_id')->nullable();
        }

        if (!in_array('lat', $fields)) {
            $table->decimal('lat', 10, 7)->nullable();
        }

        if (!in_array('lng', $fields)) {
            $table->decimal('lng', 10, 7)->nullable();
        }

        if (!in_array('route', $fields)) {
            $table->string('route')->nullable();
        }

        if (!in_array('number', $fields)) {
            $table->string('number')->nullable();
        }

        if (!in_array('complement', $fields)) {
            $table->string('complement')->nullable();
        }

        if (!in_array('zipcode', $fields)) {
            $table->string('zipcode')->nullable();
        }

        if (!in_array('district', $fields)) {
            $table->string('district')->nullable();
        }

        if (!in_array('city', $fields)) {
            $table->string('city')->nullable();
        }

        if (!in_array('state', $fields)) {
            $table->string('state')->nullable();
        }

        if (!in_array('st', $fields)) {
            $table->string('st')->nullable();
        }

        if (!in_array('country', $fields)) {
            $table->string('country')->nullable();
        }

        if (!in_array('co', $fields)) {
            $table->string('co')->nullable();
        }

    }
}
