import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {TopbarComponent} from "../topbar/topbar.component";

@Component({
  selector: 'app-publicacion',
  standalone: true,
    imports: [
        SidebarComponent,
        NgClass,
        TopbarComponent
    ],
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css'
})
export class PublicacionComponent {
  protected visible : boolean;

  constructor(private servicioSidebar : SidebarService) {
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }
}