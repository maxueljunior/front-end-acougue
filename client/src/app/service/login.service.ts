import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/ILogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private URL_API = "/api/login";

  public fazerLogin(): Observable<Login>{
    console.log('chegou aqui.')
    return this.http.post<Login>(this.URL_API, {
      username: "rodrigo",
      password: "123",
    });
  }
}
