import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import {StorageMap} from "@ngx-pwa/local-storage";
import {VetoResponseAdmin} from "../Model/vetResponseAdmin";
import {AuthService} from "./auth.service";
const AUTH_API = 'http://localhost:8080/';
const finalpath = environment.proxy+AUTH_API;
import {headers, headersWithToken} from "../_helpers/util";
import {VetAdress} from "../Model/VetAdress";

import {Breed} from "../Model/Breed";
import {Appointment} from "../Model/Appointmenr";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private _httpClient : HttpClient,
              private authservice : AuthService) {
  }

  //creation de veterinaire
  async CreateVeto( name: string, email: string, password: string, phone: string, vetAddress:VetAdress) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/veterinarys/create";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    const data = {name, email, password, phone, vetAddress,}
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(token)});

  }

  //creation de client
  async CreteClient(name: string, breed : Breed, femaleOrMale: string, nameClient: string, email: string, password: string, phone: string, address:VetAdress) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/clients/create";
    const token = await this.authservice.getUserToken();
    const finalpathapi: string = finalpath+ path;
    const data = {
      name, breed, femaleOrMale, nameClient, email, password, phone, address,
    }
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headers});
  }

  async CreateService(name: string, price: string, type: string,) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/services/create";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    const data = {name, price, type,
    }
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(token)});

  }

  async CreateBredd( name: string, racee: string,) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/services/create";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    const data = {name, racee,}
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(token)});

  }
  async addVaccination( applicationDate: string, shot: string, medic: string, nextApplicationDate:string) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/pets/add-vaccination-record";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    const data = {applicationDate,
      shot, medic, nextApplicationDate}
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(token)});

  }

  async AddAppoitment( applicationDate: string, shot: string, medic: string, nextApplicationDate:string) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/dayschedules/add-appointment";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    const data = {applicationDate,
      shot, medic, nextApplicationDate}
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(token)});

  }

  async AddDayScheduleSchema( date: string, appointments:Appointment) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/dayschedules";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    const data = {
      date,
      appointments
    }
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(token)});

  }




}
