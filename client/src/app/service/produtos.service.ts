import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InfoProduto } from '../models/InfoProduto';
import { Content, ProdutoEditar, Produtos } from '../models/IProduto';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBUEkgd2l0aCBhw6dvdWd1ZSIsInN1YiI6InJvZHJpZ28iLCJleHAiOjE3MDI2NTU5MjQsInJvbGVzIjpbIkFETUlOIiwiVkVOREVET1IiXX0.IBv2g2GWSvvT1Kjjph5ucSX8S-TlX4v3fwMPZSfDfd4';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtosSubject = new BehaviorSubject<InfoProduto[]>([]);
  produtos$ = this.produtosSubject.asObservable();
  private URL_API = "/api/produtos";

  constructor(private http: HttpClient) { }

  public getProdutos(): void{
    let header = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + TOKEN);

    this.http.get<Produtos>(this.URL_API, {headers : header}).subscribe((valores) => {
      let p = this.produtosSubject.getValue();
      p = p.concat(valores.content);
      this.produtosSubject.next(p);
    });
  }

  public postProduto(produto: InfoProduto){
    let header = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + TOKEN);
    console.log(produto)
    this.http.post<InfoProduto>(this.URL_API, produto, {headers: header}).subscribe((produto) => {
      let p = this.produtosSubject.getValue();
      p.unshift(produto);
      this.produtosSubject.next(p);
    });
  }

  public patchProduto(produto: ProdutoEditar){
    console.log('chegou ao patch')
    let header = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + TOKEN);

  }
}
