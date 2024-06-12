import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisanjeSnackComponent } from './brisanje-snack.component';

describe('BrisanjeSnackComponent', () => {
  let component: BrisanjeSnackComponent;
  let fixture: ComponentFixture<BrisanjeSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrisanjeSnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrisanjeSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
