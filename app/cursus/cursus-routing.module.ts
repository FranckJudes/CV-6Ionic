import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursusPage } from './cursus.page';

const routes: Routes = [
  {
    path: '',
    component: CursusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursusPageRoutingModule {}
