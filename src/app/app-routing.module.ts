import { HelpComponent } from './help/help.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SidebarComponent } from './sidebar/sidebar.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RealtimechartComponent } from './realtimechart/realtimechart.component';
import { ChartComponent } from './chart/chart.component';
import { ProfileComponent} from './profile/profile.component';
const routes: Routes = [
    {path:'', redirectTo:'dash',pathMatch:'full'},
  { path: "", component: SidebarComponent, outlet: "sidebar" },
     { path: "Realtimechart", component: RealtimechartComponent,  data: { title: 'Realtime Chart' } },
   { path: "profile", component: ProfileComponent,  data: { title: 'Profile' } },
  { path: "dash", component: FirstpageComponent, data: { title: 'Dashboard' }},
  { path: "chart", component: ChartComponent, data: { title: 'chart' }},
            {path:"help",component: HelpComponent,  data: {title: 'Help'}},



  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
