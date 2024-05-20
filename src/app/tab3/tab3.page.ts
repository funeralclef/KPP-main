import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  Inputa!: string;
  a!: number;
  arr!: number[][];
  colors: { [key: string]: string } = {}; // Об'єкт для зберігання кольорів за модулем чисел

  create_array(a: string) {
    this.arr = [];
    this.colors = {}; // Очистити об'єкт кольорів перед створенням нової матриці
   
    try {
      this.a = parseInt(a);

      if (isNaN(this.a) || this.a <= 0) {
        throw new Error('Parameter is not a positive number!');
      }

      let i: number = 0, j: number;
      this.arr = Array(this.a);
      console.log("Array created");

      for (i = 0; i < this.a; i++) {
        this.arr[i] = Array(this.a);
        for (j = 0; j < this.a; j++) {
          const randomNumber = parseFloat((Math.random() * 101).toFixed(0));
          this.arr[i][j] = randomNumber;
          const absValue = Math.abs(randomNumber); // Отримати модуль числа
          const key = absValue.toString(); // Конвертуємо модуль в рядок для використання як ключ у colors
          if (!(key in this.colors)) {
            // Якщо модуль числа ще не зустрічався, присвоїти йому новий колір
            this.colors[key] = this.getRandomColor();
          }
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  // Метод для отримання випадкового кольору
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getColor(num: number): string {
    const absValue = Math.abs(num); // Отримати модуль числа
    const key = absValue.toString(); // Конвертуємо модуль в рядок для використання як ключ у colors
    const color = this.colors[key]; // Отримати колір для модуля числа
    return color ? color : 'red'; // Повернути відповідний колір для модуля числа або червоний колір як за замовчуванням
  }
}
