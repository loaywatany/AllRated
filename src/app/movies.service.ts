import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { GetTrendingInfoService } from './get-trending-info.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  

  constructor(public _HttpClient:HttpClient, _getTrendingInfo:GetTrendingInfoService) {
      
   }

   getTrendingMovies():Observable<any> {
     return this._HttpClient.get('https://api.themoviedb.org/3/trending/all/day?api_key=a36430254248c3191bffc6400ec3f1e3')
   }

   getTrendingItemInfo(mediaType, id):Observable<any> {
     return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=a36430254248c3191bffc6400ec3f1e3&language=en-US`);
  }
}
