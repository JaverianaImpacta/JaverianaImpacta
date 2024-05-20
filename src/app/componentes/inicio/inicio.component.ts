import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PersonaComponent } from '../persona/persona.component';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, PersonaComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
}
