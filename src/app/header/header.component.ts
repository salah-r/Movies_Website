import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  ngOnInit(): void {

  }
  imagePrefix: string = 'https://image.tmdb.org/t/p/w500'

  @Input() headerTrendingMovies: any[] = []

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 5
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
