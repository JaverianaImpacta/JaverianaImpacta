import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router, RouterLink } from "@angular/router";
import { Entidad } from "../../dominio/entidad";
import { EntidadService } from "../../servicios/entidad/entidad.service";

@Component({
  selector: 'app-entidad',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterLink
  ],
  templateUrl: './entidad.component.html',
  styleUrl: './entidad.component.css'
})
export class EntidadComponent {
  entidades : Entidad[];

  constructor(private router: Router, private servicioEntidad: EntidadService) {
    this.entidades = [];
    this.obtenerEntidades();
  }

  obtenerEntidades(){
    this.servicioEntidad.obtenerEntidades().subscribe(
      datos =>{
        this.entidades = datos;
      }
    )
  }

  detalles(id : number){
      this.router.navigate(["/entity-details", id]);
  }
}
