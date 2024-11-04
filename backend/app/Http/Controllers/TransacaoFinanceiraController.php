<?php

namespace App\Http\Controllers;

use App\Models\TransacaoFinanceira;
use Illuminate\Http\Request;

/**
 * @OA\Info(title="API de Transações Financeiras", version="1.0")
 * @OA\Schema(
 *     schema="Transacao",
 *     type="object",
 *     required={"descricao", "valor", "tipo_transacao_id"},
 *     @OA\Property(property="descricao", type="string", example="Pagamento de água"),
 *     @OA\Property(property="valor", type="number", format="float", example=150.00),
 *     @OA\Property(property="tipo_transacao_id", type="integer", example=1),
 * )
 * @OA\Schema(
 *     schema="TipoTransacaoFinanceira",
 *     type="object",
 *     required={"tipo"},
 *     description="Os tipos de transação financeira já estão seedados no banco de dados. Não é necessário criar novos tipos.",
 *     @OA\Property(property="id", type="integer", format="int64", example=1),
 *     @OA\Property(property="tipo", type="string", example="Receita"),
 *     @OA\Property(property="created_at", type="string", format="date-time", example="2024-01-01T12:00:00Z"),
 *     @OA\Property(property="updated_at", type="string", format="date-time", example="2024-01-02T12:00:00Z"),
 * )
 */
class TransacaoFinanceiraController extends Controller
{
    /**
     * @OA\Get(
     *     path="/transacoes",
     *     tags={"Transações"},
     *     summary="Lista todas as transações",
     *     @OA\Response(
     *         response="200",
     *         description="Lista de transações retornada com sucesso",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Transacao"))
     *     )
     * )
     */
    public function index()
    {
        $transacoes = TransacaoFinanceira::all();
        return response()->json($transacoes);
    }

    /**
     * @OA\Post(
     *     path="/transacoes",
     *     tags={"Transações"},
     *     summary="Cria uma nova transação",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Transacao")
     *     ),
     *     @OA\Response(response="201", description="Transação criada com sucesso", 
     *         @OA\JsonContent(ref="#/components/schemas/Transacao")),
     *     @OA\Response(response="422", description="Erro de validação")
     * )
     */
    public function store(Request $request)
    {
        $request->validate([
            'descricao' => 'required|string|max:255',
            'valor' => 'required|numeric',
            'tipo_transacao_id' => 'required|exists:tipo_transacao_financeira,id',
        ]);

        $transacao = TransacaoFinanceira::create($request->all());
        return response()->json($transacao, 201);
    }

    /**
     * @OA\Get(
     *     path="/transacoes/{id}",
     *     tags={"Transações"},
     *     summary="Exibe uma transação específica",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response="200", description="Transação retornada com sucesso",
     *         @OA\JsonContent(ref="#/components/schemas/Transacao")),
     *     @OA\Response(response="404", description="Transação não encontrada")
     * )
     */
    public function show($id)
    {
        $transacao = TransacaoFinanceira::with('tipo')->findOrFail($id);
        return response()->json($transacao);
    }

    /**
     * @OA\Put(
     *     path="/transacoes/{id}",
     *     tags={"Transações"},
     *     summary="Atualiza uma transação existente",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/Transacao")
     *     ),
     *     @OA\Response(response="200", description="Transação atualizada com sucesso",
     *         @OA\JsonContent(ref="#/components/schemas/Transacao")),
     *     @OA\Response(response="404", description="Transação não encontrada"),
     *     @OA\Response(response="422", description="Erro de validação")
     * )
     */
    public function update(Request $request, $id)
    {
        $transacao = TransacaoFinanceira::findOrFail($id);

        $request->validate([
            'descricao' => 'string|max:255',
            'valor' => 'numeric',
            'tipo_transacao_id' => 'exists:tipo_transacao_financeira,id',
        ]);

        $transacao->update($request->all());
        return response()->json($transacao);
    }

    /**
     * @OA\Delete(
     *     path="/transacoes/{id}",
     *     tags={"Transações"},
     *     summary="Remove uma transação existente",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(response="204", description="Transação excluída com sucesso"),
     *     @OA\Response(response="404", description="Transação não encontrada")
     * )
     */
    public function destroy($id)
    {
        $transacao = TransacaoFinanceira::findOrFail($id);
        $transacao->delete();
        return response()->json(null, 204);
    }
}
