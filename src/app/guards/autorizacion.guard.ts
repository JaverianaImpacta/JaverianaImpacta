import { CanActivateFn } from '@angular/router';
import { LoginService } from '../servicios/login/login.service';
import { inject } from '@angular/core';

export const autorizacionGuard: CanActivateFn = (route, state) => {
  let logueado : boolean;
  logueado = false;
  const servicioLogin = inject(LoginService)
  servicioLogin.estaLogueado().subscribe((estado) => {
    logueado = estado;
  });;
  return logueado;
};