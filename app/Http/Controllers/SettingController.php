<?php

/**
 *  @OA\Tag(
 *      name="Setting",
 *      description="Operações de Settings",
 *  )
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     *  @OA\Get(
     *      path="/api/setting/search",
     *      operationId="setting-search",
     *      summary="Buscar Settings",
     *      description="Buscar Settings",
     *      tags={"Setting"},
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
    public function search(Request $request) {
        return (new \App\Models\Setting)->search($request->all());
    }

    /**
     *  @OA\Get(
     *      path="/api/setting/find/{id}",
     *      operationId="setting-find",
     *      summary="Retornar Setting por id",
     *      description="Retornar Setting por id",
     *      tags={"Setting"},
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
    public function find($id) {
        return \App\Models\Setting::find($id);
    }

    /**
     *  @OA\Post(
     *      path="/api/setting/save",
     *      operationId="setting-save",
     *      summary="Salvar Settings",
     *      description="Salvar Settings",
     *      tags={"Setting"},
     *      @OA\Response(response=200, description="Dados salvos"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    public function save(Request $request) {
        return (new \App\Models\Setting)->store($request->all());
    }

    /**
     *  @OA\Post(
     *      path="/api/setting/delete/{id}",
     *      operationId="setting-delete",
     *      summary="Deletar Setting",
     *      description="Deletar Setting",
     *      tags={"Setting"},
     * 
     *      @OA\Parameter(
     *          name="id",
     *          description="ID de order",
     *          required=true,
     *          in="path",
     *      ),
     * 
     *      @OA\Response(response=200, description="Dados salvos"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    public function delete($id) {
        return \App\Models\Setting::find($id)->remove();
    }

    public function loadAll() {
        return (new \App\Models\Setting)->loadAll();
    }

    public function saveAll(Request $request) {
        return (new \App\Models\Setting)->saveAll($request->all());
    }
}