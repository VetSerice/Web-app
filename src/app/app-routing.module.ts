import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { PreferenceComponent } from './preference/preference.component';
import { AboutComponent } from './about/about.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import {LoginClientComponent} from "./login-client/login-client.component";
import {LoginVetoComponent} from "./login-veto/login-veto.component";
import {RegisterVetoComponent} from "./register-veto/register-veto.component";
import {RegisterClientComponent} from "./register-client/register-client.component";
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctor-details/:id', component: DoctorDetailsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'preference', component: PreferenceComponent },
  { path: 'login/client', component: LoginClientComponent },
  { path: 'register/client', component: RegisterClientComponent },
  { path: 'register/veto', component: RegisterVetoComponent },
  { path: 'login/veto', component: LoginVetoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: LoginComponent},
  { path: 'home', component: HomeComponent },


  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload",useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
