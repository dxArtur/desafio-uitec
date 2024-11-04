import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastrarTransacaoComponent } from './form-cadastrar-transacao.component';

describe('FormCadastrarTransacaoComponent', () => {
  let component: FormCadastrarTransacaoComponent;
  let fixture: ComponentFixture<FormCadastrarTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadastrarTransacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadastrarTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
