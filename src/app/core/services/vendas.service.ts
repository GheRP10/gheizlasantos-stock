import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Venda } from '../models/venda.model';

@Injectable({ providedIn: 'root' })
export class VendasService {

  constructor(private http: HttpClient) {}

  obterVendas(): Observable<Venda[]> {
    return this.http
      .get<{ vendas: Venda[] }>('assets/vendas.json')
      .pipe(map(r => r.vendas));
  }
}
