import { Component, Input } from '@angular/core';
import { Transacao, ApiService, TransacaoInputCreateDto} from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { EditModalTransacaoComponent } from "../edit-modal-transacao/edit-modal-transacao.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [CommonModule, EditModalTransacaoComponent, FormsModule],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {

  extrato: Transacao[] = [];
  transacaoParaEditar!: Transacao;
  exibirModal: boolean = false;
  transacoesFiltradas: Transacao[] = [];
  filtro: 'todas' | 'receitas' | 'despesas' = 'todas';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarExtrato();
  }
  carregarExtrato() {
    this.apiService.getAllTransacoes().subscribe(transacoes => {
      this.extrato = transacoes;
      this.transacoesFiltradas = this.extrato; // Inicialmente, mostra todas as transações
    });
  }

  filtrarTransacoes() {
    if (this.filtro === 'todas') {
      this.transacoesFiltradas = this.extrato;
    } else {
      this.transacoesFiltradas = this.extrato.filter(transacao =>
        (this.filtro === 'receitas' && transacao.tipo_transacao_id === 1) ||
        (this.filtro === 'despesas' && transacao.tipo_transacao_id === 2)
      );
    }
  }

  atualizarTransacao(transacaoAtualizada: TransacaoInputCreateDto) {
    if (this.transacaoParaEditar) {
      const { id } = this.transacaoParaEditar; // Obtém o id da transação
      this.apiService.atualizarTransacao(id!, transacaoAtualizada).subscribe({
        next: () => {
          this.carregarExtrato(); // Atualiza o extrato após a edição
          this.fecharModal(); // Fecha o modal
        },
        error: (error) => {
          console.error('Erro ao atualizar transação:', error);
        }
      });
    }
  }

  apagarTransacao(id: number) {
    if (confirm('Tem certeza que deseja apagar esta transação?')) {
      this.apiService.deletarTransacao(id).subscribe({
        next: () => {
          this.carregarExtrato(); // Atualiza o extrato após a exclusão
        },
        error: (error) => {
        console.error('Erro ao excluir transação:', error); // Tratamento de erro
      }
    });
    }
  }


  

  abrirModal(transacao: Transacao) {
    this.transacaoParaEditar = transacao;
    this.exibirModal = true;
  }

  fecharModal() {
    this.carregarExtrato();
    this.exibirModal = false;
    this.transacaoParaEditar = null!
  }
}
