import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tvTrending:[];

  constructor(_TvService:TvService) { 
    _TvService.getTvTrending().subscribe((data)=>{
      this.tvTrending = data.networks;
    })
   }

  ngOnInit() {
  }

}
