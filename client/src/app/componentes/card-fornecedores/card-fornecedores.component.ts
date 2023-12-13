import { Component, Input } from '@angular/core';
import { InfoFornecedor } from 'src/app/models/InfoFornecedor';

@Component({
  selector: 'app-card-fornecedores',
  templateUrl: './card-fornecedores.component.html',
  styleUrls: ['./card-fornecedores.component.css']
})
export class CardFornecedoresComponent {

  @Input()
  fornecedor!: InfoFornecedor;
}
