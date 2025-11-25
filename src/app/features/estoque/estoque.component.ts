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

  // Filtros
  filtro: string = '';
  dataInicio: string = '';
  dataFim: string = '';

  // Formulário
  novaDescricao: string = '';
  novoCodigoProduto!: number;
  novaQtde!: number;

  constructor(private estoqueService: EstoqueService) {}

  get movimentacoes(): Movimentacao[] {
    let lista = [...this.estoqueService.listarMovimentacoes()];

    // 1. Filtro por texto descrição ou código 
    if (this.filtro) {
      const termo = this.filtro.toLowerCase();
      lista = lista.filter(m =>
        m.descricao.toLowerCase().includes(termo) ||
        String(m.codigoProduto).includes(termo)
      );
    }

    // 2. Filtro por data
    // Decisão técnica: Optei pela comparação direta de strings ISO 8601
    // pois o formato "YYYY-MM-DD" é lexicograficamente ordenável.
    // é mais performático e evita problemas de fuso horário 
    // que ocorreriam ao instanciar objetos new Date().
    if (this.dataInicio || this.dataFim) {
      lista = lista.filter(m => {
        // Extrai apenas a parte "YYYY-MM-DD" da data ISO da movimentação
        const dataMovimentacao = m.data.substring(0, 10);

        if (this.dataInicio && dataMovimentacao < this.dataInicio) {
          return false;
        }

        if (this.dataFim && dataMovimentacao > this.dataFim) {
          return false;
        }

        return true;
      });
    }

    // 3. ORDENAÇÃO agrupamento Visual 
    // Ordena alfabeticamente por descrição para agrupar produtos iguais.
    // Em caso de empate, ordena pela data mais recente.
    return lista.sort((a, b) => {
      const comparacao = a.descricao.localeCompare(b.descricao);
      
      if (comparacao === 0) {
        return b.data.localeCompare(a.data);
      }
      
      return comparacao;
    });
  }

  adicionar(): void {
    if (!this.novaDescricao || !this.novoCodigoProduto || !this.novaQtde) {
      alert('RN.CDS.001 - Por favor, preencha todos os campos antes de adicionar.');
      return;
    }

    // Verificar se este código já foi usado antes
    const produtoExistente = this.estoqueService.listarMovimentacoes()
      .find(m => m.codigoProduto === this.novoCodigoProduto);

    // Se existe e a descrição for diferente, bloqueia o cadastro
    if (produtoExistente && produtoExistente.descricao.toLowerCase() !== this.novaDescricao.toLowerCase()) {
      alert(`RN.CDS.002 - ERRO DE CONSISTÊNCIA:\n\nO código ${this.novoCodigoProduto} já está cadastrado como "${produtoExistente.descricao}".\n\nNão é permitido usar o mesmo código para produtos diferentes.`);
      return;
    }

    this.estoqueService.adicionar(
      this.novaDescricao,
      this.novoCodigoProduto,
      this.novaQtde
    );

    this.limparFormulario();
  }

  estornar(id: number): void {
    if (confirm('Tem certeza que deseja estornar este lançamento?')) {
      this.estoqueService.estornar(id);
    }
  }

  limparFiltros(): void {
    this.filtro = '';
    this.dataInicio = '';
    this.dataFim = '';
  }

  private limparFormulario(): void {
    this.novaDescricao = '';
    this.novoCodigoProduto = undefined as any;
    this.novaQtde = undefined as any;
  }
}