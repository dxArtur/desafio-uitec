import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transacao, TransacaoInputCreateDto } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-modal-transacao.component.html',
  styleUrls: ['./edit-modal-transacao.component.css']
})
export class EditModalTransacaoComponent {
  @Input() transacao!: Transacao;
  @Output() update = new EventEmitter<TransacaoInputCreateDto>();
  @Output() close = new EventEmitter<void>();

  editarTransacao() {
    if (this.transacao) {
      const { descricao, valor, tipo_transacao_id } = this.transacao;
      const transacaoAtualizada: TransacaoInputCreateDto = { descricao, valor, tipo_transacao_id };
      this.update.emit(transacaoAtualizada);
    }
  }

  fecharModal() {
    this.close.emit()
  }
}