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
    $models = [];

    $this->comment('Verifying tables');
    
    $classes = \App\Utils::classes();
    $bar = $this->output->createProgressBar(count($classes));
    $bar->start();

    foreach($classes as $class) {
        $instance = new $class;

        $table_name = $instance->getTable();
        $table_exists = \Schema::hasTable($table_name);
        $this->comment("{$class} | {$table_name} | table_exists = {$table_exists}");

        $models[ $table_name ] = $instance;

        if (in_array('deployMigration', get_class_methods($instance))) {
            $this->comment("Migrating {$table_name} on {$class} model");

            if ($table_exists) {
                \Schema::table($table_name, function($table) use($instance, $table_name) {
                    $fields = \Schema::getColumnListing($table_name);
                    call_user_func([$instance, 'deployMigration'], $table, $fields);
                });
            }
            else {
                \Schema::create($table_name, function($table) use($instance) {
                    $table->id();
                    call_user_func([$instance, 'deployMigration'], $table, []);
                    $table->timestamps();
                });
            }

            if (in_array('deploySeed', get_class_methods($instance))) {
                call_user_func([$instance, 'deploySeed'], !$table_exists);
            }

            if (in_array('deployModels', get_class_methods($instance))) {
                $models = call_user_func([$instance, 'deployModels'], $models);
            }
        }

        $bar->advance();
    }
    $bar->finish();

    if ('local'==env('APP_ENV')) {
        $models_file = base_path(join(['resources', 'nuxt', 'plugins', 'models.json'], DIRECTORY_SEPARATOR));
        file_put_contents($models_file, json_encode($models));
        $this->comment('Models generated');
    }
    
    $this->comment('Finish');
})->describe('App deploy');