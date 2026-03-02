import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastromedico } from './cadastromedico';

describe('Cadastromedico', () => {
  let component: Cadastromedico;
  let fixture: ComponentFixture<Cadastromedico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadastromedico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadastromedico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
