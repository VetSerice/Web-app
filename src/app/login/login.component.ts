import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import {Router} from "@angular/router";
import {Observer} from "rxjs";
import {UserResponse} from "../Model/UserResponse";

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

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) { }

  async ngOnInit(): Promise<void> {
    var tokenl = await this.authService.getUserToken()
    console.log()
    if (!tokenl) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    this.authService.Adminlogin(this.form.username, this.form.password).subscribe( value => {
       this.authService.setUserData(value);

  }, error => {  console.log(error.error, "ok")}

  );



  }

}


