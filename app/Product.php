<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'id',
        'name',
        'photo',
        'price',
    ];

    protected $attributes = [
        'id' => false,
        'name' => '',
        'photo' => '',
        'price' => 0,
    ];

    public function tableMigration($table, $fields)
    {   
        if (!in_array('name', $fields)) {
            $table->string('name')->nullable();
        }

        if (!in_array('photo', $fields)) {
            $table->string('photo')->nullable();
        }

        if (!in_array('price', $fields)) {
            $table->decimal('price', 10, 2)->nullable()->default(0);
        }
    }
}
