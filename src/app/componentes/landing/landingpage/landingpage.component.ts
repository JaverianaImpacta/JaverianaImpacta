import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-landingpage',
    standalone: true,
    templateUrl: './landingpage.component.html',
    styleUrl: './landingpage.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class LandingpageComponent {


}
