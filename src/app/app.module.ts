import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule, MultiSelectModule, ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule, ButtonModule, SwitchModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TreeViewModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { TextBoxModule, MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AddEditDoctorComponent } from './add-edit-doctor/add-edit-doctor.component';
import { AddEditPatientComponent } from './add-edit-patient/add-edit-patient.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorAvailabilityComponent } from './doctor-availability/doctor-availability.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { PreferenceComponent } from './preference/preference.component';
import { MainComponent } from './main/main.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { LoginVetoComponent } from './login-veto/login-veto.component';
import { RegisterVetoComponent } from './register-veto/register-veto.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddEditDoctorComponent,
    AddEditPatientComponent,
    CalendarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    DoctorDetailsComponent,
    DoctorAvailabilityComponent,
    DoctorsComponent,
    LoginClientComponent,
    LoginVetoComponent,
    RegisterVetoComponent,
    RegisterClientComponent,
    PatientsComponent,
    RecentActivityComponent,
    PreferenceComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ScheduleModule,
    RecurrenceEditorModule,
    DropDownListModule,
    MultiSelectModule,
    ComboBoxModule,
    CheckBoxModule,
    ButtonModule,
    HttpClientModule,
    SwitchModule,
    SplitButtonModule,
    RadioButtonModule,
    TreeViewModule,
    DatePickerModule,
    TimePickerModule,
    TextBoxModule,
    MaskedTextBoxModule,
    ListViewModule,
    SidebarModule,
    ChartModule,
    GridModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [CalendarComponent, authInterceptorProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
