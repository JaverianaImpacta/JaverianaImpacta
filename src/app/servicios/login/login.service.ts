import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, interval, of, startWith, switchMap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient, 
    private cookies : CookieService) { }

    estaLogueado(): Observable<boolean> {
      return interval(5000).pipe( // Emitir un evento cada 5 segundos
        startWith(0), // Emitir un evento al inicio para iniciar el observable
        switchMap(() => {
          if (this.getToken()) {
            return of(true);
          } else {
            return of(false);
          }
        })
      );
    }
  
  login(correo : string, contrasena : string) : Observable<any>{
    const encabezados = new HttpHeaders()
    const cuerpo = JSON.stringify({})
    const parametros = new HttpParams()
      .set('correo', correo)
      .set('contrasena', contrasena)

    return this.http.post("http://localhost:8085/api/autenticacion/login", cuerpo, {params : parametros});
  }

  setToken(token : string){
    this.cookies.set("token", token);
  }

  getToken(){
    return this.cookies.get("token");
  }
}
