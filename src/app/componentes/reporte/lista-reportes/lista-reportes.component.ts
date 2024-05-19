import { Component } from '@angular/core';
import { Entidad } from '../../../dominio/entidad';

@Component({
  selector: 'app-lista-reportes',
  standalone: true,
  imports: [],
  templateUrl: './lista-reportes.component.html',
  styleUrl: './lista-reportes.component.css'
})
export class ListaReportesComponent {
  carreras: string[] = ['Ingenieria de sistemas', 'Psicologia', 'Derecho'];  // Fechas quemadas
  

  selectedDate: string = this.carreras[0];

  entidades: Entidad[] = []
    
}

