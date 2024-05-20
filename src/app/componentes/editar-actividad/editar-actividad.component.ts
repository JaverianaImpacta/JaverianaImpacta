import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadesService } from '../../servicios/actividades/actividades.service';
import { Calendario } from '../../dominio/actividades';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-actividad',
  standalone: true,
  imports: [],
  templateUrl: './editar-actividad.component.html',
  styleUrl: './editar-actividad.component.css'
})
export class EditarActividadComponent implements OnInit {
  actividadForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private actividadesService: ActividadesService
  ) { 
    this.actividadForm = this.fb.group({
      id: [{ value: '', disabled: true }, Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      inicio: ['', Validators.required],
      fin: ['', Validators.required]
    });

    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.actividadesService.getCalendariosByFecha(new Date()).subscribe(
      actividades => {
        const actividad = actividades.find(act => act.id === this.id);
        if (actividad) {
          this.actividadForm.patchValue(actividad);
        }
      },
      error => console.error('Error al obtener la actividad', error)
    );
  }

  onSubmit(): void {
    if (this.actividadForm.valid) {
      const actividad: Calendario = {
        id: this.id,
        ...this.actividadForm.value
      };

      Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas guardar los cambios?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, guardar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.actividadesService.updateCalendario(this.id, actividad).subscribe(
            () => {
              Swal.fire('¡Actualizado!', 'La actividad ha sido actualizada.', 'success');
              this.router.navigate(['/actividades']);
            },
            error => console.error('Error al actualizar la actividad', error)
          );
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/actividades']);
  }
}