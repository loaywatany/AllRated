import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'password': new FormControl(null, [Validators.pattern(/^[A-Z]/), Validators.required]) 
  });

  getRegisterInfo(registerForm){
    console.log(registerForm);
  }

  constructor() { }

  ngOnInit() {
  }

}
