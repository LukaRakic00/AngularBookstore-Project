import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeSnackComponent } from './dodavanje-snack.component';

describe('DodavanjeSnackComponent', () => {
  let component: DodavanjeSnackComponent;
  let fixture: ComponentFixture<DodavanjeSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodavanjeSnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodavanjeSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
