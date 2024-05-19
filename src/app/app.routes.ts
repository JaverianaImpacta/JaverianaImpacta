import { Routes } from '@angular/router';
import { LandingpageComponent } from './componentes/landing/landingpage/landingpage.component';
import { NosotrosComponent } from './componentes/landing/nosotros/nosotros.component';
import { SidebarComponent } from './componentes/sidebar/sidebar/sidebar.component';
import { BarraUsuarioEntidadComponent } from './componentes/barra-usuario/barra-usuario-entidad/barra-usuario-entidad.component';
import { PosibleEntidadComponent } from './componentes/entidad/posible-entidad/posible-entidad.component';
import { ListaEntidadComponent } from './componentes/entidad/lista-entidad/lista-entidad.component';
import { ListaProfesoresComponent } from './componentes/profesor/lista-profesores/lista-profesores.component';
import { ListaEstudianteComponent } from './componentes/estudiante/lista-estudiante/lista-estudiante.component';
import { ListaProyectosComponent } from './componentes/proyecto/lista-proyectos/lista-proyectos.component';
import { ListaMetricasComponent } from './componentes/metrica/lista-metricas/lista-metricas.component';
import { ListaReportesComponent } from './componentes/reporte/lista-reportes/lista-reportes.component';



export const routes: Routes = [
    { path: '', component: BarraUsuarioEntidadComponent}
];
