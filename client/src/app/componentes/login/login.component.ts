import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: LoginService){}

  fazerLogin(){
    this.service.fazerLogin().subscribe((valorRetornado) => console.log(valorRetornado));
  }
}
