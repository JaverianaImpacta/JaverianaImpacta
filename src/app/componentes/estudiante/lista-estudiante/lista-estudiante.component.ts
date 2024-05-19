import { Component } from '@angular/core';
import { Entidad } from '../../../dominio/entidad';

@Component({
  selector: 'app-lista-estudiante',
  standalone: true,
  imports: [],
  templateUrl: './lista-estudiante.component.html',
  styleUrl: './lista-estudiante.component.css'
})
export class ListaEstudianteComponent {
  carreras: string[] = ['Ingenieria de sistemas', 'Psicologia', 'Derecho'];  // Fechas quemadas
  statuses: string[] = ['ACTIVO', 'INACTIVO'];  // Estados quemados
  dates: string[] = ['2024-10', '2024-11', '2024-12'];  // Fechas quemadas
  roles: string[] = ['equipo directivo', 'Profesor planta'];  // Estados quemados

  selectedDate: string = this.dates[0];
  selectedStatus: string = this.statuses[0];
  
  entidades: Entidad[] = []
}
