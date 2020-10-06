import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tvTrending:[];
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";

  constructor(_TvService:TvService) { 
    _TvService.getTvTrending().subscribe((data)=>{
      this.tvTrending = data.results;
    })
   }

  ngOnInit() {
  }

}
