<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StoreCategory extends Model
{
    protected $fillable = [
        'id',
        'name',
        'photo',
    ];

    protected $attributes = [
        'id' => false,
        'name' => '',
        'photo' => '',
    ];

    public function tableMigration($table, $fields)
    {
        if (!in_array('name', $fields)) {
            $table->string('name')->nullable();
        }

        if (!in_array('photo', $fields)) {
            $table->string('photo')->nullable();
        }
    }

    public function tableSeed($created=false)
    {
        // 
    }
}
