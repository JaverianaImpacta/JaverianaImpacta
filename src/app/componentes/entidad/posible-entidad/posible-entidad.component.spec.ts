import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosibleEntidadComponent } from './posible-entidad.component';

describe('PosibleEntidadComponent', () => {
  let component: PosibleEntidadComponent;
  let fixture: ComponentFixture<PosibleEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosibleEntidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosibleEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
