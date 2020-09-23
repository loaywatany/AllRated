import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  register(registerFormValue):Observable<any> {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', registerFormValue);
  }
  login(loginFormValue):Observable<any> {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', loginFormValue);
  }
}
