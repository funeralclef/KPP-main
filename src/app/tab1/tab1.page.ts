import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  Inputa!: string;
  Inputb!: string;
  Inputc!: string;
  a!: number;
  b!: number;
  c!: number;
  result: number = 0;

  num (a: string, b: string, c: string) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      
      if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c)) {
        throw new Error('Parameter is not a number!');
      }

      if (this.a > 5 || this.b > 5 || this.c > 5) {
        // Якщо хоча б одне з чисел більше за 5, то знайти куб суми.
        const sum = this.a + this.b + this.c;
        this.result = sum * sum * sum;
      } else {
        // В іншому випадку – суму.
        this.result = this.a + this.b + this.c;
      }
    }
    catch (error){
      console.log(error);
    }
  }
}