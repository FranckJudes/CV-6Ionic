import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes =[
  {
    path: 'tabs',
    component: TabsPage,
    children :[
      {path :"profile" , loadChildren:()=> import ('src/app/pages/profile/profile.module').then(res => res.ProfilePageModule)},
      {path :"scolaire" , loadChildren:()=> import ('src/app/pages/scolaire/scolaire.module').then(res => res.ScolairePageModule)},
      {path :"competence" , loadChildren:()=> import ('src/app/pages/competence/competence.module').then(res => res.CompetencePageModule)},
      {path :"apropos" , loadChildren:()=> import ('src/app/pages/apropos/apropos.module').then(res => res.AproposPageModule)}
    ]
  },
  {
    path:"",
    redirectTo: "tabs/profile",
    pathMatch: "full"
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
