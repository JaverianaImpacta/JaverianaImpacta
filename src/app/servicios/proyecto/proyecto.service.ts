import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url : string;
  constructor(private http: HttpClient) {
    this.url= "http://localhost:8082/api/proyectos"
  }

  obtenerProyectos(){
    return this.http.get<any>(this.url+"/listar");
  }
}
