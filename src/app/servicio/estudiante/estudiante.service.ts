import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../../dominio/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://your-api-url.com/api/estudiantes'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener lista de estudiantes
  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}`);
  }

  // Obtener un estudiante por ID
  getEstudianteById(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}/${id}`);
  }

  // Guardar un nuevo estudiante
  createEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(`${this.apiUrl}`, estudiante);
  }

  // Modificar un estudiante existente
  updateEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${this.apiUrl}/${estudiante.id}`, estudiante);
  }

  // Eliminar (cambiar estado a inactivo) un estudiante
  deleteEstudiante(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener todos los estudiantes activos
  getEstudiantesActivos(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/activos`);
  }

  // Obtener todos los estudiantes inactivos
  getEstudiantesInactivos(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/inactivos`);
  }
}
