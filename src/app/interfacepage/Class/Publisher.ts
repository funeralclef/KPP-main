import { IBook } from "../Interface/IBook";
export abstract class Publisher implements IBook{
    name:string;
    price:number;
    type:string;
    expDate:Date;
    abstract status:string;
    abstract getDiscouted:string;
    constructor(name:string, price:number, expDate:Date, type:string) {
        this.name = name;
        this.price=price;
        this.expDate=expDate;
        this.type = type;
    }

}