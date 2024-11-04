<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('tipo_transacao_financeira')->insert([
            ['tipo' => 'Receita'],
            ['tipo' => 'Despesa'],
            // Adicione mais tipos conforme necessário
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('tipo_transacao_financeira')->truncate();
    }
};
