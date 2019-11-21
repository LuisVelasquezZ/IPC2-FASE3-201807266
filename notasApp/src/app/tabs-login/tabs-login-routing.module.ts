import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsLoginPage } from './tabs-login.page';

const routes: Routes = [
  {
    path: 'tabsLogin',
    component: TabsLoginPage,
    children: [
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: 'registro',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../registro/registro.module').then(m => m.RegistroPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabsLogin/login',
        pathMatch: 'full'
      }
    ]
  },
  
  {
    path: '',
    redirectTo: '/tabsLogin/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsLoginPageRoutingModule {}
