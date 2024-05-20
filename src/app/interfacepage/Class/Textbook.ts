import { IBook } from "../Interface/IBook";
import { IShow } from "../Interface/IShow";

export class Textbook implements IBook, IShow{
    name:string;
    price:number;
    type?:string;
    author:string;
    recommendedGrade:number;

    constructor(name:string, price:number, type:string, author:string, recommendedGrade:number) {
        this.name = name;
        this.price=price;
        this.type = type;
        this.author = author;
        this.recommendedGrade = recommendedGrade;
    }
    
    IsGrade(a:number){
        if (a==this.recommendedGrade) return true;
        else return false;
    }

    show(){
        let s = this.type +" "+this.name + " " +  "за авторством "  + this.author + 
        " коштує " + this.price + " грн. Рекомендовано для учнів " + 
        this.recommendedGrade + " класу.";
        return s;
    }
}