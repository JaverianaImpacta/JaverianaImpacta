import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";

@Component({
  selector: 'app-metrica',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass
  ],
  templateUrl: './metrica.component.html',
  styleUrl: './metrica.component.css'
})
export class MetricaComponent {
  protected visible : boolean;

  constructor(private servicioSidebar : SidebarService) {
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }
}
