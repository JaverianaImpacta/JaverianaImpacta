import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUsuarioInformeComponent } from './barra-usuario-informe.component';

describe('BarraUsuarioInformeComponent', () => {
  let component: BarraUsuarioInformeComponent;
  let fixture: ComponentFixture<BarraUsuarioInformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraUsuarioInformeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraUsuarioInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
