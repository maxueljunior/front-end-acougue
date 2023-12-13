import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { buscandoFornecedores } from 'src/app/animations';
import { Content, Fornecedor } from 'src/app/models/IFornecedor';
import { InfoFornecedor } from 'src/app/models/InfoFornecedor';
import { FornecedorService } from 'src/app/service/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css'],
  animations: [
    buscandoFornecedores
  ]
})
export class FornecedorComponent implements OnInit{

  constructor(private router: Router, private service: FornecedorService){}

  infoFornecedor: InfoFornecedor[] = [];

  ngOnInit(): void {
    const token = localStorage.getItem('authorization')
    if(token?.length === 7){
      this.router.navigate(["/login"])
    }
    this.getFornecedores();
  }

  public getFornecedores(){
    this.service.getFornecedores().subscribe((valores) => {
      console.log(valores);
      this.transformarEmInfoFornecedor(valores.content)
    });
  }

  public transformarEmInfoFornecedor(content: Content[]): InfoFornecedor[]{
    return content.map(contente => {
      const f = new InfoFornecedor(contente);
      this.infoFornecedor.push(f);
      return f;
    })
  }
}
