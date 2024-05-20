export abstract class Clothes {

    name!:string;
    S!:number;

    constructor(name:string, S:number){
        this.S=S;
        this.name=name;
    }
    abstract show(): any;
    abstract cloth(): any;
}