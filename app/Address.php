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
            $query = new Address;

            if ($ref = request()->input('ref')) {
                $query = $query->where('ref', $ref);
            }

            // if ($ref_id = request()->input('ref_id')) {
            //     $query = $query->where('ref_id', $ref);
            // }

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
}
