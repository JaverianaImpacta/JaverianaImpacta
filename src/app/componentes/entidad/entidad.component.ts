import {Component} from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router, RouterLink } from "@angular/router";
import { Entidad } from "../../dominio/entidad";
import { EntidadService } from "../../servicios/entidad/entidad.service";
import { SidebarService } from "../../servicios/sidebar/sidebar.service";
import {NgClass} from "@angular/common";
import {TopbarComponent} from "../topbar/topbar.component";
import {ActividadEconomicaService} from "../../servicios/actividad-economica/actividad-economica.service";
import {ActividadEconomica} from "../../dominio/actividad-economica";

@Component({
  selector: 'app-entidad',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterLink,
    NgClass,
    TopbarComponent
  ],
  templateUrl: './entidad.component.html',
  styleUrl: './entidad.component.css'
})
export class EntidadComponent{
  protected entidades : Entidad[];
  protected actividades : ActividadEconomica[];
  protected admin : boolean = true;
  protected visible : boolean;

  constructor(private router: Router, private servicioEntidad: EntidadService, private servicioSidebar : SidebarService, private servicioActividadEconomica : ActividadEconomicaService) {
    this.entidades = [];
    this.actividades = [];
    this.obtenerEntidades();
    this.obtenerActividadesEconomicas();
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }

  obtenerEntidades(){
    this.servicioEntidad.obtenerEntidadesPorAprobacion(true).subscribe(
      datos =>{
        this.entidades = datos;
      }
    )
  }

  obtenerActividad(codigo : string){
    let auxiliar = "No encontrado"
    this.actividades.forEach(actividad=>{
      if(actividad.codigo == codigo){
        auxiliar = actividad.descripcion;
      }
    });
    return auxiliar;
  }

  obtenerActividadesEconomicas(){
    this.servicioActividadEconomica.obtenerActividades().subscribe(
      datos =>{
        this.actividades = datos;
      }
    )
  }

  detalles(id : number){
      this.router.navigate(["/detallesEntidad", id]);
  }
}
