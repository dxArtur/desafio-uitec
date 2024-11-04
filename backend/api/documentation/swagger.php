<?php

namespace App\Http\Controllers;

/**
 * @OA\Schema(
 *     schema="Transacao",
 *     type="object",
 *     @OA\Property(property="descricao", type="string", example="Pagamento de água"),
 *     @OA\Property(property="valor", type="number", format="float", example=150.00),
 *     @OA\Property(property="tipo_transacao_id", type="integer", example=1),
 * )
 */