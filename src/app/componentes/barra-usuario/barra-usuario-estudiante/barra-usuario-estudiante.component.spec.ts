import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUsuarioEstudianteComponent } from './barra-usuario-estudiante.component';

describe('BarraUsuarioEstudianteComponent', () => {
  let component: BarraUsuarioEstudianteComponent;
  let fixture: ComponentFixture<BarraUsuarioEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraUsuarioEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraUsuarioEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
