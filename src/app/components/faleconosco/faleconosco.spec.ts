import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faleconosco } from './faleconosco';

describe('Faleconosco', () => {
  let component: Faleconosco;
  let fixture: ComponentFixture<Faleconosco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faleconosco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faleconosco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
