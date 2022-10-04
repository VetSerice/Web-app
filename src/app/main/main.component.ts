import {Component, ViewChild, AfterViewInit, OnInit, ViewEncapsulation} from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class MainComponent implements OnInit {
  @ViewChild('sideBar')
  public sidebarInstance: SidebarComponent;

  public sideBar: SidebarComponent;
  public showBackdrop = false;
  public closeOnDocumentClick = false;
  public urlValue: String;

  constructor(router: Router) {

  }
  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  public onItemClick(args: any): void {
    if (Browser.isDevice) {
      this.sideBar.hide();
    }
    const elements: HTMLElement[] = args.currentTarget.parentElement.querySelectorAll('.active-item');
    elements.forEach(element => {
      if (element.classList.contains('active-item')) {
        element.classList.remove('active-item');
      }
    });
    args.currentTarget.classList.add('active-item');
  }


}
