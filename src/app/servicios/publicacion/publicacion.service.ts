import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Publicacion } from '../../dominio/publicacion';


@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private apiUrl = 'http://localhost:8118/api/publicaciones'; // Actualiza la URL con la de tu backend

  constructor(private http: HttpClient) { }

  // Manejo de errores
  private handleError(error: any): Observable<never> {
    console.error('Ocurrió un error', error);
    return throwError(error);
  }

  // Obtener todas las publicaciones
  obtenerPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${this.apiUrl}/listar`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtener publicaciones por categoría
  obtenerPublicacionesPorCategoria(categoria: string): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${this.apiUrl}/obtenerCategoria?categoria=${categoria}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtener una publicación por su ID
  obtenerPublicacionPorId(id: number): Observable<Publicacion> {
    return this.http.get<Publicacion>(`${this.apiUrl}/obtener?id=${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Crear una nueva publicación
  crearPublicacion(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.post<Publicacion>(`${this.apiUrl}/crear`, publicacion)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Actualizar una publicación existente
  actualizarPublicacion(id: number, publicacion: Publicacion): Observable<Publicacion> {
    return this.http.put<Publicacion>(`${this.apiUrl}/actualizar?id=${id}`, publicacion)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Eliminar una publicación por su ID
  eliminarPublicacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar?id=${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }
}
