import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArticoliComponent } from './lista-articoli.component';

describe('ListaArticoliComponent', () => {
  let component: ListaArticoliComponent;
  let fixture: ComponentFixture<ListaArticoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaArticoliComponent]
    });
    fixture = TestBed.createComponent(ListaArticoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
