import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(@Optional() private logService: LogService) {}

  // Метод для обчислення ряду з чергуванням доданків за знаком
  getSeries(x: number): number {
    let sum: number = 0;
    let sign: number = 1; // Змінна, що відстежує знак доданку

    for (let n = 1; n <= 10; n++) {
      sum += sign * Math.sin(n * x) / n; // Доданок з урахуванням поточного знаку
      sign *= -1; // Змінюємо знак для наступного доданку
    }

    return 2 * sum;
  }

  // Метод для табулювання значень ряду на відрізку [xn, xk] з кроком h
  getTab(xn: number = -Math.PI, xk: number = Math.PI, h: number = 0.01): Map<number, number> {
    const xy = new Map(); // Створюємо новий екземпляр Map
    let x = xn;

    while (x <= xk) {
      const y = this.getSeries(x);
      xy.set(x, y);

      if (this.logService) {
        this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      }

      x += h;
    }
    return xy;
  }
}