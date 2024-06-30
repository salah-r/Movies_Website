import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../moviesService/movies.service';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.scss'
})
export class MoviedetailsComponent {

  imagePrefix: string = 'https://image.tmdb.org/t/p/w500'

  id: string = ''
  movDetails: any = {}
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {

    this.id = this._ActivatedRoute.snapshot.params['id']
  }
  ngOnInit(): void {

    this._MoviesService.getMovieDetails(this.id).subscribe((response) => {

      this.movDetails = response;

    })


  }

}
