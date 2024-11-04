import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transacao {
  id?: number;
  descricao: string;
  valor: number;
  tipo_transacao_id: number;
  created_at: string;
  updated_at: string;
}

export interface TransacaoInputCreateDto {
  descricao: string;
  valor: number;
  tipo_transacao_id: number;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://backend.test/api';

  constructor(private http: HttpClient) {}

  getAllTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.apiUrl}/transacoes`);
  }

  adicionarTransacao(transacao: TransacaoInputCreateDto): Observable<TransacaoInputCreateDto> {
    return this.http.post<Transacao>(`${this.apiUrl}/transacoes`, transacao);
  }

  getTransacao(id: number): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.apiUrl}/transacoes/${id}`);
  }

  atualizarTransacao(id: number, transacao: TransacaoInputCreateDto): Observable<TransacaoInputCreateDto> {
    return this.http.put<Transacao>(`${this.apiUrl}/transacoes/${id}`, transacao);
  }

  deletarTransacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/transacoes/${id}`);
  }  
}
