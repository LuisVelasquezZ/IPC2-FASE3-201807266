import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { Administrador_routes } from './components/administrador/administrador.route';
import { AuxiliarComponent } from './components/auxiliar/auxiliar.component';
import {Auxiliar_routes } from'./components/auxiliar/auxiliar.route';
import { from } from 'rxjs';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { Alumno_routes } from './components/alumno/alumno.route';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo:'login'},
  { path: 'registro', component: RegistroComponent},
  {
    path: 'administrador',
    component: AdministradorComponent,
    children: Administrador_routes
  },
  {
    path: 'auxiliar',
    component: AuxiliarComponent,
    children: Auxiliar_routes
  },
  {
    path: 'alumno',
    component: AlumnoComponent,
    children: Alumno_routes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
