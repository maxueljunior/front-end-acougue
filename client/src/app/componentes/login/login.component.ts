import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, pipe, tap, throwError } from 'rxjs';
import { erroLogin } from 'src/app/animations';
import { Token } from 'src/app/models/IToken';
import { InfoLogin } from 'src/app/models/InfoLogin';
import { InfoToken } from 'src/app/models/InfoToken';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    erroLogin
  ]
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router){}

  usuario: string = '';
  senha: string = '';
  acessoNegado: boolean = false;

  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl('')
  // });

  // loginForm = this.formBuilder.group({
  //   username: ['', [Validators.required, Validators.minLength(3)]],
  //   password: ['', [Validators.required]]
  // })

  onSubmit(loginForm: NgForm){
    const dadosLogin = new InfoLogin(loginForm.form.value.usuario, loginForm.form.value.senha);

    this.service.fazerLogin(dadosLogin).pipe(
      catchError((error) => {
        this.acessoNegado = true;
        this.limparFormulario(loginForm);
        this.adicionaTokenLocalStorage("");
        return throwError(() => new Error('Erro ao realizar a requisição'));
      })
    ).subscribe((valorRetornado) => {
      this.acessoNegado = false;
      this.adicionaTokenLocalStorage(valorRetornado.token);
      this.router.navigate(["/fornecedor"]);
    })
  }

  adicionaTokenLocalStorage(token: string): void{
    localStorage.setItem('authorization', 'Bearer ' + token);
  }

  limparFormulario(loginForm: NgForm): void{
    loginForm.form.reset();
  }

  // getToken(valorRetornado: any): InfoToken {
  //   const infoToken = new InfoToken(valorRetornado);
  //   return infoToken;
  // }
}

