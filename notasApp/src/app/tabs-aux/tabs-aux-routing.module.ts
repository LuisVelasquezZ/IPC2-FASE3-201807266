import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsAuxPage } from './tabs-aux.page';

const routes: Routes = [
  {
    path: '',
    component: TabsAuxPage,
    children: [
      {
        path: 'cursos-aux',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./cursos-aux/cursos-aux.module').then(m => m.CursosAuxPageModule)
          }
        ]
      },
      {
        path: 'foros/:idSeccion',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./foros/foros.module').then(m => m.ForosPageModule)
          }
        ]
      },
      {
        path: 'actividades/:idSeccion',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./actividades/actividades.module').then(m => m.ActividadesPageModule)
          }
        ]
      },
      
      {
        path: 'actividades-form/:idSeccion',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./actividades/actividades-form/actividades-form.module').then(m => m.ActividadesFormPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs-aux/cursos-aux',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-aux/cursos-aux',
    pathMatch: 'full'
  },
  {
    path: 'calificacion',
    loadChildren: () => import('./calificacion/calificacion.module').then( m => m.CalificacionPageModule)
  },
  {
    path: 'evaluacion',
    loadChildren: () => import('./evaluacion/evaluacion.module').then( m => m.EvaluacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsAuxPageRoutingModule {}
