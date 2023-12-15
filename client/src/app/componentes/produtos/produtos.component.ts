import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Content, ProdutoEditar } from 'src/app/models/IProduto';
import { InfoProduto } from 'src/app/models/InfoProduto';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  constructor(
    private service: ProdutosService,
    private formBuilder: FormBuilder
    ){}

  listaProdutos: InfoProduto[] = [];
  produtoForm = this.formBuilder.group({
    descricao: ['', Validators.required],
    unidade: ['', Validators.required]
  })

  editaProduto: boolean = false;
  btnName: string = 'Salvar';

  ngOnInit(): void {
    this.service.produtos$.subscribe((produto) => {
      this.listaProdutos = produto;
    })
    this.service.getProdutos();
  }

  submitProduto(): void{
    if(this.editaProduto){
      this.service.patchProduto(this.produtoForm.value as ProdutoEditar);
    }
    else{
      this.service.postProduto(this.produtoForm.value as InfoProduto);
    }

  }

  editarProduto(texto: string): void{
    this.editaProduto = true;
    if(this.editaProduto){
      this.btnName = 'Editar'
    }
    let idText = texto.replace("editar", "");
    let id = parseInt(idText);
    let index = this.listaProdutos.findIndex((p) => p.id === id);
    this.produtoForm.patchValue({
      descricao: this.listaProdutos[index].descricao,
      unidade: this.listaProdutos[index].unidade
    })
  }
}
