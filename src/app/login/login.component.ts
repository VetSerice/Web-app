import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {Router} from "@angular/router";
import {catchError, map, Observer} from "rxjs";
import {UserResponse} from "../Model/UserResponse";
import {AdminService} from "../_services/admin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router ,private admin:AdminService) { }

   ngOnInit(){

    var tokenl =  this.authService.getUserToken()
    console.log()
    if (!tokenl) {
      this.isLoggedIn = true;
    }
  }

  async onSubmit(): Promise<void> {
    // this.authService.Adminlogin(this.form.username, this.form.password).subscribe( async value => {
    const result = await this.authService.Adminlogin(this.form.username,this.form.password);
     result.subscribe(async value => {console.log(value,"ok ")
      this.authService.setUserData(value.accessToken)
      await this.router.navigate(['/'])},
      error => {console.log(error,"norrrr")
      })
  }

}


