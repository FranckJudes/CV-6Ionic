import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursusPageRoutingModule } from './cursus-routing.module';

import { CursusPage } from './cursus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursusPageRoutingModule
  ],
  declarations: [CursusPage]
})
export class CursusPageModule {}
