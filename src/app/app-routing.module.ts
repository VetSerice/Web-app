import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-veto/board-user.component';
import { BoardModeratorComponent } from './board-client/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {LoginClientComponent} from "./login-client/login-client.component";
import {LoginVetoComponent} from "./login-veto/login-veto.component";
import {RegisterVetoComponent} from "./register-veto/register-veto.component";
import {RegisterClientComponent} from "./register-client/register-client.component";
import {MainComponent} from "./main/main.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'login/client', component: LoginClientComponent },
  { path: 'register/client', component: RegisterClientComponent },
  { path: 'register/veto', component: RegisterVetoComponent },
  { path: 'login/veto', component: LoginVetoComponent },
  { path: 'mainVeto', component: MainComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },


  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
