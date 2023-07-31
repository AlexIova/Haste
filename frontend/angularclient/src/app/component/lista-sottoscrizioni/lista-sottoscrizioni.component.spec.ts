import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSottoscrizioniComponent } from './lista-sottoscrizioni.component';

describe('ListaSottoscrizioniComponent', () => {
  let component: ListaSottoscrizioniComponent;
  let fixture: ComponentFixture<ListaSottoscrizioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSottoscrizioniComponent]
    });
    fixture = TestBed.createComponent(ListaSottoscrizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
