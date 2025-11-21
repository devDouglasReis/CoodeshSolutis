import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhotographer } from './form-photographer';

describe('FormPhotographer', () => {
  let component: FormPhotographer;
  let fixture: ComponentFixture<FormPhotographer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPhotographer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPhotographer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
