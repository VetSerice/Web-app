import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: name,
      password
    }, httpOptions);
  }
  register(name: string, email: string, password: string, phone: number, street: string, number: number, intNumber: number, postalCode: number): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name,
      email,
      password,
      phone,
      street,
      number,
      intNumber,
      postalCode
    }, httpOptions);
  }
  registerveto(name: string, email: string, password: string, ): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name,
      email,
      password

    }, httpOptions);
  }
  registerAdmin(username: string, email: string, password: string, ): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password

    }, httpOptions);
  }


}
