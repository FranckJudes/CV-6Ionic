import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScolairePageRoutingModule } from './scolaire-routing.module';

import { ScolairePage } from './scolaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScolairePageRoutingModule
  ],
  declarations: [ScolairePage]
})
export class ScolairePageModule {}
