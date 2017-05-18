import { Component, OnInit } from '@angular/core';
import { CinemaService } from "../services/cinema.service";
// import movies from '../sample-movies';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(public cinemaMovies: CinemaService) { }

  ngOnInit() {
    // this.cinemaMovies.movies = movies;
  }

}
