import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calendario } from '../../dominio/actividades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  private baseUrl = 'http://localhost:8095/api/calendarios';

  constructor(private http: HttpClient) { }

  getCalendarios(): Observable<Calendario[]> {
    return this.http.get<Calendario[]>(`${this.baseUrl}/listar`);
  }

  getCalendariosByFecha(fecha: Date): Observable<Calendario[]> {
    return this.http.get<Calendario[]>(`${this.baseUrl}/obtener`, { params: { fecha: fecha.toISOString().split('T')[0] } });
  }

  createCalendario(calendario: Calendario): Observable<Calendario> {
    return this.http.post<Calendario>(`${this.baseUrl}/crear`, calendario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateCalendario(id: number, calendario: Calendario): Observable<Calendario> {
    return this.http.put<Calendario>(`${this.baseUrl}/actualizar`, calendario, {
      params: { id: id.toString() },
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteCalendario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/eliminar`, { params: { id: id.toString() } });
  }
}