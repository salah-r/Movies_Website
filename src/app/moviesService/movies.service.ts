import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }


  getTrending(mediaType: string): Observable<any> {

    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=9626e0df9d8f6147cf68b3b7cd61ac5b`)

  }
  getMovieDetails(id: string): Observable<any> {

    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9626e0df9d8f6147cf68b3b7cd61ac5b`)

  }
  getTopRated(): Observable<any> {

    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=9626e0df9d8f6147cf68b3b7cd61ac5b`)

  }
}
