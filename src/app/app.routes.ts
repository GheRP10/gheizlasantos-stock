import { Routes } from '@angular/router';
import { EstoqueComponent } from './features/estoque/estoque.component';
import { ComissaoComponent } from './features/comissao/comissao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'estoque', pathMatch: 'full' },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'comissao', component: ComissaoComponent },
  { path: '**', redirectTo: 'estoque' }
];
