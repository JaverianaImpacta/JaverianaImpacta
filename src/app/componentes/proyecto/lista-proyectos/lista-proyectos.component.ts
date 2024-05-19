import { Component } from '@angular/core';
import { Entidad } from '../../../dominio/entidad';

@Component({
  selector: 'app-lista-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './lista-proyectos.component.html',
  styleUrl: './lista-proyectos.component.css'
})
export class ListaProyectosComponent {
  carreras: string[] = ['Ingenieria de sistemas', 'Psicologia', 'Derecho'];  // Fechas quemadas
  statuses: string[] = ['ACTIVO', 'INACTIVO'];  // Estados quemados
  dates: string[] = ['2024-10', '2024-11', '2024-12'];  // Fechas quemadas

  selectedDate: string = this.dates[0];
  selectedStatus: string = this.statuses[0];
  entidades: Entidad[] = []
}
