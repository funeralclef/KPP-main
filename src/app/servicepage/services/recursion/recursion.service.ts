import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) {}

  // Рекурсивна функція для обчислення ряду
  private getRecursionTerm(x: number, n: number): number {
    if (n <= 0) return 0;
    const term = (Math.sin(n * x)) / n; // обчислюємо доданок без знаку, оскільки знаки будемо застосовувати окремо
    return term; // тут ми повертаємо доданок без знаку
  }

  // Метод для отримання значень ряду на відрізку [xn, xk] з кроком h
  getTab(xn: number, xk: number, h: number): Map<number, number> {
    let x = xn;

    while (x < xk) {
      let y = 0; // початкове значення ряду
      let sign = 1; // початковий знак

      // обчислюємо ряд із зміною знаку для кожного доданку
      for (let n = 1; n <= 10; n++) {
        const term = this.getRecursionTerm(x, n) * sign; // отримуємо доданок і застосовуємо знак
        y += term; // додаємо доданок до суми
        sign *= -1; // змінюємо знак для наступного доданку
      }

      this.xy.set(x, 2 * y); // зберігаємо значення в Map, помноживши на 2, як в інших методах

      if (this.logService) {
        this.logService.write("x=" + x.toFixed(2) + " y=" + (2 * y).toFixed(4)); // виводимо значення у вигляді логу
      }

      x += h; // збільшуємо x на крок h
    }
    return this.xy;
  }
}
