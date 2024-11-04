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
        Schema::create('transacao_financeira', function (Blueprint $table) {
            $table->id();
            $table->string('descricao'); // Descrição da transação
            $table->decimal('valor', 10, 2);
            $table->foreignId('tipo_transacao_id')->constrained('tipo_transacao_financeira')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transacaofinanceira');
    }
};
