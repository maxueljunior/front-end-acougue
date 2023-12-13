import { animate, animation, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const buscandoFornecedores = trigger('buscandoFornecedoresAnimation', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(1000, [
        animate('1400ms ease-out', keyframes([
          style({offset:0, opacity:0, transform:'translateX(-100%)'}),
          style({offset:0.7, opacity:0.7, transform:'translateX(15%)'}),
          style({offset:1, opacity:1, transform:'translateX(0%)'}),
        ]))
      ])
    ], {optional: true})
  ])
]);

export const erroLogin = trigger('erroLoginState', [
  state('default', style({
    transform: 'translateX(-100%)',
    opacity: '0'
  })),
  state('errorLogin', style({
    transform: 'translateX(0)',
    opacity: '1'
  })),
  transition('default => errorLogin', [
    animate('500555ms ease-out', style({
      transform: 'translateX(15%)',
      opacity: '1'
    })),
    animate(500555)
  ])
])
