import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasService } from '../../core/services/vendas.service';
import { Venda } from '../../core/models/venda.model';

interface LinhaRanking {
  vendedor: string;
  total: number;
  comissao: number;
}

@Component({
  selector: 'app-comissao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comissao.component.html',
  styleUrl: './comissao.component.css'
})
export class ComissaoComponent implements OnInit {

  ranking: LinhaRanking[] = [];
  carregando = true;

  constructor(private vendasService: VendasService) {}

  ngOnInit(): void {
    this.vendasService.obterVendas().subscribe({
      next: (vendas: Venda[]) => {
        const mapa = new Map<string, { total: number; comissao: number }>();

        vendas.forEach((v: Venda) => {
          let taxa = 0;
          if (v.valor >= 500) {
            taxa = 0.05;
          } else if (v.valor >= 100) {
            taxa = 0.01;
          }

          const comissao = v.valor * taxa;

          if (!mapa.has(v.vendedor)) {
            mapa.set(v.vendedor, { total: v.valor, comissao });
          } else {
            const atual = mapa.get(v.vendedor)!;
            atual.total += v.valor;
            atual.comissao += comissao;
          }
        });

        this.ranking = Array.from(mapa.entries())
          .map(([vendedor, dados]) => ({
            vendedor,
            total: dados.total,
            comissao: dados.comissao
          }))
          .sort((a, b) => b.total - a.total);

        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
      }
    });
  }
}
