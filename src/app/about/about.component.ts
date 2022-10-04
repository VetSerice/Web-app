import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.dataService.updateActiveItem('about');
  }
}
