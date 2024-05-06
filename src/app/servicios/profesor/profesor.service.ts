import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private url : string;
  constructor(private http: HttpClient) {
    this.url= "http://localhost:8089/api/profesores"
  }

  obtenerProfesores(){
    return this.http.get<any>(this.url+"/listar");
  }
}
