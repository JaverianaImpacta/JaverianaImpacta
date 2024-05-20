import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RecuperacionComponent } from './componentes/recuperacion/recuperacion.component';
import { autorizacionGuard } from './guards/autorizacion.guard';
import { EntidadComponent } from "./componentes/entidad/entidad.component";
import { DetallesEntidadComponent } from "./componentes/detalles-entidad/detalles-entidad.component";
import { ProfesorComponent } from "./componentes/profesor/profesor.component";
import { EstudianteComponent } from "./componentes/estudiante/estudiante.component";
import { ActividadComponent } from "./componentes/actividad/actividad.component";
import { InformeComponent } from "./componentes/informe/informe.component";
import { MetricaComponent } from "./componentes/metrica/metrica.component";
import { PublicacionComponent } from "./componentes/publicacion/publicacion.component";
import { ProyectoComponent } from "./componentes/proyecto/proyecto.component";
import {AdministracionComponent} from "./componentes/administracion/administracion.component";
import {RegistroEntidadComponent} from "./componentes/registro-entidad/registro-entidad.component";
import {RegistroInterlocutorComponent} from "./componentes/registro-interlocutor/registro-interlocutor.component";
import {EntidadPostuladaComponent} from "./componentes/entidad-postulada/entidad-postulada.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'resumen', component: ResumenComponent},
  {path:'registro', component: RegistroComponent},
  {path:'registrarEntidad', component: RegistroEntidadComponent},
  {path:'registrarInterlocutor', component: RegistroInterlocutorComponent},
  {path:'entidadesPostuladas', component: EntidadPostuladaComponent},
  {path:'', component: InicioComponent},
  {path:'administracion', component: AdministracionComponent},
  {path:'recuperacion', component: RecuperacionComponent},
  {path:'detallesEntidad/:id', component: DetallesEntidadComponent},
  {path:'profesores', component: ProfesorComponent},
  {path:'entidades', component: EntidadComponent},
  {path:'estudiantes', component: EstudianteComponent},
  {path:'proyectos', component: ProyectoComponent},
  {path:'actividades', component: ActividadComponent},
  {path:'informes', component: InformeComponent},
  {path:'metricas', component: MetricaComponent},
  {path:'publicaciones', component: PublicacionComponent},
  {path:'**', component: ResumenComponent},
  {path:'**', component: InicioComponent, canMatch : [!autorizacionGuard]}];
