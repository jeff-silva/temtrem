<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AppMake extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:make';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate models, controllers, routes and stores from database schema';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function getDatabaseSchema() {
        return new class {
            public $fks = [];
            public $routes = [];
            public $tables = [];

            public function __construct() {
                $env_database = env('DB_DATABASE');
                
                $this->fks = \DB::select("SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE CONSTRAINT_SCHEMA='{$env_database}' ");
        
                foreach(\DB::select('SHOW TABLE STATUS') as $table) {
                    $table = (object) array_merge([
                        'Singular' => \Str::singular($table->Name),
                        'Plural' => \Str::plural($table->Name),
                        'Route' => str_replace('_', '-', \Str::of($table->Name)->singular()->kebab()),
                        'FieldLabel' => 'id',
                    ], (array) $table);
        
                    $table->Model = new \stdClass;
                    $table->Model->Name = \Str::studly($table->Singular);
                    $table->Model->Namespace = "\App\Models\\{$table->Model->Name}";
                    $table->Model->File = "app/Models/{$table->Model->Name}.php";
                    // $table->Model->FileExists = file_exists(base_path($table->Model->File));
        
                    $table->Controller = new \stdClass;
                    $table->Controller->Name = \Str::studly($table->Singular).'Controller';
                    $table->Controller->Namespace = "\App\Http\Controllers\\{$table->Controller->Name}";
                    $table->Controller->File = "app/Http/Controllers/{$table->Controller->Name}.php";
                    // $table->Controller->FileExists = file_exists(base_path($table->Controller->File));
                    $table->Controller->Methods = [];
        
                    $table->FieldNames = [];
                    $table->Fields = [];
                    $table->Routes = [];
        
                    $table->ForeignKeys = [];
                    foreach($this->fks as $fk) {
                        if ($fk->TABLE_NAME==$table->Name AND $fk->REFERENCED_TABLE_NAME) {
                            $table->ForeignKeys[] = $fk;
                        }
                    }
        
                    foreach(\DB::select("SHOW FULL COLUMNS FROM `{$table->Name}` ") as $col) {
                        $col->EnumOptions = false;

                        preg_replace_callback('/enum\((.+?)\)/', function($m) use($table, $col) {
                            $col->EnumOptions = array_map(function($item) {
                                $item = trim($item, "'");
                                return [
                                    'id' => $item,
                                    'label' => ucwords(implode(' ', preg_split('/[^a-zA-Z0-9]/', $item))),
                                ];
                            }, explode(',', $m[1]));

                            $route = (string) \Str::of($col->Field)->plural()->kebab();
                            $table->Controller->Methods[] = "public function {$route}(lara \$request) {\n\t\treturn (new {$table->Model->Namespace})->{$route}();\n\t}";
                            $table->Routes["{$table->Route}/{$route}"] = [
                                'method' => 'get',
                                'route' => "{$table->Route}/{$route}",
                                'controller' => "{$table->Controller->Namespace}@{$route}",
                                'function' => $route,
                            ];

                            $route = (string) \Str::of($col->Field)->singular()->kebab();
                            $table->Controller->Methods[] = "public function {$route}(\$id) {\n\t\treturn (new {$table->Model->Namespace})->{$route}(\$id);\n\t}";
                            $table->Routes["{$table->Route}/{$route}"] = [
                                'method' => 'get',
                                'route' => "{$table->Route}/{$route}/{id}",
                                'controller' => "{$table->Controller->Namespace}@{$route}",
                                'function' => $route,
                            ];
                            
                        }, $col->Type);

                        if ($table->FieldLabel=='id' AND preg_match('/varchar/', $col->Type)) {
                            $table->FieldLabel = $col->Field;
                        }

                        $table->FieldNames[] = $col->Field;
                        $table->Fields[ $col->Field ] = $col;
                    }

                    $table->Controller->Methods[] = "public function search(Request \$request) {\n\t\treturn (new {$table->Model->Namespace})->search(\$request->all());\n\t}";
                    $table->Routes["{$table->Route}/search"] = [
                        'method' => 'get',
                        'route' => "{$table->Route}/search",
                        'controller' => "{$table->Controller->Namespace}@search",
                        'function' => 'search',
                    ];

                    $table->Controller->Methods[] = "public function find(\$id) {\n\t\treturn {$table->Model->Namespace}::find(\$id);\n\t}";
                    $table->Routes["{$table->Route}/find"] = [
                        'method' => 'get',
                        'route' => "{$table->Route}/find/{id}",
                        'controller' => "{$table->Controller->Namespace}@find",
                        'function' => 'find',
                    ];

                    $table->Controller->Methods[] = "public function save(Request \$request) {\n\t\treturn (new {$table->Model->Namespace})->store(\$request->all());\n\t}";
                    $table->Routes["{$table->Route}/save"] = [
                        'method' => 'post',
                        'route' => "{$table->Route}/save",
                        'controller' => "{$table->Controller->Namespace}@save",
                        'function' => 'save',
                    ];

                    $table->Controller->Methods[] = "public function delete(\$id) {\n\t\treturn (new {$table->Model->Namespace})->delete(\$id);\n\t}";
                    $table->Routes["{$table->Route}/delete"] = [
                        'method' => 'post',
                        'route' => "{$table->Route}/delete/{id}",
                        'controller' => "{$table->Controller->Namespace}@delete",
                        'function' => 'delete',
                    ];

                    foreach($table->Routes as $name=>$route) {
                        $this->routes[$name] = $route;
                    }
        
                    $table->Fields = (object) $table->Fields;
                    $this->tables[ $table->Name ] = $table;
                }
            }
            
            public function getModel($name) {
                foreach($this->tables as $table) {
                    if ($table->Name==$name) {
                        return $table->Model;
                    }
                }
            }
    
            public function getController($name) {
                foreach($this->tables as $table) {
                    if ($table->Name==$name) {
                        return $table->Controller;
                    }
                }
            }
        };


        return $schema;
    }

    public function bladeCompile($data=[], $html='') {
        $html = preg_replace_callback('/\{\{(.+?)\}\}/', function($m) {
            return "<?php echo {$m[1]}; ?>";
        }, $html);

        $html = preg_replace_callback('/@if\s*\((.+?)\)/', function($m) {
            return "<?php if({$m[1]}): ?>";
        }, $html);

        $html = preg_replace_callback('/@foreach\((.+?)\)/', function($m) {
            return "<?php foreach({$m[1]}): ?>";
        }, $html);

        $html = str_replace('@endforeach', '<?php endforeach; ?>', $html);
        $html = str_replace('@endif', '<?php endif; ?>', $html);

        /*
        */
        ob_start() and extract($data, EXTR_SKIP);
        try { eval('?> '.$html); }
        catch (\Exception $e) { ob_get_clean(); throw $e; }
        $html = ob_get_clean();
        $html = str_replace('<php', '<?php', $html);

        return $html;
    }

    public function generateFiles() {
        $this->comment('Generating files');

        $update_date = date('d/m/Y H:i');
        $signature = sprintf("/*\n * %s\n * Generated at %s\n * To generate again, run \"php artisan {$this->signature}\".\n */", env('APP_NAME'), $update_date);
        $schema = $this->getDatabaseSchema();
        // dd($schema->tables['orders']->Routes);

        file_put_contents(config_path('database-schema.php'), '<?php return '. var_export((array) $schema, true) .'; ');

        $routes = ['<?php', '', $signature, ''];
        
        $loopIndex = -1;
        foreach($schema->tables as $table) {
            $loopIndex++;

            $_content = function($call) {
                ob_start();
                $content = call_user_func($call);
                if (is_array($content)) {
                    $content = implode("\n", $content);
                }
                echo $content;
                return ob_get_clean();
            };

            // Model file
            $files[] = [
                'path' => $table->Model->File, 
                'content' => $_content(function() use($table, $schema) {
                    $lines = ['<?php', '', 'namespace App\Models;', ''];

                    if ($table->Name=='users') {
                        $lines[] = 'use Tymon\JWTAuth\Contracts\JWTSubject;';
                        $lines[] = 'use Illuminate\Contracts\Auth\MustVerifyEmail;';
                        $lines[] = 'use Illuminate\Database\Eloquent\Factories\HasFactory;';
                        $lines[] = 'use Illuminate\Foundation\Auth\User as Authenticatable;';
                        $lines[] = 'use Illuminate\Notifications\Notifiable;';
                        $lines[] = '';
                        $lines[] = "class {$table->Model->Name} extends Authenticatable implements JWTSubject {";
                        $lines[] = "\tuse HasFactory, Notifiable, \App\Traits\Model;";
                    }

                    else {
                        $lines[] = "class {$table->Model->Name} extends \Illuminate\Database\Eloquent\Model {";
                        $lines[] = "\tuse \App\Traits\Model;";
                    }

                    $lines[] = "\t";

                    $lines[] = "\tprotected \$fillable = [";
                    foreach($table->FieldNames as $fieldName) {
                        $lines[] = "\t\t'{$fieldName}',";
                    }
                    $lines[] = "\t];";
                    
                    $lines[] = "\t";

                    if ($table->Name=='users') {
                        $lines[] = "\tpublic function getJWTIdentifier() {\n\t\treturn \$this->getKey();\n\t}\n";
                        $lines[] = "\tpublic function getJWTCustomClaims() {\n\t\treturn [];\n\t}\n";
                    }

                    $lines[] = "\tpublic function validate(\$data=[]) {";
                    $lines[] = "\t\treturn \Validator::make(\$data, [";
                    $lines[] = "\t\t\t'name' => ['required'],";
                    $lines[] = "\t\t]);";
                    $lines[] = "\t}";

                    $methodsList = [];

                    foreach($table->Fields as $field) {
                        if (is_array($field->EnumOptions)) {
                            $getFieldOptionsMethod = 'get'. \Str::of($field->Field)->plural()->studly();
                            $method = "public function {$getFieldOptionsMethod}() {";
                            $method .= "\n\t\treturn [";
                            
                            foreach($field->EnumOptions as $opt) {
                                $method .= "\n\t\t\t['id' => '{$opt['id']}', 'label' => '{$opt['label']}'],";
                            }

                            $method .= "\n\t\t];";
                            $method .= "\n\t}";
                            
                            $methodsList[] = $method;


                            $method = 'get'. \Str::of($field->Field)->studly();
                            $method = "public function {$method}(\$id) {";
                            $method .= "\n\t\tforeach(\$this->{$getFieldOptionsMethod}() as \$item) {";
                            $method .= "\n\t\t\tif (\$item['id'] != \$id) continue;";
                            $method .= "\n\t\t\treturn \$item;";
                            $method .= "\n\t\t}";
                            $method .= "\n\t\treturn false;";
                            $method .= "\n\t}";
                            $methodsList[] = $method;
                        }
                    }

                    foreach($schema->fks as $fk) {
                        if (! $fk->REFERENCED_TABLE_NAME) continue;

                        if ($fk->TABLE_NAME==$table->Name) {
                            $model = $schema->getModel($fk->REFERENCED_TABLE_NAME);
                            $methodName = \Str::of($fk->REFERENCED_TABLE_NAME)->singular()->lower()->camel();
                            $methodsList[ $fk->TABLE_NAME ] = "public function {$methodName}() {\n\t\treturn \$this->hasOne({$model->Name}::class);\n\t}";
                        }
                        
                        if ($fk->REFERENCED_TABLE_NAME==$table->Name) {
                            $model = $schema->getModel($fk->TABLE_NAME);
                            $methodName = \Str::of($fk->TABLE_NAME)->lower()->camel();
                            $methodsList[ $fk->TABLE_NAME ] = "public function {$methodName}() {\n\t\treturn \$this->hasMany({$model->Name}::class);\n\t}";
                        }
                    }

                    foreach($methodsList as $foreignKeysMethod) {
                        $lines[] = "\n\t{$foreignKeysMethod}";
                    }

                    $lines[] = "}";
                    return $lines;
                })
            ];


// Controller file
$files[] = ['path' => $table->Controller->File, 'content' => $_content(function() use($table, $schema, $loopIndex, $update_date) {

$oaInfo = $loopIndex>0? null: <<<EOF
\n/**
 * @OA\Info(
 *     title="Laravel",
 *     description="Atualizado em 21/03/2021 02:47",
 *     version="1.0.0",
 * )
 */\n
EOF;

echo <<<EOF
<?php
{$oaInfo}
/**
 *  @OA\Tag(
 *      name="{$table->Model->Name}",
 *      description="Operações de {$table->Model->Name}",
 *  )
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class {$table->Controller->Name} extends Controller
{
    /**
     *  @OA\Get(
     *      path="/api/{$table->Route}/search",
     *      operationId="{$table->Route}-search",
     *      summary="Buscar {$table->Plural}",
     *      description="Buscar {$table->Plural}",
     *      tags={"{$table->Model->Name}"},
     * 
     *      @OA\Parameter(
     *          name="search",
     *          description="Termo de busca",
     *          required=false,
     *          in="query",
     *      ),
     * 
     *      @OA\Parameter(
     *          name="page",
     *          description="Página",
     *          required=false,
     *          in="query",
     *      ),
     * 
     *      @OA\Parameter(
     *          name="perpage",
     *          description="Quantidade de resultados por página",
     *          required=false,
     *          in="query",
     *      ),
     * 
     *      @OA\Parameter(
     *          name="orderby",
     *          description="Nome da coluna de referência para ordenação",
     *          required=false,
     *          in="query",
     *      ),
     * 
     *      @OA\Parameter(
     *          name="order",
     *          description="Ordem asc ou desc",
     *          required=false,
     *          in="query",
     *      ),
     * 
     *      @OA\Response(response=200, description="Resultados"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    //public function search(Request \$request) {
    //    return (new {$table->Model->Namespace})->search(\$request->all());
    //}

    /**
     *  @OA\Get(
     *      path="/api/{$table->Route}/find/{id}",
     *      operationId="{$table->Route}-find",
     *      summary="Retornar {$table->Singular} por id",
     *      description="Retornar {$table->Singular} por id",
     *      tags={"{$table->Model->Name}"},
     *      @OA\Response(response=200, description="Dados de order"),
     * 
     *      @OA\Parameter(
     *          name="id",
     *          description="ID de order",
     *          required=true,
     *          in="path",
     *      ),
     * 
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    //public function find(\$id) {
    //    return {$table->Model->Namespace}::find(\$id);
    //}

    /**
     *  @OA\Post(
     *      path="/api/{$table->Route}/save",
     *      operationId="{$table->Route}-save",
     *      summary="Salvar {$table->Plural} de order",
     *      description="Salvar {$table->Plural} de order",
     *      tags={"{$table->Model->Name}"},
     *      @OA\Response(response=200, description="Dados de order salvo"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    //public function save(Request \$request) {
    //    return (new {$table->Model->Namespace})->store(\$request->all());
    //}

    /**
     *  @OA\Post(
     *      path="/api/{$table->Route}/delete/{id}",
     *      operationId="{$table->Route}-delete",
     *      summary="Deletar {$table->Singular}",
     *      description="Deletar {$table->Singular}",
     *      tags={"{$table->Model->Name}"},
     * 
     *      @OA\Parameter(
     *          name="id",
     *          description="ID de order",
     *          required=true,
     *          in="path",
     *      ),
     * 
     *      @OA\Response(response=200, description="Dados de order salvo"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    //public function delete(\$id) {
    //    return {$table->Model->Namespace}::find(\$id)->remove();
    //}

EOF;

foreach($table->Controller->Methods as $method) {
    echo "\n\t{$method}\n";
}


echo "\n}\n";
})];


// Nuxt Store
$files[] = ['path' => "resources/nuxt/store/{$table->Singular}.js", 'content' => $_content(function() use($table, $schema, $loopIndex, $update_date) {
    echo <<<EOF
export default {
    state() {
        return {
            loading: false,
            saving: false,
            deleting: false,
            model: {id:null},
            error: {},

            search: {
                search: '',
                page: 1,
                perpage: 10,
                orderby: 'id',
                order: 'desc',
            },

            results: {
                total: 0,
                data: [],
            },
        };
    },

    mutations: {
        merge(state, data) {
            for(let i in data) {
                state[i] = data[i];
            }
        },
    },

    actions: {
        search({state, commit}) {
            return new Promise((resolve, reject) => {
                commit('merge', {loading: true});
                this.\$axios.get(`/api/{$table->Route}/search/`, {params:state.search}).then(resp => {
                    commit('merge', {
                        loading: false,
                        results: resp.data
                    });
                    resolve(resp.data);
                }).catch(reject);
            });
        },

        find({state, commit}, id) {
            return new Promise((resolve, reject) => {
                if (!id) return reject('ID vazio');
                commit('merge', {
                    model: {},
                    loading: true,
                });
                this.\$axios.get(`/api/{$table->Route}/find/\${id}`).then(resp => {
                    commit('merge', {
                        loading: false,
                        model: resp.data,
                    });
                    resolve(resp.data);
                }).catch(reject);
            });
        },

        save({state, commit}, data) {
            return new Promise((resolve, reject) => {
                commit('merge', {saving: true});
                this.\$axios.post(`/api/{$table->Route}/save/`, data).then(resp => {
                    commit('merge', {saving: false});
                    resolve(resp.data);
                }).catch(reject);
            });
        },

        delete({state, commit}, id) {
            if (!id) return reject('ID vazio');
            return new Promise((resolve, reject) => {
                commit('merge', {deleting: true});
                this.\$axios.post(`/api/{$table->Route}/delete/\${id}`).then(resp => {
                    commit('merge', {deleting: false});
                    resolve(resp.data);
                }).catch(reject);
            });
        },
    },
};
EOF;
})];

// Nuxt Search
$files[] = ['path' => "resources/nuxt/pages/admin/{$table->Route}/index.vue", 'content' => $_content(function() use($table, $schema, $loopIndex, $update_date) {
    $lines = [];

    $lines[] = "<template><div>";
    
    $lines[] = "\t<ui-actions>";
    $lines[] = "\t\t<nuxt-link to=\"/admin/{$table->Route}/0\" class=\"btn btn-primary\">Novo</nuxt-link>";
    $lines[] = "\t</ui-actions>";
    $lines[] = "\t";

    $lines[] = "\t<form class=\"input-group mb-3\" @submit.prevent=\"\$store.dispatch('{$table->Singular}/search')\" style=\"max-width:300px;\">";
    $lines[] = "\t\t<input type=\"text\" class=\"form-control border-0\" placeholder=\"Buscar {$table->Plural}\" />";
    $lines[] = "\t\t<div class=\"input-group-append\"><div class=\"input-group-btn\">";
    $lines[] = "\t\t\t<button type=\"submit\" class=\"btn bg-white\"><i class=\"fas fa-search\"></i></button>";
    $lines[] = "\t\t</div></div>";
    $lines[] = "\t</form>";
    $lines[] = "\t";

    $lines[] = "\t<ui-table v-bind=\"\$store.state.{$table->Singular}.results\" :loading=\"\$store.state.{$table->Singular}.loading\">";
    $lines[] = "\t\t<template #header>";
    $lines[] = "\t\t\t<th width=\"50px\">ID</th>";
    $lines[] = "\t\t\t<th>Nome</th>";
    $lines[] = "\t\t\t<th width=\"150px\">Alteração</th>";
    $lines[] = "\t\t</template>";
    $lines[] = '';

    $lines[] = "\t\t<template #item=\"{item}\">";
    $lines[] = "\t\t\t<td>{{ item.id }}</td>";
    $lines[] = "\t\t\t<td>{{ item.{$table->FieldLabel} }}</td>";
    $lines[] = "\t\t\t<td><ui-timeago v-model=\"item.updated_at\"></ui-timeago></td>";
    $lines[] = "\t\t</template>";
    $lines[] = '';

    $lines[] = "\t\t<template #actions=\"{item}\">";
    $lines[] = "\t\t\t<nuxt-link :to=\"`/admin/{$table->Route}/\${item.id}`\" class=\"btn btn-primary\">";
    $lines[] = "\t\t\t\t<i class=\"fas fa-edit\"></i>";
    $lines[] = "\t\t\t</nuxt-link>";
    $lines[] = "\t\t\t";
    $lines[] = "\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-danger\" @click=\"handleDelete(item)\">";
    $lines[] = "\t\t\t\t<i class=\"fas fa-times\"></i>";
    $lines[] = "\t\t\t</a>";
    $lines[] = "\t\t</template>";
    $lines[] = "\t</ui-table>";
    $lines[] = "\t<pre>{{ \$store.state.{$table->Singular} }}</pre>";


    $lines[] = "</div></template>";
    $lines[] = '';

    $lines[] = '<script>';
    $lines[] = 'export default {';
    $lines[] = "\tlayout: 'admin',";
    $lines[] = "\tmethods: {";
    $lines[] = "\t\thandleDelete(item) {";
    $lines[] = "\t\t\tthis.\$confirm({title:'Deseja deletar {$table->Singular}?'}).then(resp => {";
    $lines[] = "\t\t\t\tthis.\$axios.post(`/{$table->Route}/delete/\${item.id}`).then(resp => {";
    $lines[] = "\t\t\t\t\tthis.\$swal('{$table->Singular} deletado', '', 'success');";
    $lines[] = "\t\t\t\t});";
    $lines[] = "\t\t\t});";
    $lines[] = "\t\t},";
    $lines[] = "\t},";
    $lines[] = "\t";
    $lines[] = "\tmounted() {";
    $lines[] = "\t\tthis.\$store.dispatch('{$table->Singular}/search');";
    $lines[] = "\t},";
    $lines[] = '}';
    $lines[] = '</script>';

    echo implode("\n", $lines);
})];

// Nuxt Form
$files[] = ['path' => "resources/nuxt/pages/admin/{$table->Route}/_id.vue", 'content' => $_content(function() use($table, $schema, $loopIndex, $update_date) {
    $lines = [];

    $lines[] = "<template><div>";
    $lines[] = "\t<ui-form>";

    foreach($table->Fields as $field) {
        if (in_array($field->Field, ['id', 'created_at', 'updated_at', 'deleted_at', 'email_verified_at', 'remember_token'])) continue;

        $lines[] = "\t\t<ui-field label=\"{$field->Field}\" :error=\"error.{$field->Field}\">";
        $lines[] = "\t\t\t<input type=\"text\" class=\"form-control\" v-model=\"model.{$field->Field}\" />";
        $lines[] = "\t\t</ui-field>";
        $lines[] = "\t\t";
    }

    $lines[] = "\t\t<ui-actions>";
    $lines[] = "\t\t\t<nuxt-link class=\"btn\" to=\"/admin/{$table->Route}\">";
    $lines[] = "\t\t\t\t<i class=\"fas fa-chevron-left\"></i> Voltar";
    $lines[] = "\t\t\t</nuxt-link>";
    $lines[] = "\t\t\t<button type=\"submit\" class=\"btn btn-primary\">";
    $lines[] = "\t\t\t\t<i class=\"fas fa-save\"></i> Salvar";
    $lines[] = "\t\t\t</button>";
    $lines[] = "\t\t</ui-actions>";
    $lines[] = "\t</ui-form>";

    $lines[] = "\t<pre>{{ \$store.state.{$table->Singular} }}</pre>";
    $lines[] = "</div></template>";
    $lines[] = '';

    $lines[] = '<script>';
    $lines[] = 'export default {';
    $lines[] = "\tlayout: 'admin',";
    $lines[] = "\tdata() {";
    $lines[] = "\t\treturn {";
    $lines[] = "\t\t};";
    $lines[] = "\t},";
    $lines[] = "\t";
    $lines[] = "\tcomputed: {";
    $lines[] = "\t\tmodel() { return this.\$store.state.{$table->Singular}.model; },";
    $lines[] = "\t\terror() { return this.\$store.state.{$table->Singular}.error; },";
    $lines[] = "\t},";
    $lines[] = "\t";
    $lines[] = "\tmounted() {";
    $lines[] = "\t\tthis.\$store.dispatch(`{$table->Singular}/find`, this.\$route.params.id||0);";
    $lines[] = "\t},";
    $lines[] = '}';
    $lines[] = '</script>';

    echo implode("\n", $lines);
})];


        }

        $files[] = [
            'path' => "resources/nuxt/store/app_nav.js",
            'content' => $_content(function() use($table, $schema, $loopIndex, $update_date) {
                $lines = ['export default {'];
                $lines[] = "\tstate() {";
                $lines[] = "\t\treturn [";

                foreach($schema->tables as $table) {
                    $lines[] = "\t\t\t{";
                    $lines[] = "\t\t\t\tlabel: '{$table->Singular}',";
                    $lines[] = "\t\t\t\tto: '/admin/{$table->Route}',";
                    $lines[] = "\t\t\t\ticon: 'fas fa-globe',";
                    $lines[] = "\t\t\t\tchildren: [";
                    $lines[] = "\t\t\t\t\t{";
                    $lines[] = "\t\t\t\t\t\tlabel: 'Buscar',";
                    $lines[] = "\t\t\t\t\t\tto: '/admin/{$table->Route}',";
                    $lines[] = "\t\t\t\t\t},";
                    $lines[] = "\t\t\t\t\t{";
                    $lines[] = "\t\t\t\t\t\tlabel: 'Novo',";
                    $lines[] = "\t\t\t\t\t\tto: '/admin/{$table->Route}/0',";
                    $lines[] = "\t\t\t\t\t},";
                    $lines[] = "\t\t\t\t],";
                    $lines[] = "\t\t\t},";
                }

                $lines[] = "\t\t];";
                $lines[] = "\t},\n";
                $lines[] = "\tmutations: {},\n";
                $lines[] = "\tactions: {},";
                $lines[] = '};';
                return $lines;
            }),
        ];

        foreach($schema->tables as $table) {
            $name = \Str::of($table->Singular)->slug();
            $files[] = [
                'path' => "resources/nuxt/components/ui-table/ui-{$name}.vue",
                'content' => $_content(function() use($table, $schema, $loopIndex, $update_date) {
                    $lines = ['<template><div>'];

                    $lines[] = "\t<ui-select v-model=\"props.value\" @change=\"emitValue()\" :multiple=\"props.multiple\" @input=\"emitValue()\">";
                    $lines[] = "\t\t<ui-select-item v-for=\"i in results.data\" :key=\"i.id\" :value=\"i.id\">";
                    $lines[] = "\t\t\t{{ i.{$table->FieldLabel} }}";
                    $lines[] = "\t\t</ui-select-item>";
                    $lines[] = "\t</ui-select>";

                    $lines[] = '</div></template>';
                    $lines[] = '';
                    $lines[] = '<script>';
                    $lines[] = 'export default {';
                    $lines[] = "\tprops: {";
                    $lines[] = "\t\tvalue: [String, Number, Array, Object, Boolean],";
                    $lines[] = "\t\tmultiple: {default:false},";
                    $lines[] = "\t\tplaceholder: {default:'Selecionar {$table->Singular}'},";
                    $lines[] = "\t},";
                    $lines[] = "\t";
                    $lines[] = "\twatch: {";
                    $lines[] = "\t\t\$props: {deep:true, handler(value) {";
                    $lines[] = "\t\t\tthis.props = Object.assign({}, value);";
                    $lines[] = "\t\t}},";
                    $lines[] = "\t},";
                    $lines[] = "\t";
                    $lines[] = "\tdata() {";
                    $lines[] = "\t\treturn {";
                    $lines[] = "\t\t\tparams: {search:'', perpage:0},";
                    $lines[] = "\t\t\tresults: {data:[]},";
                    $lines[] = "\t\t\tprops: Object.assign({}, this.\$props),";
                    $lines[] = "\t\t};";
                    $lines[] = "\t},";
                    $lines[] = "\t";
                    $lines[] = "\tmethods: {";
                    $lines[] = "\t\temitValue() { this.\$emit('input', this.props.value); },";
                    $lines[] = "\t\t";
                    $lines[] = "\t\tsearch(query=false) {";
                    $lines[] = "\t\t\tthis.params.search = query||'';";
                    // $lines[] = "\t\t\tthis.\$debounce(() => {";
                    $lines[] = "\t\t\t\tthis.\$axios.get('/api/{$table->Route}/search', {params:this.params}).then(resp => {";
                    $lines[] = "\t\t\t\t\tthis.results = resp.data;";
                    $lines[] = "\t\t\t\t});";
                    // $lines[] = "\t\t\t}, 500);";
                    $lines[] = "\t\t},";
                    $lines[] = "\t},";
                    $lines[] = "\t";
                    $lines[] = "\tmounted() {";
                    $lines[] = "\t\tthis.search();";
                    $lines[] = "\t},";
                    $lines[] = '};';
                    $lines[] = '</script>';
                    return $lines;
                }),
            ];
        }

        $files[] = [
            'path' => 'resources/nuxt/pages/dev/index/test.vue',
            'content' => $_content(function() use($table, $schema, $loopIndex, $update_date) {
                $lines = ['<template><div>'];
                
                $lines[] = "\t<div class=\"row\">";
                foreach($schema->tables as $table) {
                    $name = 'ui-'. \Str::of($table->Singular)->slug();
                    $lines[] = "\t\t<div class=\"col-12 col-md-6 form-group\">";
                    $lines[] = "\t\t\t<label>{$name}</label>";
                    $lines[] = "\t\t\t<{$name} v-model=\"{$table->Singular}\"></{$name}>";
                    $lines[] = "\t\t\t<pre class=\"bg-dark p-2 mt-1 text-success\">{$table->Singular}: {{ {$table->Singular} }}</pre>";
                    $lines[] = "\t\t</div>";
                    $lines[] = "\t\t<div class=\"col-12 col-md-6 form-group\">";
                    $lines[] = "\t\t\t<label>{$name} multiple</label>";
                    $lines[] = "\t\t\t<{$name} v-model=\"{$table->Plural}\" :multiple=\"true\"></{$name}>";
                    $lines[] = "\t\t\t<pre class=\"bg-dark p-2 mt-1 text-success\">{$table->Plural}: {{ {$table->Plural} }}</pre>";
                    $lines[] = "\t\t</div>";
                }
                $lines[] = "\t</div>";

                $lines[] = '</div></template>';
                $lines[] = '';
                $lines[] = '<script>';
                $lines[] = 'export default {';
                $lines[] = "\tdata() {";
                $lines[] = "\t\treturn {";
                
                foreach($schema->tables as $table) {
                    $lines[] = "\t\t\t{$table->Singular}: false,";
                    $lines[] = "\t\t\t{$table->Plural}: [1],";
                }

                $lines[] = "\t\t};";
                $lines[] = "\t},";
                $lines[] = '};';
                $lines[] = '</script>';
                return $lines;
            }),
        ];

        foreach($files as $i=>$file) {
            $this->comment("{$i} - {$file['path']}");
            $file['path'] = base_path(str_replace('/', DIRECTORY_SEPARATOR, $file['path']));
            $info = pathinfo($file['path']);

            if (! file_exists($info['dirname'])) {
                mkdir($info['dirname'], 0755, true);
            }

            file_put_contents($file['path'], $file['content']);
        }

        foreach($schema->tables as $table) {
            $routes[] = "/* {$table->Model->Namespace} */";
            foreach($table->Routes as $name=>$route) {
                $routes[] = "Route::{$route['method']}('{$route['route']}', '{$route['controller']}')->name('{$name}');";
            }
            $routes[] = '';
        }

        file_put_contents(base_path('routes/api_generated.php'), implode("\n", $routes));

        // dd($tables);
    }

    public function generateSwagger() {
        $url = config('l5-swagger.default');
        $url = url(config("l5-swagger.documentations.{$url}.routes.api"));
        $this->comment("Generating Swagger: {$url}");
        \Artisan::call('l5-swagger:generate');
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->generateFiles();
        $this->generateSwagger();
    }
}
