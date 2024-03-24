import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, PersonaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
}
