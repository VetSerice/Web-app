import {
  Component,
  EventEmitter,
  Inject,
  Injectable,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DatePipe } from '@angular/common'

import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../_services/admin.service";
import {Observable} from "rxjs";
import {dayScaduleReponse} from "../Model/dayScaduleResponse";
import {extend, Internationalization, isNullOrUndefined, removeClass} from '@syncfusion/ej2-base';
import {
  WeekService,
  EventSettingsModel,
  ResizeService,
  WorkHoursModel,
  DragAndDropService,
  ActionEventArgs,
  EventRenderedArgs, ScheduleComponent, WorkWeekService, DayService, MonthService, RenderCellEventArgs, EJ2Instance
} from '@syncfusion/ej2-angular-schedule';
import {ChangeEventArgs} from "@syncfusion/ej2-angular-dropdowns";
import {getElement} from "@syncfusion/ej2-angular-charts";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {TimePicker} from "@syncfusion/ej2-angular-calendars";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
  encapsulation: ViewEncapsulation.None
})

export class CalendarComponent implements OnInit {
  public dayscadu: Observable<dayScaduleReponse> ;
  public filteredDoctors: dayScaduleReponse ;
  public data: Record<string, any>[] = extend([],  null, true) as Record<string, any>[];
  public eventSettings: EventSettingsModel = { };
  public readonly = true;
  public workHours: WorkHoursModel = { start: '08:00' };
  public startHour = '08:00';
  public endHour = '19:00';
 public datedeajrdh: Date = new Date();



  public instance: Internationalization = new Internationalization();



  constructor( public router: Router, private route: ActivatedRoute,private admin : AdminService,public datepipe: DatePipe) {


    // const formElement: HTMLInputElement[] = [].slice.call(document.querySelectorAll('.e-header-cells '));


  }


  onRenderCell(args: RenderCellEventArgs): void {
    this.datedeajrdh=args.date
    let latest_date =this.datepipe.transform(args.date, 'yyyy-MM-dd');
    console.log(latest_date)


  }
  ngOnInit(): void {
   // console.log(this.datedeajrdh,"test")
    this.route.queryParams.subscribe(async params => {
      this.dayscadu = await this.admin.AddDayScheduleSchema(params.id,"2023-10-12");
      this.dayscadu.subscribe({
        next: async data => {
          console.log(data)
          this.filteredDoctors = data;

        },
        error: err => {
          console.log(err)
        }
      });


    })
  }



}


