import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, Observable} from 'rxjs';
import {environment} from '../../environments/environment'
import {StorageMap} from "@ngx-pwa/local-storage";
import {UserResponse} from "../Model/UserResponse";
import {headers} from "../_helpers/util";
const AUTH_API = 'http://localhost:8080/';

const finalPath = environment.proxy+AUTH_API;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Accept':'*',
    'Access-Control-Allow-Origin':"*",'No-Auth': 'True' },)
};

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient, private storage:StorageMap) { }

  clearData(){
    this.storage.clear().subscribe(value => {});}
  setUserData(accessToken ){
    this.storage.set('accessToken',accessToken).subscribe(value => {})
  }

  getUserToken() : Promise<unknown> {
    console.log(this.storage.get('accessToken'))
    return this.storage.get('accessToken').toPromise();
  }
  getdhahdu() : Observable<unknown> {
    //console.log(this.storage.get('accessToken'))
    return this.http.get('');
  }

  Adminlogin(username: string, password: string): Observable<UserResponse> {
    console.log(finalPath)
    console.log(username)
    console.log(password)
    return this.http.post<UserResponse>(finalPath + 'users/login', {
      username,
      password,
    }, httpOptions,);
  }



  login(username: string, password: string): Observable<any> {
    console.log()
    return this.http.post(finalPath + 'users/login', {
      username,
      password
    }, httpOptions);
  }
  registerveto(name: string, email: string, password: string, phone: number, street: string, number: number, intNumber: number, postalCode: number): Observable<any> {
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
  register(name: string, email: string, password: string, ): Observable<any> {
    return this.http.post(finalPath + 'signup', {
      name,
      email,
      password

    }, httpOptions);
  }
  registerAdmin(username: string, email: string, password: string, ): Observable<any> {
    return this.http.post(finalPath + 'signup', {
      username,
      email,
      password

    }, httpOptions);
  }
  registerclient(name: string, email: string, password: string, phone: number, street: string, number: number, intNumber: number, postalCode: number): Observable<any> {
    console.log(finalPath);

    return this.http.post(finalPath + 'clients/singup/', {
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



}
