import { Injectable } from '@angular/core';
import { Genre } from './Genre';
import { BehaviorSubject } from 'rxjs';
import { GenreList } from './GenreList';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    currentGenre = DEFAULT_GENRE;
    genre$: BehaviorSubject<Genre> = new BehaviorSubject(DEFAULT_GENRE);

    setType(g: Genre) {
        console.log("Зміна жанру");
        this.genre$.next(g);
    }

    getGenreNameById(id: number): string {
        return this.genreList.genre.get(id)?.name || "Unknown";
    }

    constructor(private genreList: GenreList) { }
}

const genreList = new GenreList();
const DEFAULT_GENRE = genreList.genre.get(0) || new Genre();