import { Clothes } from "./Clothes";

export class Coat extends Clothes {
    constructor(name: string, size: number) {
        // Перевірка на допустимість значення розміру
        if (size <= 0) {
            throw new Error("Invalid size provided for Coat");
        }

        super(name, size);
    }

    show() {
        return "Назва: " + this.name + ", розмір: " + this.S + ", витрати тканини: " + this.cloth().toFixed(2);
    };

    cloth() {
        return this.S / 6.25; 
    }
}
