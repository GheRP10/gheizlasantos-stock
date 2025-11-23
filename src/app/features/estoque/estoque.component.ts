import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstoqueService } from '../../core/services/estoque.service';
import { Movimentacao } from '../../core/models/movimentacao.model';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

  filtro: string = '';

  novaDescricao: string = '';
  novoCodigoProduto!: number;
  novaQtde!: number;

  constructor(private estoqueService: EstoqueService) {}

  get movimentacoes(): Movimentacao[] {
    const lista = this.estoqueService.listarMovimentacoes();

    if (!this.filtro) {
      return lista;
    }

    const termo = this.filtro.toLowerCase();

    return lista.filter(m =>
      m.descricao.toLowerCase().includes(termo) ||
      String(m.codigoProduto).includes(termo)
    );
  }

  adicionar(): void {
    if (!this.novaDescricao || !this.novoCodigoProduto || !this.novaQtde) {
      return;
    }

    this.estoqueService.adicionar(
      this.novaDescricao,
      this.novoCodigoProduto,
      this.novaQtde
    );

    this.novaDescricao = '';
    this.novoCodigoProduto = undefined as any;
    this.novaQtde = undefined as any;
  }

  estornar(id: number): void {
    this.estoqueService.estornar(id);
  }
}
