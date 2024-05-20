import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {NgClass} from "@angular/common";
import {Estudiante} from "../../dominio/estudiante";
import {EstudianteService} from "../../servicios/estudiante/estudiante.service";
import { Persona } from "../../dominio/persona";
import {PersonaService} from "../../servicios/persona/persona.service";
import {TopbarComponent} from "../topbar/topbar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass,
    TopbarComponent
  ],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent {
  protected estudiantes: Estudiante[];
  protected personas : Persona[];
  protected profesor : boolean;
  protected admin : boolean;
  protected visible : boolean;

  constructor(private router : Router,private servicioPersona : PersonaService, private servicioEstudiante : EstudianteService, private servicioSidebar : SidebarService) {
    this.admin = true;
    this.profesor = true;
    this.estudiantes = [];
    this.personas = [];
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
    this.obtenerEstudiantes();
    this.obtenerPersonas();
  }

  vincular(cedula : number){
    this.router.navigate(["/vincularEstudiante", cedula]);
  }

  protected obtenerApellidos(cedula : number): string{
    let auxiliar = "No encontrado";
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
        auxiliar = persona.primerApellido+" "+persona.segundoApellido;
      }
    });
    return auxiliar;
  }

  protected obtenerNombres(cedula : number): string{
    let auxiliar = "No encontrado";
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
          auxiliar = persona.primerNombre+" "+persona.segundoNombre;
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

  protected traduccion(parametro: boolean) {
    if(parametro){
      return "Si";
    }else{
      return "No";
    }
  }
}
