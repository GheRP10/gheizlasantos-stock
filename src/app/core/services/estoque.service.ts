import { Injectable } from '@angular/core';
import { Movimentacao } from '../models/movimentacao.model';

@Injectable({ providedIn: 'root' })
export class EstoqueService {

  private movimentacoes: Movimentacao[] = [];
  private nextId = 1;

  listarMovimentacoes(): Movimentacao[] {
    return this.movimentacoes;
  }

  adicionar(descricao: string, codigoProduto: number, qtde: number): void {
    const nova: Movimentacao = {
      id: this.nextId++,
      descricao,
      codigoProduto,
      qtde,
      data: new Date().toISOString()
    };

    this.movimentacoes = [...this.movimentacoes, nova];
  }

  estornar(id: number): void {
    this.movimentacoes = this.movimentacoes.filter(m => m.id !== id);
  }
}
