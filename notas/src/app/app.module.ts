import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { SlidenavAdminComponent } from './components/administrador/slidenav-admin/slidenav-admin.component';
import { UsuariosComponent } from './components/administrador/usuarios/usuarios.component';
import { UsuariosFormComponent } from './components/administrador/usuarios/usuarios-form/usuarios-form.component';
import { CursosComponent } from './components/administrador/cursos/cursos.component';
import { CursosFormComponent } from './components/administrador/cursos/cursos-form/cursos-form.component';
import { SeccionesComponent } from './components/administrador/cursos/secciones/secciones.component';
import { SeccionesFormComponent } from './components/administrador/cursos/secciones-form/secciones-form.component';
import { AuxiliaresComponent } from './components/administrador/auxiliares/auxiliares.component';
import { SeccionAuxComponent } from './components/administrador/auxiliares/seccion-aux/seccion-aux.component';
import { AuxiliarComponent } from './components/auxiliar/auxiliar.component';
import { CursosAuxComponent } from './components/auxiliar/cursos-aux/cursos-aux.component';
import { ForosComponent } from './components/auxiliar/foros/foros.component';
import { PublicacionComponent } from './components/auxiliar/foros/publicacion/publicacion.component';
import { ActividadesComponent } from './components/auxiliar/actividades/actividades.component';
import { ActividadFormComponent } from './services/actividad/actividad-form/actividad-form.component';
import { ActividadesFormComponent } from './components/auxiliar/actividades/actividades-form/actividades-form.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { SeccionesAlumnoComponent } from './components/alumno/secciones-alumno/secciones-alumno.component';
import { CursosAlumnoComponent } from './components/alumno/cursos-alumno/cursos-alumno.component';
import { AsignacionAlumnoComponent } from './components/alumno/asignacion-alumno/asignacion-alumno.component';
import { AlumnosComponent } from './components/auxiliar/alumnos/alumnos.component';
import { CalificacionComponent } from './components/auxiliar/calificacion/calificacion.component';
import { ActividadComponent } from './components/alumno/actividad/actividad.component';
import { EntregaComponent } from './components/alumno/entrega/entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AdministradorComponent,
    SlidenavAdminComponent,
    UsuariosComponent,
    UsuariosFormComponent,
    CursosComponent,
    CursosFormComponent,
    SeccionesComponent,
    SeccionesFormComponent,
    AuxiliaresComponent,
    SeccionAuxComponent,
    AuxiliarComponent,
    CursosAuxComponent,
    ForosComponent,
    PublicacionComponent,
    ActividadesComponent,
    ActividadFormComponent,
    ActividadesFormComponent,
    AlumnoComponent,
    SeccionesAlumnoComponent,
    CursosAlumnoComponent,
    AsignacionAlumnoComponent,
    AlumnosComponent,
    CalificacionComponent,
    ActividadComponent,
    EntregaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
