<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');


Artisan::command('app-deploy', function () {
    
    $this->comment('Verificação de colunas de tabelas');
    
    $classes = \App\Utils::classes();
    $bar = $this->output->createProgressBar(count($classes));
    $bar->start();

    foreach($classes as $class) {
        $instance = new $class;

        $table_name = $instance->getTable();
        $table_exists = \Schema::hasTable($table_name);
        $this->comment("{$class} | {$table_name} | table_exists = {$table_exists}");

        if (in_array('tableMigration', get_class_methods($instance))) {
            $this->comment("Migrating {$table_name} on {$class} model");

            if ($table_exists) {
                \Schema::table($table_name, function($table) use($instance, $table_name) {
                    $fields = \Schema::getColumnListing($table_name);
                    call_user_func([$instance, 'tableMigration'], $table, $fields);
                });
            }
            else {
                \Schema::create($table_name, function($table) use($instance) {
                    $table->id();
                    $table->timestamps();
                    call_user_func([$instance, 'tableMigration'], $table, []);
                });
            }

            if (in_array('tableSeed', get_class_methods($instance))) {
                call_user_func([$instance, 'tableSeed'], !$table_exists);
            }
        }

        $bar->advance();
    }
    $bar->finish();
    
    $this->comment('Finalizado');
})->describe('Teste');