<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoTransacaoFinanceira extends Model
{
    use HasFactory;

    protected $table = 'tipo_transacao_financeira';

    protected $fillable = [
        'tipo',
    ];

    public function transacoes()
    {
        return $this->hasMany(TransacaoFinanceira::class);
    }
}
