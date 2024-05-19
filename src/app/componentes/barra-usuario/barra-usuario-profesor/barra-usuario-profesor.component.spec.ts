import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUsuarioProfesorComponent } from './barra-usuario-profesor.component';

describe('BarraUsuarioProfesorComponent', () => {
  let component: BarraUsuarioProfesorComponent;
  let fixture: ComponentFixture<BarraUsuarioProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraUsuarioProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraUsuarioProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
