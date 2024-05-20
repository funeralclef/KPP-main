import { Clothes } from "./Clothes";

export class Trousers extends Clothes {
    constructor(name: string, waistSize: number) {
        if (waistSize <= 0) {
            throw new Error("Invalid size provided for Trousers");
        }

        super(name, waistSize);
    }

    show() {
        return "Назва: " + this.name + ", розмір: " + this.S + ", витрати тканини: " + this.cloth().toFixed(2);
    };

    cloth() {
        return this.S / 5.5; 
    }
}
