import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { TokenStorageService } from '../_services/token-storage.service';
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('sideBar')
  public sideBar: SidebarComponent;
  public showAdminBoard = false;
  public showBackdrop = false;
  public closeOnDocumentClick = false;
  private token: string;
  isLoggedIn = false;
  username?: string;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) {
    document.body.classList.add('main-page');
  }
  async ngOnInit(): Promise<void> {
    var tokenl = await this.authService.getUserToken()
    console.log(tokenl)
    console.log(this.showAdminBoard)
    console.log(this.isLoggedIn)

    if (!tokenl) {
      this.showAdminBoard = true;
      this.isLoggedIn = true;
      //this.token = this.authService.getUserToken().;
    }
  }

  public ngAfterViewInit(): void {
    if (Browser.isDevice) {
      document.querySelector('.planner-header').classList.add('device-header');
      document.querySelector('.planner-wrapper').classList.add('device-wrapper');
    }
  }

  public btnClick(): void {
    this.sideBar.show();
  }

  public onItemClick(args: any): void {
    if (Browser.isDevice) {
      this.sideBar.hide();
    }
    const elements: HTMLElement[] = args.currentTarget.parentElement.querySelectorAll('.active-item');
    elements.forEach(element => {
      if (element.classList.contains('active-item')) { element.classList.remove('active-item'); }
    });
    args.currentTarget.classList.add('active-item');
  }

  logout(): void {
    this.authService.clearData();
  }
}
