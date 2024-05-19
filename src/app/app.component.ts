import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/landing/header/header.component';
import { LandingpageComponent } from './componentes/landing/landingpage/landingpage.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './componentes/sidebar/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingpageComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'javeriana-impacta';
}
