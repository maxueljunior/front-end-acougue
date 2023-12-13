import { NG_VALIDATORS, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[validaApenasNumeros]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidaApenasNumerosDirective,
    multi: true
  }]
})
export class ValidaApenasNumerosDirective implements Validators{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const valorDigitado = control.value;
    if(valorDigitado !== null || valorDigitado !== undefined){
      const contemApenasNumero = new RegExp('[a-zA-Z]');
      return contemApenasNumero.test(valorDigitado) ? {"validaApenasNumeros": true} : null;
    }
    return null;
  }
}
