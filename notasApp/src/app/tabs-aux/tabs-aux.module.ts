import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsAuxPageRoutingModule } from './tabs-aux-routing.module';

import { TabsAuxPage } from './tabs-aux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsAuxPageRoutingModule
  ],
  declarations: [TabsAuxPage]
})
export class TabsAuxPageModule {}
