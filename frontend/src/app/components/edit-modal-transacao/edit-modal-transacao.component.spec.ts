import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalTransacaoComponent } from './edit-modal-transacao.component';

describe('EditModalTransacaoComponent', () => {
  let component: EditModalTransacaoComponent;
  let fixture: ComponentFixture<EditModalTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModalTransacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
