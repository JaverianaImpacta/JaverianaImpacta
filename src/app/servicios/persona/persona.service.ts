import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url : string;
  constructor(private http: HttpClient) {
    this.url= "http://localhost:8088/api/personas"
  }

  obtenerPersonas(){
    return this.http.get<any>(this.url+"/listar");
  }

  obtenerPersonaPorCedula(cedula: number) {
    const parametros = new HttpParams().set("cedula",cedula);
    return this.http.get<any>(this.url+"/obtenerCedula", {params :parametros});
  }
}
