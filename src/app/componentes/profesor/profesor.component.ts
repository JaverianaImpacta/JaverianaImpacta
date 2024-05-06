import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarService } from "../../servicios/sidebar/sidebar.service";
import { NgClass } from "@angular/common";
import {Profesor} from "../../dominio/profesor";
import {Persona} from "../../dominio/persona";
import {ProfesorService} from "../../servicios/profesor/profesor.service";
import {PersonaService} from "../../servicios/persona/persona.service";

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass
  ],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent{
  protected profesores : Profesor[];
  protected personas : Persona[];
  protected visible: boolean;

  constructor(private servicioSidebar: SidebarService, private servicioProfesor : ProfesorService, private servicioPersona : PersonaService) {
    this.profesores = [];
    this.personas = [];
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
    this.obtenerProfesores();
    this.obtenerPersonas();
  }

  protected obtenerNombres(cedula : number): string{
    let auxiliar = "No encontrado";
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
        auxiliar = persona.primer_nombre+" "+persona.segundo_nombre;
      }
    });
    return auxiliar;
  }

  protected obtenerApellidos(cedula : number): string{
    let auxiliar = "No encontrado";
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
        auxiliar = persona.primer_apellido+" "+persona.segundo_apellido;
      }
    });
    return auxiliar;
  }

  protected obtenerTelefono(cedula : number): number{
    let auxiliar = 0;
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
        auxiliar = persona.numero_celular;
      }
    });
    return auxiliar;
  }

  private obtenerPersonas(){
    this.servicioPersona.obtenerPersonas().subscribe(
      datos=>{
        this.personas = datos;
      }
    );
  }
  private obtenerProfesores(){
    this.servicioProfesor.obtenerProfesores().subscribe(
      datos=>{
        this.profesores = datos;
      }
    );
  }

}
