import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsLoginPageRoutingModule } from './tabs-login-routing.module';

import { TabsLoginPage } from './tabs-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsLoginPageRoutingModule
  ],
  declarations: [TabsLoginPage]
})
export class TabsLoginPageModule {}
