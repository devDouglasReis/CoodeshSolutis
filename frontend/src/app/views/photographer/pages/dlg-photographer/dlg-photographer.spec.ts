import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgPhotographer } from './dlg-photographer';

describe('DlgPhotographer', () => {
  let component: DlgPhotographer;
  let fixture: ComponentFixture<DlgPhotographer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlgPhotographer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlgPhotographer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
