import {Component, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from "@syncfusion/ej2-angular-navigations";
import {Router} from "@angular/router";
import {Browser} from "@syncfusion/ej2-base";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
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
