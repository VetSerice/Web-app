import {Component, OnInit, ViewChild} from '@angular/core';
import {AddEditDoctorComponent} from "../add-edit-doctor/add-edit-doctor.component";
import {DropDownListComponent} from "@syncfusion/ej2-angular-dropdowns";
import {Tooltip, TooltipEventArgs} from "@syncfusion/ej2-angular-popups";
import {Observable} from "rxjs";
import {Veto} from "../Model/Veto";
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import {AdminService} from "../_services/admin.service";

@Component({
  selector: 'app-doctors-appointment',
  templateUrl: './doctors-appointment.component.html',
  styleUrls: ['./doctors-appointment.component.scss']
})
export class DoctorsAppointmentComponent implements OnInit {

  @ViewChild('addEditDoctorObj') addEditDoctorObj: AddEditDoctorComponent;
  @ViewChild('specializationObj') specializationObj: DropDownListComponent;
  @ViewChild('specialistItemObj') specialistItemObj: any;
  public tooltipObj: Tooltip;
  public doctorsData: Observable<Veto[]>;
  public fields: Record<string, any> = { text: 'Text', value: 'Id' };
  specializationData:  Record<string, any>[];
  filteredDoctors: Record<string, any>[];

  constructor( private router: Router,private dataService: DataService, private admin : AdminService) {}

  public async ngOnInit(): Promise<void> {
    this.doctorsData = await this.admin.getAllveto();
    this.doctorsData.subscribe({
      next: async data => {
        console.log(data)
        this.filteredDoctors = data;
      },
      error: err => {
        console.log(err)

      }
    });
    this.tooltipObj = new Tooltip({
      height: '30px',
      width: '76px',
      position: 'RightTop',
      offsetX: -10,
      showTipPointer: false,
      target: '.availability',
      beforeOpen: (args: TooltipEventArgs) => {
        args.element.querySelector('.e-tip-content').textContent =
          args.target.classList[1].charAt(0).toUpperCase() + args.target.classList[1].slice(1);
      }
    });


  }

  public async onSpecialistClick(args: Record<string, any>): Promise<void> {
    console.log(args)
    this.router.navigate(['/mycalendar'] ,{queryParams:{id:args._id}});
  }

  onSpecializationChange($event: any) {

  }
  getColor(data: any) {

  }

  updateDoctors() {

  }

}
