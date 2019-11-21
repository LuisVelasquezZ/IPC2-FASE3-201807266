import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesFormPage } from './actividades-form.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesFormPageRoutingModule {}
