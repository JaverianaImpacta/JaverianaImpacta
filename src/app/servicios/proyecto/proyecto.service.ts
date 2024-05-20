import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

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

  obtenerProyectosActivos(activo : boolean){
    const parametros = new HttpParams().set("activo",activo);
    return this.http.get<any>(this.url+"/obtenerActivo", {params : parametros});
  }
}
