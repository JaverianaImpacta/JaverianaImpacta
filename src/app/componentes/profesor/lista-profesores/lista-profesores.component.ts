import { Component } from '@angular/core';
import { ListaEntidadComponent } from '../../entidad/lista-entidad/lista-entidad.component';
import { Entidad } from '../../../dominio/entidad';

@Component({
  selector: 'app-lista-profesores',
  standalone: true,
  imports: [],
  templateUrl: './lista-profesores.component.html',
  styleUrl: './lista-profesores.component.css'
})
export class ListaProfesoresComponent {
  carreras: string[] = ['Ingenieria de sistemas', 'Psicologia', 'Derecho'];  // Fechas quemadas
  statuses: string[] = ['ACTIVO', 'INACTIVO'];  // Estados quemados
  dates: string[] = ['2024-10', '2024-11', '2024-12'];  // Fechas quemadas
  roles: string[] = ['equipo directivo', 'Profesor planta'];  // Estados quemados

  selectedDate: string = this.dates[0];
  selectedStatus: string = this.statuses[0];
  entidades: Entidad[] = []
}
