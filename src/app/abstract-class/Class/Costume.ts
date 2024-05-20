import { Clothes } from "./Clothes"

export class Costume extends Clothes {
    constructor(name: string, height: number) {
        if (height <= 0) {
            throw new Error("Invalid height provided for Costume");
        }

        super(name, height);
    }
    show() {
        return "Назва: " + this.name + ", зріст: " + this.S + ", Витрати тканини: " + this.cloth().toFixed(2);
    };
    cloth() {
        return this.S * 2 + 0.3;
    }
}
