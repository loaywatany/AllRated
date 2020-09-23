import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  errorMessage:string;
  flag:boolean = false;

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  getLoginInfo(loginForm) {
    this._AuthService.login(loginForm.value).subscribe((res)=>{
      if (res.message == 'success'){
        this._Router.navigate(['/movies']);
      } else {
        this.flag = true;
        this.errorMessage = res.message;
      }
    })
  }


  ngOnInit() {

    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, [Validators.required]) 
    });
  }

}
