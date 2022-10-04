import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  form: FormGroup;                    // {1}
  constructor(private router: Router) { }

  username: string;
  password: string;
  showSpinner: any;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }
}

