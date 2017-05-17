import { Component, OnInit } from '@angular/core';
import { CinemaService } from "../services/cinema.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie: Object = {};

  constructor(public cinemaMovies: CinemaService, public routes: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movie = this.cinemaMovies.getMovie(this.routes.params["value"]["id"]);
  }

    goHome(){
    this.router.navigate(['/home']);
      }

}
