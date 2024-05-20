import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  private url : string;

  constructor(private http: HttpClient) {
    this.url= "http://localhost:8120/api/semestres"
  }

  obtenerSemestres(){
    return this.http.get<any>(this.url+"/listar");
  }
}
