import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActividadesService } from '../../servicios/actividades/actividades.service';
import { Calendario } from '../../dominio/actividades';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-actividad',
  standalone: true,
  imports: [],
  templateUrl: './crear-actividad.component.html',
  styleUrl: './crear-actividad.component.css'
})
export class CrearActividadComponent implements OnInit {
  actividadForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actividadesService: ActividadesService
  ) { 
    this.actividadForm = this.fb.group({
      id: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      inicio: ['', Validators.required],
      fin: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.actividadForm.valid) {
      const actividad: Calendario = this.actividadForm.value;

      Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas guardar la nueva actividad?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, guardar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.actividadesService.createCalendario(actividad).subscribe(
            () => {
              Swal.fire('¡Creado!', 'La nueva actividad ha sido creada.', 'success');
              this.router.navigate(['/actividades']);
            },
            error => console.error('Error al crear la actividad', error)
          );
        }
      });
    } else {
      Swal.fire('Error', 'Por favor, completa todos los campos requeridos.', 'error');
    }
  }

  onCancel(): void {
    this.router.navigate(['/actividades']);
  }
}