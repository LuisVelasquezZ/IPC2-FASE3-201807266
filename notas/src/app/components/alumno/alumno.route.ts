import { Routes } from '@angular/router';
import { from } from 'rxjs';
import { SeccionesAlumnoComponent } from './secciones-alumno/secciones-alumno.component';
import { CursosAlumnoComponent } from './cursos-alumno/cursos-alumno.component';
import { AsignacionAlumnoComponent } from './asignacion-alumno/asignacion-alumno.component';
import { ActividadComponent } from './actividad/actividad.component';
import { EntregaComponent } from './entrega/entrega.component';

export const Alumno_routes : Routes = [
  { path: 'secciones-alumno', component: SeccionesAlumnoComponent },
  { path: 'cursos-alumno', component: CursosAlumnoComponent},
  { path: 'asingacion/:idCurso', component: AsignacionAlumnoComponent},
  { path: 'actividad/:idSeccion', component: ActividadComponent},
  { path: 'entrega/:idActividad', component:EntregaComponent},
  { path: '', pathMatch: 'full', redirectTo:'secciones-alumno'}
];
