import { Injectable } from '@angular/core';
import movies from '../sample-movies';


@Injectable()
export class CinemaService {
  movies: Array<Object> = [];

  getMovies(): Array<Object> {
    return this.movies
  };

  getMovie(id:number): Object {
    return this.movies.filter((movie)=> movie["id"] == id)[0];
  }
  constructor() {
    this.movies = movies;
   }

}
