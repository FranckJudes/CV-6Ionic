import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScolairePage } from './scolaire.page';

const routes: Routes = [
  {
    path: '',
    component: ScolairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScolairePageRoutingModule {}
