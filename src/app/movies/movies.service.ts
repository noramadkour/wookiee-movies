import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  token = 'Wookie2019';
  endPoint = 'https://wookie.codesubmit.io/movies';
  currentMovie : any ;

  constructor(private http: HttpClient) {

  }



  getMovies() : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(this.endPoint, { headers: headers }).pipe(tap((res => {
      // this.movies = res;
      // console.log('list movies is ', this.movies);
    })));
  }

  getMoviesBySearch(value) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${this.endPoint+ '?q=' + value}` , { headers: headers }).pipe(tap((res => {
      // this.movies = res;
      // console.log('list movies is ', this.movies);
    })));
  }

}
