import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { buscaFornecedorTrigger } from 'src/app/animations';
import { Content, Fornecedor } from 'src/app/models/IFornecedor';
import { InfoFornecedor } from 'src/app/models/InfoFornecedor';
import { FornecedorService } from 'src/app/service/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css'],
  animations: [
    buscaFornecedorTrigger
  ]
})
export class FornecedorComponent implements OnInit{

  constructor(private router: Router, private service: FornecedorService){}

  adicionarFornecedor: boolean = false;
  editarFornecedor: boolean = false;
  infoFornecedor: InfoFornecedor[] = [];
  fornecedorSubscription: Subscription = new Subscription();
  @ViewChild('adicionaFornecedor', {static: true})
  formFornecedor?: NgForm;

  ngOnInit(): void {
    const token = localStorage.getItem('authorization')
    if(token?.length === 7){
      this.router.navigate(["/login"])
    }
    this.fornecedorSubscription = this.service.fornecedores$.subscribe((fornecedores) => {
      this.infoFornecedor = fornecedores;
    })
    this.service.getFornecedores();
  }

  public receberDadosDoFilho(texto: string){
    if(texto.includes('editar')){
      this.editarFornecedor = false;
      const id = texto.replace('editar', '');
      this.editarFornecedor = true;
      const idNumero = parseInt(id);
      let index = this.infoFornecedor.findIndex((f) => f.id === idNumero);
      console.log(this.infoFornecedor[index]);
      console.log(this.formFornecedor);
    }else{
      const id = texto.replace('excluir', '');
      this.service.deleteFornecedor(id);
    }
  }

  public postFornecedor(fornecedor: InfoFornecedor): void{
    this.service.postFornecedor(fornecedor);
  }

  cadastrarFornecedor(forms: NgForm): void{
    const f = new InfoFornecedor(null);
    f.cnpj = forms.form.get('cnpj')?.value;
    f.nomeContato = forms.form.get('nomeContato')?.value;
    f.razaoSocial = forms.form.get('razaoSocial')?.value;
    f.telefone = forms.form.get('telefone')?.value;
    this.postFornecedor(f);
  }

  public showFormFornecedor(){
    this.adicionarFornecedor = !this.adicionarFornecedor;
  }
}
