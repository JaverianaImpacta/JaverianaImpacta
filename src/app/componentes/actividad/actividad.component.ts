import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {TopbarComponent} from "../topbar/topbar.component";
import { Calendario } from '../../dominio/actividades';
import { ActividadesService } from '../../servicios/actividades/actividades.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass,
    TopbarComponent
  ],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.css'
})
export class ActividadComponent implements  OnInit {
  actividades: Calendario[] = [];

  constructor(
    private actividadesService: ActividadesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerActividades();
  }

  obtenerActividades(): void {
    this.actividadesService.getCalendarios().subscribe(
      data => this.actividades = data,
      error => console.error('Error al obtener actividades', error)
    );
  }

  editarActividad(id: number): void {
    this.router.navigate([`/editar-actividades`, id]);
  }

  borrarActividad(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actividadesService.deleteCalendario(id).subscribe(
          () => {
            Swal.fire('¡Borrado!', 'La actividad ha sido borrada.', 'success');
            this.obtenerActividades(); // Actualizar la lista de actividades
          },
          error => console.error('Error al borrar actividad', error)
        );
      }
    });
  }

  crearActividad(): void {
    this.router.navigate(['/crear-actividades']);
  }
}
