/* eslint-disable @typescript-eslint/naming-convention */
import {Component, ViewChild, ViewEncapsulation, Output, EventEmitter, ElementRef} from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { FormValidator, MaskedTextBoxComponent, MaskedTextBox } from '@syncfusion/ej2-angular-inputs';
import { EJ2Instance } from '@syncfusion/ej2-angular-schedule';
import { DialogComponent, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-popups';
import { DropDownList, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { specializationData, experienceData, dutyTimingsData } from '../datasource';
import { DataService } from '../data.service';
import { CalendarComponent } from '../calendar/calendar.component';
import {AdminService} from "../_services/admin.service";
import {VetAdress} from "../Model/VetAdress";
import {VetoResponseAdmin} from "../Model/vetResponseAdmin";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-edit-doctor',
  templateUrl: './add-edit-doctor.component.html',
  styleUrls: ['./add-edit-doctor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddEditDoctorComponent {
  @Output() refreshDoctors = new EventEmitter<string>();
  @ViewChild('newDoctorObj') newDoctorObj: DialogComponent;
  @ViewChild('specializationObj') specializationObj: DropDownListComponent;

  public doctorsData: Observable<VetoResponseAdmin>;
  public Update: Observable<VetoResponseAdmin>;
  public activeDoctorData: Record<string, any>;
  public dialogState: string;
  public animationSettings: Record<string, any> = { effect: 'None' };
  public title = 'New Doctor';
  public Specialization: string[] = [ ' la cardiologie des animaux de compagnie',
                                      'la chirurgie des petits animaux',
                                      'la dentisterie-stomatologie',
                                      'la dermatologie','l’imagerie médicale',
                                      'la reproduction',
                                        'la neurologie' ];
  public Experience: string[] = [ '1+years', '2+years', '5+years', '+10years' ];
  public valueSpecialization: string = '';
  public valueExperience: string = '';

  name: any;
  email: any;
  password: any;
  phone: any;
  intNumber: any;
  number: any;
  street: any;
  postalCode: any;
  Education: any;



  constructor(private dataService: DataService, private calendarComponent: CalendarComponent, private admin :AdminService, private route:ActivatedRoute) {
    //this.doctorsData = this.dataService.getDoctorsData();
    this.activeDoctorData = this.dataService.getActiveDoctorData();
  }

  public onAddDoctor(): void {
    this.dialogState = 'new';
    this.title = 'New Doctor';
    this.newDoctorObj.show();
  }
  public onCancelClick(): void {
    this.newDoctorObj.hide();
  }
  public async onSaveClick(): Promise<void> {
    let adresse : VetAdress= {
      street:this.street,
      number:this.number,
      intNumber:this.intNumber,
     postalCode:this.postalCode
    }
      if (this.title=='New Doctor'){
        this.doctorsData = await this.admin.CreateVeto(this.name,this.email,this.password,this.phone, adresse);
        this.doctorsData.subscribe({
        next: async data => {
          console.log(data)
          this.newDoctorObj.hide();
          window.location.reload();

        },
        error: err => {
          console.log(err)

        }
      });
    }
    if (this.title=='Edit Doctor'){
      this.route.queryParams.subscribe(async params => {
        this.Update = await this.admin.updateVeto(params.id,this.name,this.email,this.phone,this.Education,this.valueSpecialization,this.valueExperience,adresse);
        this.Update.subscribe({
          next: async data => {
            console.log(data)
            this.newDoctorObj.hide();
            window.location.reload();
          },
          error: err => {
            console.log(err)

          }
        });

      })
      console.log(this.name,this.email,this.phone, adresse,this.valueSpecialization,this.valueExperience)
    }
  }
  public showDetails(): void {
    this.dialogState = 'edit';
    this.title = 'Edit Doctor';
    this.newDoctorObj.show();

  }

  public onBeforeOpen(args: BeforeOpenEventArgs): void {
    const formElement: HTMLFormElement = args.element.querySelector('#new-doctor-form');
    if (formElement && formElement.ej2_instances) {
      return;
    }
    const customFn: (args: { [key: string]: HTMLElement }) => boolean = (e: { [key: string]: HTMLElement }) => {
      const argsLength = ((e.element as EJ2Instance).ej2_instances[0] as MaskedTextBoxComponent).value.length;
      return (argsLength !== 0) ? argsLength >= 10 : false;
    };
    const rules: Record<string, any> = {};
    rules.Name = { required: [true, 'Enter valid name'] };
    rules.Email = { required: [true, 'Enter valid email'] };
    rules.Password = { required: [true, 'Enter valid passeworh'] };
    rules.phone = { required: [customFn, 'Enter valid mobile number'] };
    rules.street = { required: [true, 'Enter valid street name number'] };
    rules.intNumber = { required: [ true,'Enter code valide'] };
    rules.number = { required: [true,'Enter number valide'] };
    rules.postalCode = { required: [true, 'Enter valid email'], email: [true, 'Email address is invalid'] };
    this.dataService.renderFormValidator(formElement, rules, this.newDoctorObj.element);
  }
}
