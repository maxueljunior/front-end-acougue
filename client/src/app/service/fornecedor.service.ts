import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Fornecedor } from '../models/IFornecedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService{

  private URL_API: string = "/api/fornecedor";

  constructor(private http: HttpClient) { }

  public getFornecedores(): Observable<Fornecedor>{
    const header = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBUEkgd2l0aCBhw6dvdWd1ZSIsInN1YiI6InJvZHJpZ28iLCJleHAiOjE3MDI0OTYxNDAsInJvbGVzIjpbIkFETUlOIiwiVkVOREVET1IiXX0.tMJdoDuSLVio09aXt3qxGnAJ6EBbC_yaKGEYOx6DNUo');
    return this.http.get<Fornecedor>(this.URL_API, {
      headers: header
    })
  }
}
