import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../models/IToken';
import { InfoLogin } from '../models/InfoLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private URL_API = "/api/login";

  public fazerLogin(dadosLogin: InfoLogin): Observable<Token>{
    return this.http.post<Token>(this.URL_API, dadosLogin);
  }
}
