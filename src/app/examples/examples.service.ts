import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs";
import 'rxjs/add/operator/map'
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {

  constructor(private https: HttpClient, private http: Http) { }

  // private url = 'http://localhost:4200/api/';
  private url = 'http://18.140.131.246:4000/api/';


  login(data){
    return this.http.post(this.url + "user/login", JSON.stringify(data)).map(res => JSON.parse(res['_body'])["result"]);
  }

  signupJobseeker(data){
    return this.http.post(this.url + "user/register", JSON.stringify(data)).map(res => JSON.parse(res['_body'])["result"]);
  }

  signupEmployer(data){
    return this.http.post(this.url + "user/register", JSON.stringify(data)).map(res => JSON.parse(res['_body'])["result"]);
  }

  forgetPassword(data){
    return this.http.post(this.url + "user/reset/password", JSON.stringify(data)).map(res => JSON.parse(res['_body'])["result"]);
  }

  resetPassword(data){
    return this.http.post(this.url + "user/Update/password", JSON.stringify(data)).map(res => JSON.parse(res['_body'])["result"]);
  }

  verifyToken(data){
    return this.http.post(this.url + "user/reset/password", JSON.stringify(data)).map(res => JSON.parse(res['_body'])["result"]);
  }
}
