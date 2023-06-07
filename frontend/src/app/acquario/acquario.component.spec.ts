import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquarioComponent } from './acquario.component';

describe('AcquarioComponent', () => {
  let component: AcquarioComponent;
  let fixture: ComponentFixture<AcquarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcquarioComponent]
    });
    fixture = TestBed.createComponent(AcquarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
