import {Component, OnInit, ViewChild} from '@angular/core';
import {Browser} from "@syncfusion/ej2-base";
import {SidebarComponent} from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('sideBar')
  public sideBar: SidebarComponent;
  public showBackdrop = false;
  public closeOnDocumentClick = false;

  constructor() {

    if (Browser.isDevice) {
      this.showBackdrop = true;
      this.closeOnDocumentClick = true;
    }
  }

  ngOnInit(): void {

  }

}
