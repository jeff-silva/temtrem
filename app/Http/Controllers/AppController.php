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


    public function getDashboard() {
        return [];
    }


    public function getCron() {
        $log = [];

        return $log;
    }

    public function getPanelNav() {
        $user = auth()->user();
        if (!$user) return [];

        $items = [];
        
        $items[] = [
            'label' => 'Home',
            'to' => '/business',
        ];

        $items[] = [
            'label' => 'Meus negócios',
            'to' => '',
            'children' => \App\Models\TemtremBusiness::where('user_id', $user->id)->get()->transform(function($item) {
                return [
                    'label' => $item->name,
                    'to' => "/panel/business/{$item->id}",
                ];
            }),
        ];
        
        return $items;
    }
}