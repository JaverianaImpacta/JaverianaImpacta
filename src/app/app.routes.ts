import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RecuperacionComponent } from './componentes/recuperacion/recuperacion.component';
import { autorizacionGuard } from './guards/autorizacion.guard';

export const routes: Routes = [{path: 'login', component: LoginComponent}, 
{path:'summary', component: ResumenComponent, canActivate : [autorizacionGuard]}, 
{path:'register', component: RegistroComponent},
{path:'', component: InicioComponent},
{path:'recovery', component:RecuperacionComponent}];
