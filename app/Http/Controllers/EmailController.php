<?php

/**
 *  @OA\Tag(
 *      name="Email",
 *      description="Operações de Emails",
 *  )
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmailController extends Controller
{
    /**
     *  @OA\Get(
     *      path="/api/email/search",
     *      operationId="email-search",
     *      summary="Buscar Emails",
     *      description="Buscar Emails",
     *      tags={"Email"},
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
        return (new \App\Models\Email)->search($request->all());
    }

    /**
     *  @OA\Get(
     *      path="/api/email/find/{id}",
     *      operationId="email-find",
     *      summary="Retornar Email por id",
     *      description="Retornar Email por id",
     *      tags={"Email"},
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
        return \App\Models\Email::find($id);
    }

    /**
     *  @OA\Post(
     *      path="/api/email/save",
     *      operationId="email-save",
     *      summary="Salvar Emails",
     *      description="Salvar Emails",
     *      tags={"Email"},
     *      @OA\Response(response=200, description="Dados salvos"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    public function save(Request $request) {
        return (new \App\Models\Email)->store($request->all());
    }

    /**
     *  @OA\Post(
     *      path="/api/email/delete/{id}",
     *      operationId="email-delete",
     *      summary="Deletar Email",
     *      description="Deletar Email",
     *      tags={"Email"},
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
        return \App\Models\Email::find($id)->remove();
    }


                                       
}