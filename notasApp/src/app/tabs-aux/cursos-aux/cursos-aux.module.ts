import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosAuxPageRoutingModule } from './cursos-aux-routing.module';

import { CursosAuxPage } from './cursos-aux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosAuxPageRoutingModule
  ],
  declarations: [CursosAuxPage]
})
export class CursosAuxPageModule {}
