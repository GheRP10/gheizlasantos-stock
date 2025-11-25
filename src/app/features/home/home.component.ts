import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EstoqueService } from '../../core/services/estoque.service';
import { VendasService } from '../../core/services/vendas.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  anoDesafio = new Date().getFullYear();

  totalMovimentacoes: number = 0;
  totalVendas: number = 0;
  totalComissoes: number = 0;
  topVendedor: string = 'Carregando...';

  constructor(
    private estoqueService: EstoqueService,
    private vendasService: VendasService
  ) {}

  ngOnInit(): void {
    this.carregarDadosEstoque();
    this.carregarDadosVendas();
  }

  carregarDadosEstoque(): void {
    this.totalMovimentacoes = this.estoqueService.listarMovimentacoes().length;
  }

  carregarDadosVendas(): void {
    this.vendasService.obterVendas().subscribe(vendas => {
      let somaVendas = 0;
      let somaComissoes = 0;
      const rankingMap = new Map<string, number>();

        vendas.forEach(v => {
        somaVendas += v.valor;

        let taxa = 0;
        if (v.valor >= 500) taxa = 0.05;
        else if (v.valor >= 100) taxa = 0.01;
        somaComissoes += v.valor * taxa;

        const totalAtual = rankingMap.get(v.vendedor) || 0;
        rankingMap.set(v.vendedor, totalAtual + v.valor);
      });

      this.totalVendas = somaVendas;
      this.totalComissoes = somaComissoes;

      const ordenado = Array.from(rankingMap.entries()).sort((a, b) => b[1] - a[1]);
      if (ordenado.length > 0) {
        this.topVendedor = ordenado[0][0]; 
      } else {
        this.topVendedor = '-';
      }
    });
  }
}