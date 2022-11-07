import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Internationalization } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TimePicker } from '@syncfusion/ej2-angular-calendars';
import { EJ2Instance } from '@syncfusion/ej2-angular-schedule';
import { AddEditDoctorComponent } from '../add-edit-doctor/add-edit-doctor.component';
import { DataService } from '../data.service';
import {AdminService} from "../_services/admin.service";
import {Veto} from "../Model/Veto";
import {Observable} from "rxjs";
import {MYBreakHoursResponse} from "../Model/MYBreakHoursResponse";
import {DayModel} from "../Model/Day";
import {VetoResponseAdmin} from "../Model/vetResponseAdmin";


import {VetAdress} from "../Model/VetAdress";

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DoctorDetailsComponent implements OnInit {
  @ViewChild('addEditDoctorObj') addEditDoctorObj: AddEditDoctorComponent;
  @ViewChild('breakHourObj') breakHourObj: DialogComponent;
  @ViewChild('deleteConfirmationDialogObj') deleteConfirmationDialogObj: DialogComponent;

  public activeData: Record<string, any>;
  public doctorsData: Observable<Veto>;
  validation: VetoResponseAdmin;

  public vzlidate: Observable<VetoResponseAdmin>;

  public intl: Internationalization = new Internationalization();
  public animationSettings: Record<string, any> = { effect: 'None' };
  public breakDays: Observable<DayModel[]> ;
  public day: Observable<DayModel> ;

  filteredDoctors: Veto;
  public days: DayModel[];

  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public date: number = new Date().getHours();


  public  dayOfWeekList: Record<string, any>[] = [
    { Value: 0, Text: 'Sunday',State: 'AddBreak',Enable: true,
      BreakStartHour: new Date(this.date,),
      BreakEndHour: new Date(this.date, )},
    { Value: 1, Text: 'Monday',State: 'AddBreak',Enable: true,
      BreakStartHour: new Date(this.date, ),
      BreakEndHour: new Date(this.date, )},
    { Value: 2, Text: 'Tuesday',State: 'AddBreak',Enable: true,
      BreakStartHour: new Date(this.date, ),
      BreakEndHour: new Date(this.date, )},
    { Value: 3, Text: 'Wednesday',State: 'AddBreak',Enable: true,
      BreakStartHour: new Date(this.date, ),
      BreakEndHour: new Date(this.date, )},
    { Value: 4, Text: 'Thursday',State: 'AddBreak',Enable: true,
      BreakStartHour: new Date(this.date, ),
      BreakEndHour: new Date(this.date, )},
    { Value: 5, Text: 'Friday' ,State: 'AddBreak',Enable: true,
      BreakStartHour: new Date(this.date, ),
      BreakEndHour: new Date(this.date, )},
    { Value: 6, Text: 'Saturday',State: 'AddBreak',Enable: true,
      BreakStartHour: new Date(this.date, ),
      BreakEndHour: new Date(this.date, )},
  ];
  constructor( public router: Router, private route: ActivatedRoute,private admin : AdminService) {
    this.route.queryParams.subscribe(async params => {
      console.log(params.id, "test");
      this.doctorsData = await this.admin.getoneVeto(params.id);
      this.breakDays =  await this.admin.getBreakDayt(params.id) ;
      this.doctorsData.subscribe({
        next: async data => {
          console.log(data)
          this.filteredDoctors = data;
        },
        error: err => {
          console.log(err)
        }
      });
      this.breakDays.subscribe({
        next: async data => {
          console.log(data,"day")
          this.days = data;
        },
        error: err => {
          console.log(err)


        }
      });
    })

  }


  public async ngOnInit(): Promise<void> {

    }
  async Activer() {
    console.log(this.filteredDoctors, "yes");
    this.vzlidate = await this.admin.Validate(this.filteredDoctors._id)
    this.vzlidate.subscribe({
  next: async data => {
    console.log(data,"repponseee")
    this.validation = data;
  },
  error: err => {
    console.log(err)


  }
});
  }
  public onBackIconClick(): void {
    this.router.navigateByUrl('/doctors');
  }

  public onDoctorDelete(): void {
    this.deleteConfirmationDialogObj.show();
  }

  public onDeleteClick(): void {

  }
  public getStatus(state: string): boolean {
    return state === 'RemoveBreak' ? false : true;
  }
  public onDeleteCancelClick(): void {
    this.deleteConfirmationDialogObj.hide();
  }

  public onDoctorEdit(): void {
    this.addEditDoctorObj.showDetails();
  }

  public onAddBreak(): void {
    this.breakHourObj.show();
  }
  public onCancelClick(): void {
    this.breakHourObj.hide();
  }


  refreshDetails() {

  }

  public onChangeStatus(args: Record<string, any>): void {
    args.preventDefault();
    const activeState: string = args.target.getAttribute('data-state');
    const activeDay: string = args.target.getAttribute('id').split('_')[0];
    let newState = '';
    switch (activeState) {
      case 'TimeOff':
        newState = 'RemoveBreak';
        break;
      case 'RemoveBreak':
        newState = 'AddBreak';
        break;
      case 'AddBreak':
        newState = 'TimeOff';
        break;
    }
    for (const breakDay of this.dayOfWeekList) {
      if (breakDay.Text === activeDay) {
        console.log(breakDay.State,"breakDay.State")
        breakDay.State = newState;
      }
    }
  }
  onSaveClick() {
    const formElement: HTMLInputElement[] = [].slice.call(document.querySelectorAll('.break-hour-dialog .e-field'));
    const workDays: Record<string, any>[] = JSON.parse(JSON.stringify(this.dayOfWeekList));
    for (const curElement of formElement) {
      const dayName: string = curElement.parentElement.getAttribute('id').split('_')[0];
      const valueName: string = curElement.parentElement.getAttribute('id').split('_')[1];
      const instance: TimePicker = (curElement.parentElement as EJ2Instance).ej2_instances[0] as TimePicker;
      for (const workDay of workDays) {
        if (workDay.Text === dayName) {
          if (valueName === 'start') {
            workDay.BreakStartHour = instance.value;
            workDay.WorkStartHour = new Date(workDay.WorkStartHour as Date);
          }else{
            workDay.BreakEndHour = instance.value;
            workDay.WorkEndHour = new Date(workDay.WorkEndHour as Date);

          }
        }
       workDay.Enable = !(workDay.State === 'TimeOff');

      }
      }
    const availableDays: Array<any> = [];
    workDays.forEach(workDay => {
      if (workDay.Enable) {
        availableDays.push(workDay.Text);
        availableDays.push( `${workDay.BreakStartHour.getHours()}`.padStart(2, '0')+":"+`${workDay.BreakStartHour.getMinutes()}`.padStart(2, '0'));
        availableDays.push(`${workDay.BreakEndHour.getHours()}`.padStart(2, '0')+":"+`${workDay.BreakEndHour.getMinutes()}`.padStart(2, '0'));
      }
    });
    if(availableDays.length > 0) {
      let data2 :any[] =[]
      for(let i=0;i<availableDays.length;i+=3){
        let elementto_backend ={
          day:{
            dayname:availableDays[i],
            Starttime: availableDays[i+1],
            endTime: availableDays[i+2]
          }
        }
        data2.push(elementto_backend)
      }

      this.route.queryParams.subscribe(async params => {
       // console.log(availableDays)
        console.log(data2)
        this.day = await this.admin.addBreakDayt(params.id,data2);
        this.day.subscribe({
          next: async data => {
            console.log(data,"data")
          },
          error: err => {
            console.log(err)
          }
        });
      })
    }if(availableDays.length  ===0){
      console.log("time off")
      let data2 : {}= {
        day:{
          dayname:'OFF ' ,
          Starttime: '',
          endTime: ''
        }
      }
      this.route.queryParams.subscribe(async params => {
        this.day = await this.admin.addBreakDayt(params.id,data2);
        this.day.subscribe({
          next: async data => {
            console.log(data,"data")
            this.breakHourObj.hide();
            window.location.reload();
          },
          error: err => {
            //this.breakHourObj.hide();
            console.log(err)
          }
        });
      })

    }





  }
}
