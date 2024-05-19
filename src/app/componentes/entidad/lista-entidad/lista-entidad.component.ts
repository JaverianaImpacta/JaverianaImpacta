import { Component } from '@angular/core';
import { BarraUsuarioEntidadComponent } from "../../barra-usuario/barra-usuario-entidad/barra-usuario-entidad.component";
import { SidebarComponent } from '../../sidebar/sidebar/sidebar.component';
import { Entidad } from '../../../dominio/entidad';

@Component({
  selector: 'app-lista-entidad',
  standalone: true,
  templateUrl: './lista-entidad.component.html',
  styleUrls: ['./lista-entidad.component.css'],
  imports: [BarraUsuarioEntidadComponent, SidebarComponent] // Importa los componentes directamente
})
export class ListaEntidadComponent {
  dates: string[] = ['2024-10', '2024-11', '2024-12'];  // Fechas quemadas
  statuses: string[] = ['ACTIVO', 'INACTIVO'];  // Estados quemados

  selectedDate: string = this.dates[0];
  selectedStatus: string = this.statuses[0];
  entidades: Entidad[] = []
}
