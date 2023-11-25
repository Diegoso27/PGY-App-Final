import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistRegisterPageRoutingModule } from './asist-register-routing.module';

import { AsistRegisterPage } from './asist-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistRegisterPageRoutingModule
  ],
  declarations: [AsistRegisterPage]
})
export class AsistRegisterPageModule {}
