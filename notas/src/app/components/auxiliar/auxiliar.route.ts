import { Routes } from '@angular/router';
import { CursosAuxComponent} from './cursos-aux/cursos-aux.component';
import { ForosComponent } from './foros/foros.component';
import { PublicacionComponent} from './foros/publicacion/publicacion.component';
import { ActividadesComponent} from './actividades/actividades.component';
import { ActividadesFormComponent } from './actividades/actividades-form/actividades-form.component';
import { from } from 'rxjs';
import { AlumnosComponent } from './alumnos/alumnos.component';

export const Auxiliar_routes : Routes = [
  { path: 'cursosAux', component: CursosAuxComponent },
  { path: 'foros/:idSeccion', component: ForosComponent },
  { path: 'publicacion/:idPublicacion', component: PublicacionComponent },
  { path: 'actividades/:idSeccion', component: ActividadesComponent },
  { path: 'actividades-form/:idSeccion', component: ActividadesFormComponent },
  { path: 'alumnos/:idSeccion', component: AlumnosComponent},
  { path: '', pathMatch: 'full', redirectTo:'cursosAux'}
];
