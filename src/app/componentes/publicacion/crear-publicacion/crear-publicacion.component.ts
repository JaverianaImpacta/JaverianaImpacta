import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicacionService } from '../../../servicios/publicacion/publicacion.service';
import { Publicacion } from '../../../dominio/publicacion';

@Component({
  selector: 'app-crear-publicacion',
  standalone: true,
  imports: [],
  templateUrl: './crear-publicacion.component.html',
  styleUrl: './crear-publicacion.component.css'
})
export class CrearPublicacionComponent implements OnInit {
  publicacionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private publicacionService: PublicacionService
  ) {
    this.publicacionForm = this.formBuilder.group({
      imagen: ['', Validators.required],
      titulo: ['', Validators.required],
      subtitulo: [''],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      url: [''],
      duracion: [0, Validators.required]
    });
  }

  ngOnInit(): void {}

  guardarPublicacion(): void {
    if (this.publicacionForm.valid) {
      const nuevaPublicacion: Publicacion = this.publicacionForm.value;
      this.publicacionService.crearPublicacion(nuevaPublicacion).subscribe(
        () => {
          alert('Publicación creada exitosamente');
          this.router.navigate(['/publicaciones']);
        },
        error => {
          console.error('Error al crear la publicación:', error);
        }
      );
    } else {
      alert('Por favor complete todos los campos requeridos.');
    }
  }

  volverAPublicaciones(): void {
    this.router.navigate(['/publicaciones']);
  }
}
