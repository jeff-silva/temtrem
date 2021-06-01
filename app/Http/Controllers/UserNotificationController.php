<?php

/**
 *  @OA\Tag(
 *      name="UserNotification",
 *      description="Operações de User_notifications",
 *  )
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserNotificationController extends Controller
{
    /**
     *  @OA\Get(
     *      path="/api/user-notification/search",
     *      operationId="user-notification-search",
     *      summary="Buscar User_notifications",
     *      description="Buscar User_notifications",
     *      tags={"UserNotification"},
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
        return (new \App\Models\UserNotification)->search($request->all());
    }

    /**
     *  @OA\Get(
     *      path="/api/user-notification/find/{id}",
     *      operationId="user-notification-find",
     *      summary="Retornar User_notification por id",
     *      description="Retornar User_notification por id",
     *      tags={"UserNotification"},
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
        return \App\Models\UserNotification::find($id);
    }

    /**
     *  @OA\Post(
     *      path="/api/user-notification/save",
     *      operationId="user-notification-save",
     *      summary="Salvar User_notifications",
     *      description="Salvar User_notifications",
     *      tags={"UserNotification"},
     *      @OA\Response(response=200, description="Dados salvos"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    public function save(Request $request) {
        return (new \App\Models\UserNotification)->store($request->all());
    }

    /**
     *  @OA\Post(
     *      path="/api/user-notification/delete/{id}",
     *      operationId="user-notification-delete",
     *      summary="Deletar User_notification",
     *      description="Deletar User_notification",
     *      tags={"UserNotification"},
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
        return \App\Models\UserNotification::find($id)->remove();
    }


                                                 
}