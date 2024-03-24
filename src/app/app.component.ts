import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, LoginComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prosofi';
}
