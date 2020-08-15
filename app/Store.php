<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    protected $fillable = [
        'id',
        'user_id',
        'category_id',
        'active',
        'name',
        'resume',
        'photo',
        'cover',
    ];

    protected $attributes = [
        'id' => false,
        'user_id' => '',
        'category_id' => '',
        'active' => true,
        'name' => '',
        'resume' => '',
        'photo' => '',
        'cover' => '',
    ];

    public function tableMigration($table, $fields)
    {
        if (!in_array('user_id', $fields)) {
            $table->string('user_id')->nullable();
        }

        if (!in_array('category_id', $fields)) {
            $table->string('category_id')->nullable();
        }

        if (!in_array('active', $fields)) {
            $table->string('active')->nullable();
        }

        if (!in_array('name', $fields)) {
            $table->string('name')->nullable();
        }
        
        if (!in_array('resume', $fields)) {
            $table->string('resume')->nullable();
        }
        
        if (!in_array('photo', $fields)) {
            $table->string('photo')->nullable();
        }

        if (!in_array('cover', $fields)) {
            $table->string('cover')->nullable();
        }
    }

    public function tableSeed($created=false)
    {
        // 
    }
}
