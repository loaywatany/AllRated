import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-get-trending-info',
  templateUrl: './get-trending-info.component.html',
  styleUrls: ['./get-trending-info.component.scss']
})
export class GetTrendingInfoComponent implements OnInit {

  Movie_item:any;
  Movie_id:any;
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  itemsDetails:any;

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) { 
    this.Movie_item = this._ActivatedRoute.snapshot.paramMap.get('item');
    this.Movie_id = this._ActivatedRoute.snapshot.paramMap.get('id');

    this._MoviesService.getTrendingItemInfo(this.Movie_item, this.Movie_id).subscribe((data)=>{
      this.itemsDetails = data;
    });
   }

  ngOnInit() {
  }

}
