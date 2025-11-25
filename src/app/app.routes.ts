import { Routes } from '@angular/router';
import { EstoqueComponent } from './features/estoque/estoque.component';
import { ComissaoComponent } from './features/comissao/comissao.component';
import { HomeComponent } from './features/home/home.component';
import { SobreComponent } from './features/sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'comissao', component: ComissaoComponent },
  { path: 'sobre', component: SobreComponent }, 
  { path: '**', redirectTo: '' }
];