import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../../dominio/profesor';


@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private apiUrl = 'https://tu-api.com/profesores'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener todos los profesores
  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.apiUrl);
  }

  // Obtener un profesor por su ID
  getProfesorById(id: number): Observable<Profesor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Profesor>(url);
  }

  // Guardar un nuevo profesor
  guardarProfesor(profesor: Profesor): Observable<Profesor> {
    return this.http.post<Profesor>(this.apiUrl, profesor);
  }

  // Actualizar un profesor existente
  actualizarProfesor(profesor: Profesor): Observable<Profesor> {
    const url = `${this.apiUrl}/${profesor.id}`;
    return this.http.put<Profesor>(url, profesor);
  }

  // Eliminar un profesor por su ID
  eliminarProfesor(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Obtener todos los profesores activos
  getProfesoresActivos(): Observable<Profesor[]> {
    const url = `${this.apiUrl}?estado=activo`;
    return this.http.get<Profesor[]>(url);
  }

  // Obtener todos los profesores inactivos
  getProfesoresInactivos(): Observable<Profesor[]> {
    const url = `${this.apiUrl}?estado=inactivo`;
    return this.http.get<Profesor[]>(url);
  }
}
