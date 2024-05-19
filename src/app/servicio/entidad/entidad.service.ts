import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidad } from '../../dominio/entidad';


@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private apiUrl = 'http://your-api-url.com/api/entidades'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener lista de entidades
  getEntidades(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(`${this.apiUrl}`);
  }

  // Obtener una entidad por ID
  getEntidadById(id: number): Observable<Entidad> {
    return this.http.get<Entidad>(`${this.apiUrl}/${id}`);
  }

  // Guardar una nueva entidad
  createEntidad(entidad: Entidad): Observable<Entidad> {
    return this.http.post<Entidad>(`${this.apiUrl}`, entidad);
  }

  // Modificar una entidad existente
  updateEntidad(entidad: Entidad): Observable<Entidad> {
    return this.http.put<Entidad>(`${this.apiUrl}/${entidad.id}`, entidad);
  }

  // Eliminar (cambiar estado a inactivo) una entidad
  deleteEntidad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener todas las entidades activas
  getEntidadesActivas(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(`${this.apiUrl}/activas`);
  }

  // Obtener todas las entidades inactivas
  getEntidadesInactivas(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(`${this.apiUrl}/inactivas`);
  }
}
