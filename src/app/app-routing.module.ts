import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DoctorsComponent } from './vetos/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { PreferenceComponent } from './preference/preference.component';
import { AboutComponent } from './about/about.component';
import { DoctorDetailsComponent } from './Veto-details/doctor-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VetoSeviceComponent } from './veto-sevice/veto-sevice.component';

const routes: Routes = [
  { path: '', component: VetoSeviceComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctor-details/:id', component: DoctorDetailsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'preference', component: PreferenceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
