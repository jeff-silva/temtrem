<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);

        if (!$root = \App\Models\User::find(1)) {
            DB::table('users')->insert([
                'name' => 'Root User',
                'email' => 'root@grr.la',
                'password' => Hash::make('321321'),
            ]);
            $root = \App\Models\User::find(1);
        }

        $root->type = 'admin';
        $root->save();
    }
}
