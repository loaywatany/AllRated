import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  flag:boolean = false;


  constructor(private _AuthService:AuthService, private _Router:Router) { }

  registerForm = new FormGroup({
    'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'password': new FormControl(null, [Validators.pattern(/^[A-Z]/), Validators.required]) 
  });

  getRegisterInfo(registerForm){

    if(registerForm.valid == true) {
      this._AuthService.register(registerForm.value).subscribe((res)=>{
        if (res.message == 'success') {
          this._Router.navigate(['/login'])
        } else {
          this.flag = true;
          console.log(res);
        }
      });
    }

  }



  ngOnInit() {
  }

}
