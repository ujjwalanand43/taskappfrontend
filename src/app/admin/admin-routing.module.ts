import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddbolgsComponent } from './addbolgs/addbolgs.component';
import { CalendarComponent } from './calendar/calendar.component';
// AdminPanelComponent

const routes: Routes = [
  {path:'98765/superadmin',component:AdminPanelComponent},
  {path:'admin/login',component:LoginComponent},
  {
    path:'admin/add-blogs', component:AddbolgsComponent
  },
  {
    path:'admin/calendar', component:CalendarComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AdminRoutingModule { }
