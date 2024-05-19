import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Metrica } from '../../dominio/metrica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetricaService {
  private apiUrl = 'https://tu-api.com/metricas'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener todas las métricas
  getMetricas(): Observable<Metrica[]> {
    return this.http.get<Metrica[]>(this.apiUrl);
  }

  // Obtener una métrica por su ID
  getMetricaById(id: number): Observable<Metrica> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Metrica>(url);
  }

  // Guardar una nueva métrica
  guardarMetrica(metrica: Metrica): Observable<Metrica> {
    return this.http.post<Metrica>(this.apiUrl, metrica);
  }

  // Actualizar una métrica existente
  actualizarMetrica(metrica: Metrica): Observable<Metrica> {
    const url = `${this.apiUrl}/${metrica.id}`;
    return this.http.put<Metrica>(url, metrica);
  }

  // Eliminar una métrica por su ID
  eliminarMetrica(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Obtener todas las métricas activas
  getMetricasActivas(): Observable<Metrica[]> {
    const url = `${this.apiUrl}?estado=activo`;
    return this.http.get<Metrica[]>(url);
  }

  // Obtener todas las métricas inactivas
  getMetricasInactivas(): Observable<Metrica[]> {
    const url = `${this.apiUrl}?estado=inactivo`;
    return this.http.get<Metrica[]>(url);
  }
}