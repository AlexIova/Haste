import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstaComponent } from './asta.component';

describe('AstaComponent', () => {
  let component: AstaComponent;
  let fixture: ComponentFixture<AstaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstaComponent]
    });
    fixture = TestBed.createComponent(AstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
