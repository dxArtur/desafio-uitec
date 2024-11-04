<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransacaoFinanceira extends Model
{
    use HasFactory;

    protected $table = 'transacao_financeira';

    protected $fillable = [
        'descricao',
        'valor',
        'tipo_transacao_id',
    ];

    public function tipo()
    {
        return $this->belongsTo(TipoTransacaoFinanceira::class);
    }
}
