import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { FornecedorComponent } from './componentes/fornecedor/fornecedor.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';

const routes: Routes = [
  {
    path: "",
    // redirectTo: 'login',
    // redirectTo: 'fornecedor',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'fornecedor',
    component: FornecedorComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
