import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUsuarioEntidadComponent } from './barra-usuario-entidad.component';

describe('BarraUsuarioEntidadComponent', () => {
  let component: BarraUsuarioEntidadComponent;
  let fixture: ComponentFixture<BarraUsuarioEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraUsuarioEntidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraUsuarioEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
