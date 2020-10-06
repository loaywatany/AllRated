import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogin:boolean = false;

  constructor(private _AuthService: AuthService) { 
    this._AuthService.currentUser.subscribe((res)=>{
      if (res != null)
      {
        this.islogin = true;
      }
      else
      {
        this.islogin = false;
      }
    })
   }

   logOut() {
     this._AuthService.logOut();
   }

  ngOnInit() {
    
  }

}
