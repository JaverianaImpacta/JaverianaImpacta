import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../../dominio/reporte';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private apiUrl = 'https://tu-api.com/reportes'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener todos los reportes
  getReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.apiUrl);
  }

  // Obtener un reporte por su ID
  getReporteById(id: number): Observable<Reporte> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Reporte>(url);
  }

  // Guardar un nuevo reporte
  guardarReporte(reporte: Reporte): Observable<Reporte> {
    return this.http.post<Reporte>(this.apiUrl, reporte);
  }

  // Actualizar un reporte existente
  actualizarReporte(reporte: Reporte): Observable<Reporte> {
    const url = `${this.apiUrl}/${reporte.id}`;
    return this.http.put<Reporte>(url, reporte);
  }

  // Eliminar un reporte por su ID
  eliminarReporte(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Obtener todos los reportes activos
  getReportesActivos(): Observable<Reporte[]> {
    const url = `${this.apiUrl}?estado=activo`;
    return this.http.get<Reporte[]>(url);
  }

  // Obtener todos los reportes inactivos
  getReportesInactivos(): Observable<Reporte[]> {
    const url = `${this.apiUrl}?estado=inactivo`;
    return this.http.get<Reporte[]>(url);
  }
}

