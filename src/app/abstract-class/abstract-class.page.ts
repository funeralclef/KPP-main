import { Component, OnInit } from '@angular/core';
import {Clothes} from "./Class/Clothes";
import {Coat} from "./Class/Coat";
import {Costume} from "./Class/Costume";

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})

export class AbstractClassPage implements OnInit {
  
  clothes:Clothes[] = []; //поліморфний контейнер
  cloth_coat:number = 0;
  cloth_costume:number = 0;
  Inputx!:string;

  constructor() { }

  getRandom(min:number, max:number){ //генерація рандомних чисел 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  count (nn:any = 0){ //функція для проведення розрахунків
    this.clothes = new Array (); //створення масиву
    let n = parseInt(nn);

    for (let i=0; i<n; i++){
      if (i%2==0) this.clothes.push(new Coat("пальто", this.getRandom(150, 210)));
      else this.clothes.push(new Costume("костюм", this.getRandom(100, 210)));
    }

    this.clothes.forEach((element) =>{
      element.cloth();
      if (element instanceof Coat) this.cloth_coat += element.cloth();
      else this.cloth_costume+=element.cloth();
    }
    )

  }
  
  ngOnInit() {
  }

}
