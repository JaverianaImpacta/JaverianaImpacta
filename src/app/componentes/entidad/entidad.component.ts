import {Component} from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router, RouterLink } from "@angular/router";
import { Entidad } from "../../dominio/entidad";
import { EntidadService } from "../../servicios/entidad/entidad.service";
import { SidebarService } from "../../servicios/sidebar/sidebar.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-entidad',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterLink,
    NgClass
  ],
  templateUrl: './entidad.component.html',
  styleUrl: './entidad.component.css'
})
export class EntidadComponent{
  entidades : Entidad[];
  protected visible: boolean;

  constructor(private router: Router, private servicioEntidad: EntidadService, private servicioSidebar : SidebarService) {
    this.entidades = [];
    this.obtenerEntidades();
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }

  obtenerEntidades(){
    this.servicioEntidad.obtenerEntidades().subscribe(
      datos =>{
        this.entidades = datos;
      }
    )
  }

  detalles(id : number){
      this.router.navigate(["/detalles-entidad", id]);
  }
}
