import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUsuarioProyectoComponent } from './barra-usuario-proyecto.component';

describe('BarraUsuarioProyectoComponent', () => {
  let component: BarraUsuarioProyectoComponent;
  let fixture: ComponentFixture<BarraUsuarioProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraUsuarioProyectoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraUsuarioProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
