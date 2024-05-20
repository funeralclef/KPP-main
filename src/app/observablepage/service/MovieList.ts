import { Movie } from "./Movie";
import { ConfigService } from "./config.service";

export class MovieList {
    movieList = new Array<Movie>();
    searchMovie = new Array<Movie>();
    searchMovieResult: string[] = [];
    genreSub = this.configService.genre$
        .subscribe(() => {
            let genre = this.configService.genre$.value;
            this.search(genre.id);
        });

    constructor(private configService: ConfigService) {
        let movie = new Movie();
        movie.id = 0;
        movie.name = "Зелена миля";
        movie.genreId = 0;
        movie.director = "Френк Дарабонт";
        movie.releaseYear = 1999;
        movie.duration = 189;

        this.add(movie);

        let movie1 = new Movie();
        movie1.id = 1;
        movie1.name = "Форрест Гамп";
        movie1.genreId = 0;
        movie1.director = "Роберт Земекіс";
        movie1.releaseYear = 1994;
        movie1.duration = 142;

        this.add(movie1);
    }
    add(m: Movie) {
        this.movieList.push(m);
        this.search(m.genreId);
    }
    search(id: number) {
        let c: number = 0;
        this.searchMovie = this.movieList.filter((movie) => movie.genreId === id);
        this.searchMovieResult = [];
        this.searchMovie.forEach(el => {
            this.searchMovieResult.push('ФІЛЬМ №' + c);
            this.searchMovieResult.push('Назва: ' + el.name);
            this.searchMovieResult.push('Жанр: ' + this.configService.getGenreNameById(el.genreId));
            this.searchMovieResult.push('Режисер: ' + el.director);
            this.searchMovieResult.push('Рік випуску: ' + el.releaseYear);
            this.searchMovieResult.push('Тривалість: ' + el.duration + ' хв');
            c++;
        });
    }
}