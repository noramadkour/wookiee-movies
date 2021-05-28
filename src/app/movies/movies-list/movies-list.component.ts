import { debounceTime, map } from 'rxjs/operators';
import { MoviesService } from './../movies.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @ViewChild('search', { static: true }) search: ElementRef;

  searchInputValue :string;
  movies :any [] ;
  currentLang = 'en' ;

  constructor(private moviesService: MoviesService 
    , private _router: Router,) { }

  ngOnInit(): void {
    console.log('list works');
    this.filterData();
    this.getMovies();
  }


  getMovies() {
    console.log('get movies works');    
    this.moviesService.getMovies().subscribe(res => {
      this.movies = res.movies;
      console.log('list movies is ', this.movies);
    })
  }

  getMoviesBySrearch(value) {
    console.log('get movies works');    
    this.moviesService.getMoviesBySearch(value).subscribe(res => {
      this.movies = res.movies;
      console.log('list movies is ', this.movies);
    })
  }

  // Research began after the completion of writing
  filterData() {
    fromEvent(this.search.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1200)
      )
      .subscribe((value: string) => {
       console.log('search value is >>' , value); 
       this.getMoviesBySrearch(value);      
      });
  }

  navigateToDetails(param){

    this.moviesService.currentMovie = param ;
    this._router.navigate(['details']);
  }
    // this._router.navigate(['details', movie]);
  // }

}
