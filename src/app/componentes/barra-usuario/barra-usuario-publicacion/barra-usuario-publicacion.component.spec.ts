import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUsuarioPublicacionComponent } from './barra-usuario-publicacion.component';

describe('BarraUsuarioPublicacionComponent', () => {
  let component: BarraUsuarioPublicacionComponent;
  let fixture: ComponentFixture<BarraUsuarioPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraUsuarioPublicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraUsuarioPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
