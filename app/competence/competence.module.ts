import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetencePageRoutingModule } from './competence-routing.module';

import { CompetencePage } from './competence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetencePageRoutingModule
  ],
  declarations: [CompetencePage]
})
export class CompetencePageModule {}
