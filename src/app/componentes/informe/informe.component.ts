import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";

@Component({
  selector: 'app-informe',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass
  ],
  templateUrl: './informe.component.html',
  styleUrl: './informe.component.css'
})
export class InformeComponent {
  protected visible : boolean;

  constructor(private servicioSidebar : SidebarService) {
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }
}
