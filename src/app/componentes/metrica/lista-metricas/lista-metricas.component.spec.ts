import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMetricasComponent } from './lista-metricas.component';

describe('ListaMetricasComponent', () => {
  let component: ListaMetricasComponent;
  let fixture: ComponentFixture<ListaMetricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMetricasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaMetricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
