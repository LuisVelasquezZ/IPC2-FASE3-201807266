import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosFormComponent } from './cursos/cursos-form/cursos-form.component';
import { SeccionesComponent } from './cursos/secciones/secciones.component';
import { SeccionesFormComponent} from './cursos/secciones-form/secciones-form.component';
import { AuxiliaresComponent } from './auxiliares/auxiliares.component';
import { SeccionAuxComponent } from './auxiliares/seccion-aux/seccion-aux.component';
import { from } from 'rxjs';


export const Administrador_routes : Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', pathMatch: 'full', redirectTo:'usuarios'},
  { path: 'usuarios/:idUsuario', component: UsuariosFormComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'cursos/:idCurso', component:CursosFormComponent},
  { path: 'secciones/:idCurso', component:SeccionesComponent},
  { path: 'secciones-form/:idSeccion', component:SeccionesFormComponent},
  { path: 'auxiliares', component:AuxiliaresComponent},
  { path: 'auxiliares/:idUsuario', component:SeccionAuxComponent}
];
