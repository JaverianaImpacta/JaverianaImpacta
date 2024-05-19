import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUsuarioActividadComponent } from './barra-usuario-actividad.component';

describe('BarraUsuarioActividadComponent', () => {
  let component: BarraUsuarioActividadComponent;
  let fixture: ComponentFixture<BarraUsuarioActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraUsuarioActividadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraUsuarioActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
