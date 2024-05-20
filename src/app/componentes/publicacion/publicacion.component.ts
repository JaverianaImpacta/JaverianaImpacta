import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {TopbarComponent} from "../topbar/topbar.component";
import { PublicacionService } from '../../servicios/publicacion/publicacion.service';
import { Router } from '@angular/router';
import { Publicacion } from '../../dominio/publicacion';

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
export class PublicacionComponent implements OnInit{
  protected visible : boolean;
  publicaciones: Publicacion[] = [];

  constructor(private servicioSidebar : SidebarService, private publicacionService: PublicacionService, private router: Router) {
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }

  ngOnInit(): void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones(): void {
    this.publicacionService.obtenerPublicaciones()
      .subscribe(
        (data: Publicacion[]) => {
          this.publicaciones = data;
        },
        error => {
          console.error('Error al obtener publicaciones', error);
        }
      );
  }

  editarPublicacion(id: number): void {
    this.router.navigate([`/editar-publicaciones`, id]);
  }

  crearPublicacion(): void {
    this.router.navigate(['/crear-publicaciones']);
  }
}
