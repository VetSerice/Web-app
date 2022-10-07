import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-client/board-moderator.component';
import { BoardUserComponent } from './board-veto/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LoginClientComponent } from './login-client/login-client.component';
import { LoginVetoComponent } from './login-veto/login-veto.component';
import { RegisterVetoComponent } from './register-veto/register-veto.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginClientComponent,
    LoginVetoComponent,
    RegisterVetoComponent,
    RegisterClientComponent,
    MainComponent,
    DashboardComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
