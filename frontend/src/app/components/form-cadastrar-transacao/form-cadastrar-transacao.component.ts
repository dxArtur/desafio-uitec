import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService, TransacaoInputCreateDto } from '../../services/api.service';


@Component({
  selector: 'app-form-cadastrar-transacao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-cadastrar-transacao.component.html',
  styleUrl: './form-cadastrar-transacao.component.css'
})
export class FormCadastrarTransacaoComponent {
  
  novaTransacao: TransacaoInputCreateDto = {
    descricao: '',
    valor: 0,
    tipo_transacao_id: 1
    }

  constructor(private apiService: ApiService) {}


  adicionarTransacao() {
    if (this.novaTransacao.valor <= 0 || !this.novaTransacao.descricao.trim()) {
      alert('Valor deve ser maior que zero, se desejar cadastrar uma despesas, insira a apenas o valor, o sistema irá tratar as informações.'); // Exibe alerta se as condições não forem atendidas
      return;
    }
    
    this.apiService.adicionarTransacao(this.novaTransacao).subscribe({
      next: () => {
        this.novaTransacao = { descricao: '', valor: 0, tipo_transacao_id: 1 };
      },
      error: (error) => {
        console.error('Erro ao adicionar transação:', error);
      }
    })
  }
}
