import { Content, Fornecedor } from './../models/IFornecedor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InfoFornecedor } from '../models/InfoFornecedor';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService{
  private URL_API: string = "/api/fornecedor";
  private TOKEN: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBUEkgd2l0aCBhw6dvdWd1ZSIsInN1YiI6InJvZHJpZ28iLCJleHAiOjE3MDI1ODM5NjQsInJvbGVzIjpbIkFETUlOIiwiVkVOREVET1IiXX0.0C0s4tg8bNnsxoyxbslYRzAQBkwZasUykDKhcQ5anOw';
  private fornecedorSubject = new BehaviorSubject<InfoFornecedor[]>([]);
  fornecedores$ = this.fornecedorSubject.asObservable();

  constructor(private http: HttpClient) { }

  public getFornecedores(): void{
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.TOKEN);
    this.http.get<Fornecedor>(this.URL_API, {
      headers: header
    }).subscribe((f) => {
      console.log(f);
      let forns = this.fornecedorSubject.getValue();
      const convertido = f.content.map((conteudo) => new InfoFornecedor(conteudo));
      forns = forns.concat(convertido);
      this.fornecedorSubject.next(forns);
    })
  }

  public postFornecedor(fornecedor: InfoFornecedor): void{
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.TOKEN);
    this.http.post<InfoFornecedor>(this.URL_API, fornecedor, {headers: header}).subscribe((f) => {
      let forns = this.fornecedorSubject.getValue();
      console.log(f);
      forns.unshift(f);
      this.fornecedorSubject.next(forns);
    });
  }

  public deleteFornecedor(id: string): void{
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.TOKEN);
    this.http.delete(`${this.URL_API}/${id}`, {headers: header}).subscribe(() => {
      let forns = this.fornecedorSubject.getValue();
      let idNumber = parseInt(id);
      let index = forns.findIndex(fornecedor => fornecedor.id === idNumber);
      console.log(index);
      if(index !== -1){
        forns.splice(index, 1);
        this.fornecedorSubject.next(forns);
      }
    });
  }

  // Codigo abaixo sem o BehaviorSubject

  // public getFornecedores(): Observable<Fornecedor>{
  //   const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.TOKEN);
  //   return this.http.get<Fornecedor>(this.URL_API, {
  //     headers: header
  //   })
  // }

  // public postFornecedor(fornecedor: InfoFornecedor): Observable<Fornecedor>{
  //   const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.TOKEN);
  //   return this.http.post<Fornecedor>(this.URL_API, fornecedor, {headers: header});
  // }
}
