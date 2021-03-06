import { MoviesService } from './../movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit, OnDestroy {


  currentMovie: any
  ratingArr = [];
  rating: number;
  starCount: number = 5;
  color: string = 'warn';
  currentLang = 'en';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    // get current row from service
    this.currentMovie = this.moviesService.currentMovie;
    console.log('param is >> ', this.currentMovie);

    // set rating from current row
    this.rating = this.currentMovie?.imdb_rating;

    console.log("a " + this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }

  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  ngOnDestroy(): void {
    // this.subscriptions.unsubscribe();
  }

}


