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
import {AppoitementResponse} from "../Model/AppoitmentResponse";
import {dayScaduleReponse} from "../Model/dayScaduleResponse";
import {Clients} from "../Model/Client";
import {Veto} from "../Model/Veto";
import {petModel} from "../Model/Pet";
import {Service} from "../Model/Service";
import {ClientAppoitmentresponse} from "../Model/ClientAppoitmentresponse";
import {VetoAppoitmentResponse} from "../Model/VetoAppoitmentResponse";
import {MYBreakHoursResponse} from "../Model/MYBreakHoursResponse";
import {DayModel} from "../Model/Day";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private _httpClient : HttpClient, private authservice : AuthService) {
  }

  async CreateVeto( name: string, email: string, password: string, phone: string, vetAddress:VetAdress) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/veterinarys/create";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();

    const data = {name, email, password, phone, vetAddress}
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(token)});

  }
  //creation de client name: string, breed : Breed, femaleOrMale: string, nameClient: string, email: string, password: string, phone: string, address:VetAdress
  async updateVeto( id:string ,name: string, email: string, phone: string,Education: string,Specialization: string,Experience: string, vetAddress:VetAdress) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = `/veterinarys/update/vet/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();

    const data = {name, email, phone,Education,Specialization,Experience, vetAddress}
    console.log(data,"data")
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(token)});

  }

  async CreteClient() : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/clients/create";
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    console.log(accessToken['accessToken'])
    const finalpathapi: string = finalpath+ path;
    const data = {
      name:'pololo', breed:{ "name": "cheval","type": "pure race"}, femaleOrMale:'male', nameClient:"oualiken", email:"testbhfvdjf", password:"tjr", phone:"1234567", address:{"street": "admin",
        "number": "123456",
        "intNumber": "12345678",},
    }
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(accessToken['accessToken'])});
  }

  //creation service ok
  async CreateService(name: string, price: string, type: string) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "services/create";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    const data = {name, price, type,}
    const data2 = {	"name": "Estetica con nudos Extra Grande",
      "price": "8040",
      "type": "grooming"}
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(accessToken['accessToken'])});

  }
//name: string, racee: string,
  async CreateBredd(name: string, racee: string ) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "breeds/create";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    console.log(accessToken['accessToken'])
    const data = {name, racee,}

    const data2 = {	"name": "oiseau", "race": "8040"}
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(accessToken['accessToken'])});
  }

//
  goood
  async addVaccination( applicationDate: string, shot: string, medic: string, nextApplicationDate:string) : Promise<Observable<VetoResponseAdmin>> {
    const path: string = "pets/add-vaccination-record";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    const data = {applicationDate, shot, medic, nextApplicationDate}
    const data2 =  {
      "applicationDate": "2022-10-06",
      "shot": "123456",
      "medic": "tetannnnnn",
      "nextApplicationDate": "2022-11-06",
      "id":"633d9590dae58d4f1ccb2101"

    }
    return this._httpClient.post<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(accessToken['accessToken'])});

  }
  //
  async AddAppoitment( serviceid: string, clientId: string, veterinaryId: string, hour:string, petId:string,notes:string,id:string) : Promise<Observable<AppoitementResponse>> {
    const path: string = "/dayschedules/add-appointment";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    console.log(accessToken['accessToken'])
    const data = {serviceid, clientId, veterinaryId, hour, petId,notes,id}
    const data2 = {	"serviceid": "633db5fb80547a523c322c97",
      "clientId": "633f51c1e194e768ff022e69",
      "veterinaryId": "633f4c8f1560f568ade07ed8",
      "petId": "633d990aca13544fc34a826c",
      "hour": "13H0",
      "notes": "femelle",
      "id": "633f753064035f6d069a3875"
    }

    return this._httpClient.post<AppoitementResponse>(finalpathapi, data, {headers: headersWithToken(accessToken['accessToken'])});

  }
  // date: string, appointments:Appointment
  async AddDayScheduleSchema(veterinaryId: string, date: string) : Promise<Observable<dayScaduleReponse>> {
    const path: string = "/dayschedules";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    const data = {date, veterinaryId}
    return this._httpClient.post<dayScaduleReponse>(finalpathapi, data, {headers: headersWithToken(accessToken)});

  }

// ----------------------------------go faire to les get relou lààà ------------------

  // all client
  async getAllclient(): Promise<Observable<Clients[]>> {
    const path: string = "clients";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Clients[]>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }
// all veto
  async getAllveto(): Promise<Observable<Veto[]>> {
    const path: string = "/veterinarys/all";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Veto[]>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }
// all pet
  async getAllpet(): Promise<Observable<petModel[]>> {
    const path: string = "/pets/all";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<petModel[]>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }


  // get one client

  async getoneclient(id): Promise<Observable<Clients>> {
    const path: string = `/clients/client/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Clients>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }



  // get one veto
  async getoneVeto(id): Promise<Observable<Veto>> {
    const path: string = `/veterinarys/veterinary?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    console.log(accessToken)

    return this._httpClient.get<Veto>(finalpathapi, {headers: headersWithToken(accessToken)});
  }



  // get one pet
  async getonePet(id): Promise<Observable<petModel>> {
    const path: string = `/pets/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<petModel>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }


  //get one breed
  async getonebreed(id): Promise<Observable<Breed>> {
    const path: string = `breeds/find/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Breed>(finalpathapi, {headers: headersWithToken(accessToken)});
  }


  async Validate(id): Promise<Observable<VetoResponseAdmin>> {
    const path: string = `veterinarys/valider/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    console.log(id)
    return this._httpClient.get<VetoResponseAdmin>(finalpathapi, {headers: headersWithToken(accessToken)});
  }
  // one service
  async getoneService(id): Promise<Observable<Service>> {
    const path: string = `services/find/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Service>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }
  // get all breed
  async getAllbredd(): Promise<Observable<Breed[]>> {
    const path: string = "/breeds/";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Breed[]>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }
  //get all servuce
  async getAllServices(): Promise<Observable<Service[]>> {
    const path: string = "/services";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Service[]>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }
  //get shot
  async getAllServicesShot(): Promise<Observable<Service[]>> {
    const path: string = "/services/shots";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Service[]>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }
  async editSevice(id: string | undefined, name: string, price: number, type: string): Promise<Observable<Service>> {
    const path: string = "/boat/edit";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    const data = {
      id,
      name,
      price,
      type,
    }
    return this._httpClient.put<Service>(finalpathapi, data, {headers: headersWithToken(accessToken['accessToken'])});
  }
  async editbreed(id: string | undefined, name: string, racee: string): Promise<Observable<VetoResponseAdmin>> {
    const path: string = "/boat/edit";
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    const data = {
      id,
      name,
      racee,
    }
    return this._httpClient.put<VetoResponseAdmin>(finalpathapi, data, {headers: headersWithToken(accessToken['accessToken'])});
  }
  async DeleteService(id): Promise<Observable<Service>> {
    const path: string = `services/delete/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Service>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }
  async deleteonebreed(id): Promise<Observable<Breed>> {
    const path: string = `breeds/delete/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<Breed>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }

//getDayWorkVeto
  async addBreakDayt(id,DayModel) : Promise<Observable<DayModel>> {
    const path: string = `/veterinarys/MYBreakHours/vet/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.post<DayModel>(finalpathapi,DayModel, {headers: headersWithToken(accessToken)});
  }

  async getBreakDayt(id): Promise<Observable<DayModel[]>> {
    const path: string = `/veterinarys/MYBreakHours/?id=${id}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<DayModel[]>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }

  async dayWorkVeto(veterinaryId,date): Promise<Observable<dayScaduleReponse[]>> {
    const path: string = `dayschedules/=${veterinaryId}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<dayScaduleReponse[]>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }


  async Getappitmentclient(clienId): Promise<Observable<ClientAppoitmentresponse>> {
    const path: string = `dayschedules/client?id=${clienId}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<ClientAppoitmentresponse>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }

  async GetappitmentVeto(veterinaryId): Promise<Observable<VetoAppoitmentResponse>> {
    const path: string = `dayschedules/veto?veterinaryId=${veterinaryId}`;
    const finalpathapi: string = finalpath+ path;
    const token = await this.authservice.getUserToken();
    var string1 = JSON.stringify(token);
    var accessToken = JSON.parse(string1);
    return this._httpClient.get<VetoAppoitmentResponse>(finalpathapi, {headers: headersWithToken(accessToken['accessToken'])});
  }


}
