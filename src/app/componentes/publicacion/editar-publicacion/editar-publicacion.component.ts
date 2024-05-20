import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionService } from '../../../servicios/publicacion/publicacion.service';
import { Publicacion } from '../../../dominio/publicacion';

@Component({
  selector: 'app-editar-publicacion',
  standalone: true,
  imports: [],
  templateUrl: './editar-publicacion.component.html',
  styleUrl: './editar-publicacion.component.css'
})
export class EditarPublicacionComponent implements OnInit {
  publicacionForm: FormGroup;
  currentPublicacion: Publicacion | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.publicacionService.obtenerPublicacionPorId(+id).subscribe(publicacion => {
        if (publicacion) {
          this.currentPublicacion = publicacion;
          this.inicializarFormulario(publicacion);
        } else {
          console.error('Publicación no encontrada');
        }
      });
    } else {
      console.error('ID no válido');
    }
  }

  inicializarFormulario(publicacion: Publicacion): void {
    this.publicacionForm.patchValue({
      imagen: publicacion.imagen,
      titulo: publicacion.titulo,
      subtitulo: publicacion.subtitulo,
      descripcion: publicacion.descripcion,
      categoria: publicacion.categoria,
      url: publicacion.url,
      duracion: publicacion.duracion
    });
  }

  guardarInformacion(): void {
    if (this.publicacionForm.valid) {
      const publicacionModificada: Publicacion = { ...this.currentPublicacion, ...this.publicacionForm.value };
      this.publicacionService.actualizarPublicacion(publicacionModificada.id, publicacionModificada).subscribe(
        () => {
          alert('Se editó correctamente');
          this.router.navigate(['/publicaciones']);
        },
        error => {
          console.error('Error actualizando la publicación:', error);
        }
      );
    }
  }

  volverAPublicaciones(): void {
    this.router.navigate(['/publicaciones']);
  }
}