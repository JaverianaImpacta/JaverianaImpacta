import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {TopbarComponent} from "../topbar/topbar.component";
import {Vinculacion} from "../../dominio/vinculacion";
import {VinculacionService} from "../../servicios/vinculacion/vinculacion.service";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";

@Component({
  selector: 'app-vinculacion',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    NgClass
  ],
  templateUrl: './vinculacion.component.html',
  styleUrl: './vinculacion.component.css'
})
export class VinculacionComponent {
  protected vinculaciones : Vinculacion[];
  protected visible : boolean;

  constructor(private servicioSidebar : SidebarService,private servicioVinculaciones :VinculacionService) {
      this.vinculaciones = [];
      this.obtenerVinculaciones();
      this.visible = servicioSidebar.obtenerVisible();
      this.servicioSidebar.sidebarVisible.subscribe(dato => {
        this.visible = dato;
      });
  }

  obtenerVinculaciones ()  {
    this.servicioVinculaciones.obtenerVinculaciones().subscribe(
      datos => this.vinculaciones = datos
    );
  }

  traduccion(parametro : boolean):string{
    if(parametro){
      return "Si";
    }else{
      return "No";
    }
  }
}
