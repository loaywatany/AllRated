import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetTrendingInfoService {

  constructor(private _HttpClient:HttpClient) { }

  getTrendingItemInfo(mediaType, id){
    this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=a36430254248c3191bffc6400ec3f1e3&language=en-US`);
  }
}
