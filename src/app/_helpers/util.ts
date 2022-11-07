import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export  const headers = new HttpHeaders({
  'Accept':'*',
  'Access-Control-Allow-Origin':"*",
  'Content-Type':"application/json"
});
export  const headersWithToken = (token: unknown) => new HttpHeaders({
  'Accept':'*',
  'Access-Control-Allow-Origin':"*",
  'Content-Type':"application/json",
  'Authorization' : 'Bearer '+token
});
