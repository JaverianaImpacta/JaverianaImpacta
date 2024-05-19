import { TestBed } from '@angular/core/testing';

import { BarraUsuarioEntidadService } from './barra-usuario-entidad.service';

describe('BarraUsuarioEntidadService', () => {
  let service: BarraUsuarioEntidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarraUsuarioEntidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
