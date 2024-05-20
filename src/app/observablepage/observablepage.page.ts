import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre } from './service/Genre';
import { GenreList } from './service/GenreList';
import { Movie } from './service/Movie';
import { MovieList } from './service/MovieList';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {
  genres = new GenreList();
  private configService: ConfigService;
  private subscriptions: Subscription[] = [];
  movieList: MovieList;
  genre: Genre = new Genre();
  count = 0;

  constructor() {
    this.configService = new ConfigService(this.genres);
    this.movieList = new MovieList(this.configService);
  }

  ngOnInit() {
    const genreSub = this.configService.genre$.subscribe(() => {
      this.genre = this.configService.genre$.value;
      this.subscriptions.push(genreSub);
    });
  }

  nextGenre() {
    if (this.count < this.genres.genre.size - 1) {
      this.count++;
    } else {
      this.count = 0;
    }
    const nextGenre = this.genres.genre.get(this.count);
    if (nextGenre) {
      this.configService.setType(nextGenre);
    }
  }

  addGenre(name: string) {
    let g = new Genre();
    g.id = this.genres.genre.size;
    g.name = name;
    this.genres.add(g);
  }

  addMovie(name: string, director: string, year: string, duration: string) {
    let movie = new Movie();
    movie.name = name;
    movie.director = director;
    movie.releaseYear = parseInt(year, 10) || 0; // Ensure conversion to number and handle NaN
    movie.duration = parseInt(duration, 10) || 0; // Ensure conversion to number and handle NaN
    movie.genreId = this.genre.id;
    this.movieList.add(movie);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}