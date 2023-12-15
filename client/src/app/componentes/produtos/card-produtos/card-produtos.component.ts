import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InfoProduto } from 'src/app/models/InfoProduto';

@Component({
  selector: 'app-card-produtos',
  templateUrl: './card-produtos.component.html',
  styleUrls: ['./card-produtos.component.css']
})
export class CardProdutosComponent {

  @Input()
  produto?: InfoProduto;

  @Output()
  eventEmitterEdit: EventEmitter<string> = new EventEmitter();

  editarProduto(texto: string){
    this.eventEmitterEdit?.emit(texto);
  }
}
