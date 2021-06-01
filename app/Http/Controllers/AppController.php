<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * @OA\Info(
 *     title="Laravel",
 *     description="Atualizado em 21/03/2021 02:47",
 *     version="1.0.0",
 * )
 */

class AppController extends Controller
{

    public function getRoutes() {
        $routes = [];

        foreach(\Route::getRoutes() as $route) {
            foreach($route->methods() as $method) {
                $routes[] = [
                    'route' => ($method.':'. $route->uri()),
                ];
            }
        }

        return $routes;
    }

    public function getNavigation() {
        $groups = [
            'text' => ['id'=>'text', 'title'=>'Texto', 'items'=>[]],
            'encode' => ['id'=>'encode', 'title'=>'Encode', 'items'=>[]],
            'geo' => ['id'=>'geo', 'title'=>'Geográfico', 'items'=>[]],
            'financial' => ['id'=>'financial', 'title'=>'Financeiro', 'items'=>[]],
            'image' => ['id'=>'image', 'title'=>'Imagem', 'items'=>[]],
            'date' => ['id'=>'date', 'title'=>'Data', 'items'=>[]],
            'link' => ['id'=>'link', 'title'=>'Links', 'items'=>[]],
            'others' => ['id'=>'others', 'title'=>'Outros', 'items'=>[]],
        ];

        $files = glob(base_path('/resources/nuxt/pages/tools/*'));
        $files = array_map('realpath', $files);

        $files = array_filter($files, function($file) {
            $ignore = ['index.vue', '_tab.vue'];
            return !in_array(pathinfo($file, PATHINFO_BASENAME), $ignore);
        });

        $files = array_map(function($file) {
            return is_file($file)? $file: implode(DIRECTORY_SEPARATOR, [$file, 'index.vue']);
        }, $files);

        foreach($files as $i => $file) {
            $path = pathinfo($file, PATHINFO_FILENAME);
            if ($path=='index') {
                $path = pathinfo(pathinfo($file, PATHINFO_DIRNAME), PATHINFO_FILENAME);
            }
            
            $content = file_get_contents($file);

            preg_match('/title:\s*\"(.+?)\"/s', $content, $title);
            $title = isset($title[1])? $title[1]: '--';

            preg_match('/group:\s*\[(.+?)\]/s', $content, $group);
            $group = isset($group[1])? "[{$group[1]}]": '[]';
            $group = json_decode($group);
            $group = is_array($group)? $group: [];

            $item = [
                'title' => $title,
                'to' => "/tools/{$path}/",
            ];

            if (empty($group)) {
                $groups['others']['items'][] = $item;
            }
            else {
                foreach($group as $group_id) {
                    $groups[ $group_id ]['items'][] = $item;
                }
            }

            
            $files[ $i ] = $item;
        }

        return array_values($groups);
    }


    /**
     * Upload geral
     */
    public function upload($request) {
        $folder = $request->input('folder', 'uploads');
        $file = $request->file('file');
        
        $info = pathinfo($file->getClientOriginalName());
        $filename = \Str::slug($info['filename'], '-') .'.'. $info['extension'];
        $path = $file->storeAs($folder, $filename, 'public');

        return [
            'path' => "storage/{$path}",
            'name' => $filename,
            'ext' => $info['extension'],
            'size' => Storage::disk('public')->size($path),
            'mime' => Storage::disk('public')->getMimeType($path),
            'url' => Storage::disk('public')->url($path),
        ];
    }

    public function test() {
        $puppeteer = new \Nesk\Puphpeteer\Puppeteer();
        $browser = $puppeteer->launch();
        $page = $browser->newPage();
        $page->goto('https://google.com');
        $shot = $page->screenshot(['path' => 'public/shot.png']);
        $browser->close();

        return [];
    }

    public function dashboard() {
        $data = [];

        $data['counts'] = [];

        $data['counts'][] = [
            'title' => 'Projetos criados',
            'total' => \App\Models\Tevep::count(),
        ];

        $data['counts'][] = [
            'title' => 'Usuários cadastrados',
            'total' => \App\Models\User::count(),
        ];

        return $data;
    }




    public function cron() {
        $log = [];

        return $log;
    }
}