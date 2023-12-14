import { animate, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations";

// export const buscandoFornecedores = trigger('buscandoFornecedoresAnimation', [
//   transition('* => *', [
//     query(':enter', [
//       style({
//         opacity: 0,
//         transform: 'translateX(-100%)'
//       }),
//       stagger(1000, [
//         animate('1400ms ease-out', keyframes([
//           style({offset:0, opacity:0, transform:'translateX(-100%)'}),
//           style({offset:0.7, opacity:0.7, transform:'translateX(15%)'}),
//           style({offset:1, opacity:1, transform:'translateX(0%)'}),
//         ]))
//       ])
//     ], {optional: true})
//   ])
// ]);

export const buscaFornecedorTrigger = trigger('buscaFornecedorAnimation', [
  transition(':enter', [
    query('.card-fornecedor', [
      style({
        opacity:0,
        transform: 'translateX(-100%)'
      }),
      stagger(200, [
        animate('500ms ease-out', keyframes([
          style({offset:0, opacity:0, transform:'translateX(-100%)'}),
          style({offset:0.7, opacity:0.7, transform:'translateX(15%)'}),
          style({offset:1, opacity:1, transform:'translateX(0%)'}),
        ]))
      ])
    ], {optional: true})
  ])
])

export const erroLogin = trigger('erroLoginState', [
  transition('* => failed', [
    style({
      transform: 'translateX(-100%)',
      opacity: 0
    }),
    animate('1000ms ease-out', keyframes([
      style({offset:0, transform: 'translateX(-100%)', opacity:0}),
      style({offset:0.7, transform: 'translateX(15%)', opacity:0.7}),
      style({offset:1, transform: 'translateX(0%)', opacity:1})
    ]))
  ])
])

export const animacaoInicio = trigger('animacaoInicio', [
  transition(':enter', [
    query('.container__login__logo,.container__login__form__inputs,.container__login__form__button',[
      style({
        transform: 'translateX(-100%)',
        opacity: 0,
      }),
      stagger(200,[
        animate('400ms ease-out', keyframes([
          style({offset:0, transform: 'translateX(-100%)', opacity:0}),
          style({offset:0.7, transform: 'translateX(15%)', opacity:0.7}),
          style({offset:1, transform: 'translateX(0%)', opacity:1}),
        ]))
      ])
    ], {optional: true})
  ])
])

// export const senhaRequerida = trigger('senhaRequeridaAnimation', [
//   transition('* => *', [
//     query('input.ng-invalid',[
//       animate('0.5s', keyframes([
//         style({transform: 'translateX(-10%)'}),
//         style({transform: 'translateX(10%)'}),
//         style({transform: 'translateX(-10%)'}),
//         style({transform: 'translateX(10%)'}),
//         style({transform: 'translateX(-10%)'}),
//         style({transform: 'translateX(10%)'}),
//         style({transform: 'translateX(-10%)'}),
//         style({transform: 'translateX(0%)'}),
//       ]))
//     ], {optional: true})
//   ])
// ])


