import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Persona} from "../../dominio/persona";

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

  crearPersona(persona : Persona){
    const cuerpo = JSON.stringify({
      id : 99999999,
      tipoDocumento : persona.tipoDocumento,
      cedula : persona.cedula,
      primerNombre : persona.primerNombre,
      segundoNombre : persona.segundoNombre,
      primerApellido : persona.primerApellido,
      segundoApellido : persona.segundoApellido,
      correoElectronico : persona.correoElectronico,
      fechaNacimiento : persona.fechaNacimiento,
      sexo : persona.sexo,
      eps : persona.eps,
      direccion : persona.direccion,
      numeroCelular : persona.numeroCelular
    });

    const encabezados = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url+"/crear", cuerpo, {headers : encabezados});
  }

  obtenerPersonaPorCedula(cedula: number) {
    const parametros = new HttpParams().set("cedula",cedula);
    return this.http.get<any>(this.url+"/obtenerCedula", {params :parametros});
  }
}
