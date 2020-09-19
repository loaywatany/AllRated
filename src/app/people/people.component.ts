import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  peopleTrending:[];
  imgPrefix:string = '';

  constructor(_peopleService:PeopleService) { 
    _peopleService.getPeopleTrending().subscribe((data)=>{
      this.peopleTrending = data.results;
    })
   }

  ngOnInit() {
  }

}
