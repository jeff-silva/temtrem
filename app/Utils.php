<?php

namespace App;

class Utils
{
    static function classes()
    {
        return [
            \App\Address::class,
            \App\Product::class,
            \App\Store::class,
            \App\StoreCategory::class,
            \App\User::class,
        ];
    }
}
