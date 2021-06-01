
/**
 *  @OA\Tag(
 *      name="{{ $table->Model->Name }}",
 *      description="Operações de {{ $table->getConfig('plural') }}",
 *  )
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class {{ $table->Controller->Name }} extends Controller
{
    /**
     *  @OA\Get(
     *      path="/api/{{ $table->Route }}/search",
     *      operationId="{{ $table->Route }}-search",
     *      summary="Buscar {{ $table->getConfig('plural') }}",
     *      description="Buscar {{ $table->getConfig('plural') }}",
     *      tags={"{{ $table->Model->Name }}"},
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
        return (new {{ $table->Model->Namespace }})->search($request->all());
    }

    /**
     *  @OA\Get(
     *      path="/api/{{ $table->Route }}/find/{id}",
     *      operationId="{{ $table->Route }}-find",
     *      summary="Retornar {{ $table->getConfig('singular') }} por id",
     *      description="Retornar {{ $table->getConfig('singular') }} por id",
     *      tags={"{{ $table->Model->Name }}"},
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
        return {{ $table->Model->Namespace }}::find($id);
    }

    /**
     *  @OA\Post(
     *      path="/api/{{ $table->Route }}/save",
     *      operationId="{{ $table->Route }}-save",
     *      summary="Salvar {{ $table->getConfig('plural') }}",
     *      description="Salvar {{ $table->getConfig('plural') }}",
     *      tags={"{{ $table->Model->Name }}"},
     *      @OA\Response(response=200, description="Dados salvos"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    public function save(Request $request) {
        return (new {{ $table->Model->Namespace }})->store($request->all());
    }

    /**
     *  @OA\Post(
     *      path="/api/{{ $table->Route }}/delete/{id}",
     *      operationId="{{ $table->Route }}-delete",
     *      summary="Deletar {{ $table->getConfig('singular') }}",
     *      description="Deletar {{ $table->getConfig('singular') }}",
     *      tags={"{{ $table->Model->Name }}"},
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
        return {{ $table->Model->Namespace }}::find($id)->remove();
    }


    @foreach($table->Fields as $col)
    @if (!is_array($col->InputOptions)) @continue @endif 
    /**
     *  @OA\Get(
     *      path="/api/{{ $table->Route }}/{{ \Str::of($col->Field)->plural() }}",
     *      operationId="{{ $table->Route }}-{{ \Str::of($col->Field)->plural() }}",
     *      summary="Listar opções de {{ $col->Field }}",
     *      description="Listar opções de {{ $col->Field }}",
     *      tags={"{{ $table->Model->Name }}"},
     * 
     *      @OA\Response(response=200, description="Dados"),
     *      @OA\Response(response=500, description="{'message':'Erro', 'fields':[]}"),
     *  )
     */
    public function {{ \Str::of($col->Field)->plural() }}() {
        return (new {{ $table->Model->Namespace }})->{{ \Str::of($col->Field)->plural() }}();
    }


    /**
     *  @OA\Get(
     *      path="/api/{{ $table->Route }}/{{ \Str::of($col->Field)->singular() }}/{id}",
     *      operationId="{{ $table->Route }}-{{ \Str::of($col->Field)->singular() }}",
     *      summary="Pegar opção de {{ $col->Field }} por ID",
     *      description="Pegar opção de {{ $col->Field }} por ID",
     *      tags={"{{ $table->Model->Name }}"},
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
    public function {{ \Str::of($col->Field)->singular() }}($id) {
        return (new {{ $table->Model->Namespace }})->{{ \Str::of($col->Field)->singular() }}($id);
    }
    @endforeach

}