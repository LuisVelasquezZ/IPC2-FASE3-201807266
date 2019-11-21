import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosAuxPage } from './cursos-aux.page';

const routes: Routes = [
  {
    path: '',
    component: CursosAuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosAuxPageRoutingModule {}
