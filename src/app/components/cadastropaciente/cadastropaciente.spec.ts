import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastropaciente } from './cadastropaciente';

describe('Cadastropaciente', () => {
  let component: Cadastropaciente;
  let fixture: ComponentFixture<Cadastropaciente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadastropaciente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadastropaciente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
