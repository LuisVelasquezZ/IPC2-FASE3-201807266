import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadesFormPageRoutingModule } from './actividades-form-routing.module';

import { ActividadesFormPage } from './actividades-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadesFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ActividadesFormPage]
})
export class ActividadesFormPageModule {}
