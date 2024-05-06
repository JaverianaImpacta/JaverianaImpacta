import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private url : string;

  constructor(private http : HttpClient) {
    this.url ="http://localhost:8086/api/entidades";
  }

  obtenerEntidades(){
    return this.http.get<any>(this.url+"/listar");
  }

  obtenerEntidadPorId(id: number) {
    const parametros = new HttpParams().set("id",id);
    return this.http.get<any>(this.url+"/obtener", {params :parametros});
  }
}
