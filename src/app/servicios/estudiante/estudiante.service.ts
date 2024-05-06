import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url : string;
  constructor(private http: HttpClient) {
    this.url= "http://localhost:8081/api/estudiantes"
  }

  obtenerEstudiantes(){
    return this.http.get<any>(this.url+"/listar");
  }
}
