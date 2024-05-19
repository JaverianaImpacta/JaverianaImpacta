import { Component } from '@angular/core';
import { Entidad } from '../../../dominio/entidad';

@Component({
  selector: 'app-lista-metricas',
  standalone: true,
  imports: [],
  templateUrl: './lista-metricas.component.html',
  styleUrl: './lista-metricas.component.css'
})
export class ListaMetricasComponent {
  personas: string[] = ['estudiantes', 'profesores', 'entidades'];  // Fechas quemadas
  

  selectedDate: string = this.personas[0];

  entidades: Entidad[] = []
}

