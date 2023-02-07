import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAmsHomeComponent } from './air-ams-home.component';

describe('AirAmsHomeComponent', () => {
  let component: AirAmsHomeComponent;
  let fixture: ComponentFixture<AirAmsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirAmsHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirAmsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
