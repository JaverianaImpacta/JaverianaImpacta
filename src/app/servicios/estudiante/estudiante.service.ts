import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

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

  obtenerEstudiantesPorSMP(arl : boolean){
    const parametros = new HttpParams().set("arl",arl);
    return this.http.get<any>(this.url+"/obtenerARL", {params: parametros});
  }

  obtenerEstudiantesPorArl(sentidoMiPractica : boolean){
    const parametros = new HttpParams().set("sentidoMiPractica",sentidoMiPractica);
    return this.http.get<any>(this.url+"/obtenerSentidoMiPractica", {params: parametros});
  }
}
