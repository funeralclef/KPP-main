import { Genre } from "./Genre";

export class GenreList {
    genre = new Map<number, Genre>();
    constructor() {
        this.genre.set(0, { id: 0, name: "Драма" });
        this.genre.set(1, { id: 1, name: "Комедія" });
        this.genre.set(2, { id: 2, name: "Трилер" });
        this.genre.set(3, { id: 3, name: "Фантастика" });
        this.genre.set(4, { id: 4, name: "Документальний" });
    }
    add(g: Genre) {
        this.genre.set(g.id, { id: g.id, name: g.name });
    }
}