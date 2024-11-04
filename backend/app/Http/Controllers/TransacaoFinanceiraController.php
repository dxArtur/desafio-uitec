<?php

namespace App\Http\Controllers;

use App\Models\TransacaoFinanceira;
use Illuminate\Http\Request;

class TransacaoFinanceiraController extends Controller
{
    public function index()
    {
        $transacoes = TransacaoFinanceira::all();
        return response()->json($transacoes);
    }

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

    public function show($id)
    {
        $transacao = TransacaoFinanceira::with('tipo')->findOrFail($id);
        return response()->json($transacao);
    }

    public function update(Request $request, $id)
    {
        $transacao = TransacaoFinanceira::findOrFail($id);

        $request->validate([
            'descricao' => 'string|max:255',
            'valor' => 'numeric',
            'tipo_id' => 'exists:tipo_transacao_financeira,id',
        ]);

        $transacao->update($request->all());
        return response()->json($transacao);
    }

    public function destroy($id)
    {
        $transacao = TransacaoFinanceira::findOrFail($id);
        $transacao->delete();
        return response()->json(null, 204);
    }
}