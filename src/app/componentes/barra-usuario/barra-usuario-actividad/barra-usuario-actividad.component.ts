import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-usuario-actividad',
  standalone: true,
  imports: [],
  templateUrl: './barra-usuario-actividad.component.html',
  styleUrl: './barra-usuario-actividad.component.css'
})
export class BarraUsuarioActividadComponent {
  today: string;
  buscarE: string | undefined ;

  constructor( ) {
    // Obteniendo la fecha actual
    const date = new Date();

    // Obteniendo el nombre del mes
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const monthName = monthNames[date.getMonth()];

    // Obteniendo el día del mes, año, hora y minutos
    const day = date.getDate();
    const year = date.getFullYear();
    let hour = date.getHours();
    const minutes = date.getMinutes();

    // Formateando la hora a formato de 12 horas y determinando si es AM o PM
    const amPm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12 || 12; // Convirtiendo la hora de formato de 24 horas a 12 horas

    // Construyendo la cadena de fecha con el formato deseado
    this.today = `${monthName}, ${this.addLeadingZero(day)}, ${year}, ${hour}:${this.addLeadingZero(minutes)}${amPm}`;
  }

 /* buscarEntidad(): void {
    if (this.buscarE) {
      this.entidadService.buscarEntidadPorNombre(this.buscarE).subscribe(
        (result) => {
          // Maneja los resultados de la búsqueda aquí
          console.log(result); // o asigna los resultados a una variable para mostrar en la vista
        },
        (error) => {
          console.error('Error al buscar entidad:', error);
        }
      );
    } else {
      console.warn('Por favor, introduce un término de búsqueda');
    }
  }*/


  // Función auxiliar para agregar un cero delante de los números menores que 10
  addLeadingZero(number: number): string {
    return number < 10 ? '0' + number : '' + number;
  }
  showNotification() {
    alert('Tienes nuevas notificaciones');
  }
}
