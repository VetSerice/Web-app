import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit{
  form: any = {
    name: null,
    email: null,
    password: null,
    phonet: null,
    street: null,
    number: null,
    intNumber: null,
    postalCode: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, email, password, phonet, street, number, intNumber, postalCode } = this.form;
    this.authService.register(name, email, password, phonet, street, number, intNumber, postalCode).subscribe({
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
