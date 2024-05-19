import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUsuarioMetricasComponent } from './barra-usuario-metricas.component';

describe('BarraUsuarioMetricasComponent', () => {
  let component: BarraUsuarioMetricasComponent;
  let fixture: ComponentFixture<BarraUsuarioMetricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraUsuarioMetricasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraUsuarioMetricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
