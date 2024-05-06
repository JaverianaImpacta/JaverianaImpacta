import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {NgClass} from "@angular/common";
import {Estudiante} from "../../dominio/estudiante";
import {EstudianteService} from "../../servicios/estudiante/estudiante.service";
import { Persona } from "../../dominio/persona";
import {PersonaService} from "../../servicios/persona/persona.service";

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass
  ],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent {
  protected estudiantes: Estudiante[];
  protected personas : Persona[];
  protected visible : boolean;

  constructor(private servicioPersona : PersonaService, private servicioEstudiante : EstudianteService, private servicioSidebar : SidebarService) {
    this.estudiantes = [];
    this.personas = [];
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
    this.obtenerEstudiantes();
    this.obtenerPersonas();
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

  protected obtenerNombres(cedula : number): string{
    let auxiliar = "No encontrado";
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
          auxiliar = persona.primer_nombre+" "+persona.segundo_nombre;
      }
    });
    return auxiliar;
  }

  private obtenerEstudiantes(){
    this.servicioEstudiante.obtenerEstudiantes().subscribe(
      datos =>{
        this.estudiantes = datos;
      }
    )
  }

  private obtenerPersonas(){
    this.servicioPersona.obtenerPersonas().subscribe(
      dato => {
        this.personas = dato;
      }
    )
  }

}
