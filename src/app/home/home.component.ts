import { Component } from '@angular/core';
import { MoviesService } from '../moviesService/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private _MoviesService: MoviesService) { }

  trendingMovies: any[] = []
  trendingTv: any[] = []
  trendingPepole: any[] = []

  imagePrefix: string = 'https://image.tmdb.org/t/p/w500'

  ngOnInit(): void {

    this._MoviesService.getTrending('movie').subscribe((response) => {

      this.trendingMovies = response.results.slice(0, 10);
    })
    this._MoviesService.getTrending('tv').subscribe((response) => {

      this.trendingTv = response.results.slice(0, 10);
    })
    this._MoviesService.getTrending('person').subscribe((response) => {

      this.trendingPepole = response.results.slice(0, 10);
    })
  }

}
