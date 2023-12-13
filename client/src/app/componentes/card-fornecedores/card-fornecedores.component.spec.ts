import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFornecedoresComponent } from './card-fornecedores.component';

describe('CardFornecedoresComponent', () => {
  let component: CardFornecedoresComponent;
  let fixture: ComponentFixture<CardFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFornecedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
