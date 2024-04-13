import { Component } from '@angular/core';
import {LogoUniversidadComponent} from "../imagenes/logo-universidad/logo-universidad.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    LogoUniversidadComponent,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
