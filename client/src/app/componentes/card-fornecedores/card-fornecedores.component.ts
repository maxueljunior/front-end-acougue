import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content, Fornecedor } from 'src/app/models/IFornecedor';
import { InfoFornecedor } from 'src/app/models/InfoFornecedor';

@Component({
  selector: 'app-card-fornecedores',
  templateUrl: './card-fornecedores.component.html',
  styleUrls: ['./card-fornecedores.component.css']
})
export class CardFornecedoresComponent {

  @Input()
  fornecedor!: InfoFornecedor;

  @Output()
  passandoDadosParaOPai = new EventEmitter<any>();

  public mandarDadosParaOPai(texto: string){
    this.passandoDadosParaOPai.emit(texto);
  }
}
