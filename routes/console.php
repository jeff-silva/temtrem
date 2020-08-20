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
    \Artisan::call('cache:clear');
    
    $this->comment('App Deploy');
    $this->comment('');

    $models = [];
    foreach(\App\Utils::classes() as $class) {
        $artisan = $this;
        $instance = new $class;

        $table_name = $instance->getTable();
        $table_exists = \Schema::hasTable($table_name);
        
        $artisan->comment("------ $class --------------------");
        $artisan->comment("{$table_name}". ($table_exists? ' exists': ' not exists'));

        $models[ $table_name ] = $instance;

        if (in_array('deployMigration', get_class_methods($instance))) {

            $createUpdateFields = function($columns, $table, $fields) use($artisan, $table_name) {
                foreach($columns as $column=>$args) {
                    
                    $exists = in_array($column, $fields);
                    $artisan->comment("{$table_name}.{$column}". ($exists? ' exists': ' not exists'));
                    if ($exists) continue;

                    $method = $args[0];
                    $args[0] = $column;

                    if (in_array($method, ['nullableTimestamps', 'softDeletes', 'timestamps', 'rememberToken'])) {
                        $args = [];
                    }

                    $this->comment("\$table->{$method}(". implode(', ', $args) .")->nullable();");
                    call_user_func_array([$table, $method], $args)->nullable();
                }
            };

            if ($table_exists) {
                \Schema::table($table_name, function($table) use($artisan, $createUpdateFields, $instance, $table_name) {
                    $fields = \Schema::getColumnListing($table_name);
                    $columns = call_user_func([$instance, 'deployMigration'], $artisan, $table, $fields);
                    $createUpdateFields($columns, $table, $fields);
                });
            }
            else {
                \Schema::create($table_name, function($table) use($artisan, $createUpdateFields, $instance) {
                    $table->id();
                    $columns = call_user_func([$instance, 'deployMigration'], $artisan, $table, []);
                    $createUpdateFields($columns, $table, []);
                    $table->timestamps();
                });
            }

            if (in_array('deploySeed', get_class_methods($instance))) {
                call_user_func([$instance, 'deploySeed'], $artisan, $table_exists);
            }

            if (in_array('deployModels', get_class_methods($instance))) {
                $models = call_user_func([$instance, 'deployModels'], $this, $models);
            }
        }

        $this->comment('');
    }

    if ('local'==env('APP_ENV')) {
        $models_file = base_path(join(['resources', 'nuxt', 'plugins', 'models.json'], DIRECTORY_SEPARATOR));
        file_put_contents($models_file, json_encode($models));
        $this->comment('Models generated');
    }
    
    $this->comment('Finish');
})->describe('App deploy');