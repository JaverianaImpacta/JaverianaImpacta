import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarraUsuarioEntidadService {

  private apiUrl = 'http://localhost:8080/entidad'; // Cambia esto a la URL de tu backend

  constructor(private http: HttpClient) { }

  buscarEntidadPorNombre(nombre: string): Observable<number> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<number>(`${this.apiUrl}/buscar`, { params });
  }
}
