import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  CategoryService, DataLabelService, DateTimeService, SplineSeriesService, DateTimeCategoryService, LegendService
} from '@syncfusion/ej2-angular-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [CategoryService, DataLabelService, SplineSeriesService, LegendService, DateTimeService, DateTimeCategoryService],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent  {

}
