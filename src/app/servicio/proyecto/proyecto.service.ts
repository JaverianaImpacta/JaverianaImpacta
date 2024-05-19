import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../../dominio/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = 'https://tu-api.com/proyectos'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener todos los proyectos
  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiUrl);
  }

  // Obtener un proyecto por su ID
  getProyectoById(id: number): Observable<Proyecto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Proyecto>(url);
  }

  // Guardar un nuevo proyecto
  guardarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.apiUrl, proyecto);
  }

  // Actualizar un proyecto existente
  actualizarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    const url = `${this.apiUrl}/${proyecto.id}`;
    return this.http.put<Proyecto>(url, proyecto);
  }

  // Eliminar un proyecto por su ID
  eliminarProyecto(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Obtener todos los proyectos activos
  getProyectosActivos(): Observable<Proyecto[]> {
    const url = `${this.apiUrl}?estado=activo`;
    return this.http.get<Proyecto[]>(url);
  }

  // Obtener todos los proyectos inactivos
  getProyectosInactivos(): Observable<Proyecto[]> {
    const url = `${this.apiUrl}?estado=inactivo`;
    return this.http.get<Proyecto[]>(url);
  }
}
