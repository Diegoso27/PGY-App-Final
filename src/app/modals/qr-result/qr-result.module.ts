import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrResultPageRoutingModule } from './qr-result-routing.module';

import { QrResultPage } from './qr-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrResultPageRoutingModule
  ],
  declarations: [QrResultPage]
})
export class QrResultPageModule {}
