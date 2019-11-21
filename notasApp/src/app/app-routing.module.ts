import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }*/
  {
    path: '',
    loadChildren: () => import('./tabs-login/tabs-login.module').then(m => m.TabsLoginPageModule)
  },
  {
    path: 'tabs-aux',
    loadChildren: () => import('./tabs-aux/tabs-aux.module').then( m => m.TabsAuxPageModule)
  },
  /*{
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }*///,
  {
    path: 'tabs-login',
    loadChildren: () => import('./tabs-login/tabs-login.module').then( m => m.TabsLoginPageModule)
  },
  /*{
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
