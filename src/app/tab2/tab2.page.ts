import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
 
  Inputa!: string;
  Inputb!: string;
  a!: number;
  b!: number;
  d: number = 0;

  num(a: string, b: string) {
    try {
      this.a = parseInt(a);
      this.b = parseInt(b);
      this.d = 0;

      if (isNaN(this.a) || isNaN(this.b)) {
        throw new Error('Parameter is not a number!');
      }

      for (let i = this.a; i <= this.b; i++) {
        if (i % 44 === 0 && i % 2 !== 0 && i % 5 === 3) {
          this.d++;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

}
