<?php

/**
 *  @OA\Tag(
 *      name="User",
 *      description="Operações de Usuários",
 *  )
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     *  @OA\Get(
     *      path="/api/user/search",
     *      operationId="user-search",
     *      summary="Buscar Usuários",
     *      description="Buscar Usuários",
     *      tags={"User"},
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
        return (new \App\Models\User)->search($request->all());
    }

    /**
     *  @OA\Get(
     *      path="/api/user/find/{id}",
     *      operationId="user-find",
     *      summary="Retornar Usuário por id",
     *      description="Retornar Usuário por id",
     *      tags={"User"},
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
        return \App\Models\User::find($id);
    }

    /**
     *  @OA\Post(
     *      path="/api/user/save",
     *      operationId="user-save",
     *      summary="Salvar Usuários",
     *      description="Salvar Usuários",
     *      tags={"User"},
     *      @OA\Response(response=200, description="Dados salvos"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    public function save(Request $request) {
        return (new \App\Models\User)->store($request->all());
    }

    /**
     *  @OA\Post(
     *      path="/api/user/delete/{id}",
     *      operationId="user-delete",
     *      summary="Deletar Usuário",
     *      description="Deletar Usuário",
     *      tags={"User"},
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
        return \App\Models\User::find($id)->remove();
    }


                             
    /**
     *  @OA\Get(
     *      path="/api/user/types",
     *      operationId="user-types",
     *      summary="Listar opções de type",
     *      description="Listar opções de type",
     *      tags={"User"},
     * 
     *      @OA\Response(response=200, description="Dados"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    public function types() {
        return (new \App\Models\User)->types();
    }


    /**
     *  @OA\Get(
     *      path="/api/user/type/{id}",
     *      operationId="user-type",
     *      summary="Pegar opção de type por ID",
     *      description="Pegar opção de type por ID",
     *      tags={"User"},
     * 
     *      @OA\Parameter(
     *          name="id",
     *          description="ID de order",
     *          required=true,
     *          in="path",
     *      ),
     * 
     *      @OA\Response(response=200, description="Dados"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    public function type($id) {
        return (new \App\Models\User)->type($id);
    }
                             

	public function getSearch() {
		return \App\Models\User::querySearch();
	}

	public function getFind($id) {
		return \App\Models\User::find($id);
	}

	public function postSave() {
		return (new \App\Models\User)->store(request()->all());
	}

	public function postDelete($id) {
		return \App\Models\User::find($id)->remove();
	}
}