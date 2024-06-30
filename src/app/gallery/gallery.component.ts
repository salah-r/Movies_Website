import { Component } from '@angular/core';
import { MoviesService } from '../moviesService/movies.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  constructor(private _MoviesService: MoviesService) { }

  topRated: any = {}

  ngOnInit(): void {

    this._MoviesService.getTopRated().subscribe((response) => {


      this.topRated = response;
      console.log(this.topRated);

    })
  }




}
