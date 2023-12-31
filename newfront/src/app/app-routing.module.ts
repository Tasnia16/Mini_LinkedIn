import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { PostComponent } from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [


  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"post",component:PostComponent},
  {path:"notification",component:NotificationComponent},
  {path:"dashboard",component:DashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
