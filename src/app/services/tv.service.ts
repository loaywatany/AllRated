import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(public _HttpClient:HttpClient) { 

  }

  getTvTrending():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/tv/popular?api_key=a36430254248c3191bffc6400ec3f1e3&language=en-US&page=1');
  }
}
