import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAssitPageRoutingModule } from './register-assit-routing.module';

import { RegisterAssitPage } from './register-assit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAssitPageRoutingModule
  ],
  declarations: [RegisterAssitPage]
})
export class RegisterAssitPageModule {}
