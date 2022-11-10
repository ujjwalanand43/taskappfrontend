import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddblogComponent } from './components/addblog/addblog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'addblog' , component:AddblogComponent},
  {path:'' , component:HomeComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
