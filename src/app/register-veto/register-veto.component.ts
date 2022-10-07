import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-register-veto',
  templateUrl: './register-veto.component.html',
  styleUrls: ['./register-veto.component.css']
})
export class RegisterVetoComponent implements OnInit{
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.registerveto(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
