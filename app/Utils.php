<?php

namespace App;

class Utils
{
    static function classes()
    {
        return [
            \App\Address::class,
            \App\Product::class,
            \App\User::class,
        ];
    }
}
