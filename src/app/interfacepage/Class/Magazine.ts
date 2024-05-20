import { IBook } from "../Interface/IBook";
import { Publisher } from "./Publisher";
import { IShow } from "../Interface/IShow";
export class Magazine extends Publisher implements IShow{
    druk:string;

    constructor(name:string, price:number, expDate:Date, druk:string, type:string) {
        super(name, price, expDate, type);
        this.druk=druk;
    }
    
    get status(){
        let s:string;
        let date = new Date();
        let day = (this.expDate.getTime() - date.getTime())/(24 * 60 * 60 * 1000);
        if (day>=7) s = "Новий випуск";
        else s = "Випуск застарілий, ціну знижено на 25%";
       return s;
    }

    get getDiscouted(){
        let n:number;
        switch(this.status){
            case "Новий випуск":
                n=this.price;
                break;
            case "Випуск застарілий, ціну знижено на 25%":
                n=this.price*0.75;
                break;
            default:n=this.price;
        }
        return n.toFixed(2);
    }

    show(){
        let s = this.type +" "+this.name+ " друкованного видання " +  this.druk + " коштує " + this.price + 
        " грн. Дата випуску: " + this.expDate.getDay() + "." + this.expDate.getMonth() + "." + this.expDate.getFullYear();
        return s;
    }
}