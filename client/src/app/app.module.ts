import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { VerificaCaracteresEspeciaisDirective } from './diretivas/verifica-caracteres-especiais.directive';
import { ValidaApenasNumerosDirective } from './diretivas/valida-apenas-numeros.directive';
import { FornecedorComponent } from './componentes/fornecedor/fornecedor.component';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CardFornecedoresComponent } from './componentes/card-fornecedores/card-fornecedores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MensagemComponent,
    VerificaCaracteresEspeciaisDirective,
    ValidaApenasNumerosDirective,
    FornecedorComponent,
    CabecalhoComponent,
    CardFornecedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
