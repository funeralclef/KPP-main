import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  constructor(@Optional() private logService: LogService) {}

  getTab(xn: number = -Math.PI, xk: number = Math.PI, h: number = 0.01): Map<number, number> {
    const xy = new Map(); // Створюємо новий екземпляр Map
    let x = xn;

    while (x <= xk) {
      let y = 0;
      let sign = 1; 

      for (let n = 1; n <= 10; n++) {
        y += sign * Math.sin(n * x) / n; // Застосовуємо знак до доданку
        sign *= -1; // Змінюємо знак на протилежний для наступного доданку
      }

      xy.set(x, 2 * y); 

      if (this.logService) {
        this.logService.write("x=" + x.toFixed(2) + " y=" + (2 * y).toFixed(4));
      }

      x += h;
    }
    return xy;
  }
}