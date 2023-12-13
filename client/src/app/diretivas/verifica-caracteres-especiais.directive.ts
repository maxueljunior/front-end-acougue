import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[verificaCaracteresEspeciais]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: VerificaCaracteresEspeciaisDirective,
      multi: true
    }
  ]
})
export class VerificaCaracteresEspeciaisDirective implements Validators{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null{
    const valorDigitado = control.value;
    if(valorDigitado !== null || valorDigitado !== undefined){
      const contemCaracterEspecial = new RegExp('[^A-Za-z0-9]');
      return !contemCaracterEspecial.test(valorDigitado) ? null : {'verificaCaracteresEspeciais': true}
    }
    return null;
  }
}
