import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies:[];
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";

  constructor(_MoviesService:MoviesService) {
    _MoviesService.getTrendingMovies().subscribe((data)=>{
      this.trendingMovies = data.results;
    })
   }

  ngOnInit() {
  }

}
