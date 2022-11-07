import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { AddEditDoctorComponent } from '../add-edit-doctor/add-edit-doctor.component';
import { DataService } from '../data.service';
import { Tooltip, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';
import {AdminService} from "../_services/admin.service";
import {Observable} from "rxjs";
import {Veto} from "../Model/Veto";
import {remove} from "@syncfusion/ej2-base";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DoctorsComponent implements OnInit {
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
   this.router.navigate(['/doctor-details'] ,{queryParams:{id:args._id}});
  }


  onSpecializationChange($event: any) {

  }

  getColor(data: any) {

  }


  public onAddDoctor(): void {
     this.addEditDoctorObj.onAddDoctor();
    //const dialogConfig = new MatDialogConfig();


  }
  public onvetoClick(): void {
    this.router.navigateByUrl('/doctors');
  }

  updateDoctors() {

  }
}
