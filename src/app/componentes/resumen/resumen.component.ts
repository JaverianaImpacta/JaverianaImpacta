import {Component, Input} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {
  @Input() nombre = '';
}
