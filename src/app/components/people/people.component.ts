import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  peopleTrending:[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(_peopleService:PeopleService) { 
    _peopleService.getPeopleTrending().subscribe((data)=>{
      this.peopleTrending = data.results;
    })
   }

  ngOnInit() {
  }

}
