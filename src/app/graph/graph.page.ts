import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  //поле для створення графіку
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef; 
  lineChart: any;
  Inputxn!: string;
  Inputxk!: string;
  Inputa!: string;
  Inputh!: string;
  xn: number = 0;
  xk: number = 0;
  a: number = 0 ;
  h: number = 0;
  xx: string[] =[];
  yy: number[] = [];
  data1: string[] = [];
  
  constructor() { 
    Chart.register(...registerables) 
  }

  ngOnInit() {
  }

  // метод створення графіку
  lineChartMethod (){
    // видалення графіка, якщо уже існує
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    // створення нового графіка
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type:'line',
      data: { // параметри графіка
        labels: this.xx,
        datasets: [ 
          {
            label: 'Графік функції', 
            fill:false, // заповнення області під лінією
            borderColor: 'rgba(75,192,192,1)', 
            pointRadius: 1,
            data: this.yy,
          }
        ]
      }
    });
  }

  graph(xn:string ="3.35", xk:string ="36.26", a:string="1", h:string="0.2"){
    try {
      this.data1=[];
      this.xn = parseFloat(xn);
      this.xk = parseFloat(xk);
      this.a = parseFloat(a);
      this.h = parseFloat(h);
      let x: number, y:number, i:number = 0;
      x = this.xn;
      this.xx = new Array();
      this.yy= new Array();

      if ((isNaN(this.xn)==true)||(isNaN(this.xk)==true)||(isNaN(this.h)==true)||(isNaN(this.a)==true)){
        throw new Error ('Parameter is not a number!');
      }

      while (x <= this.xk){
        if (x <= 0){
          y = (Math.pow(Math.abs(x), 5) * (1 / Math.tan(x + 2))) * 1e6;
        } 
        else {
          if (x <= this.a){
            y = ((5 * x + Math.pow(x, 2)) / Math.pow(Math.pow(x, 2) + 3, 3)) * 1e6;
          }
          else {
            y = (Math.pow(Math.sin(x + 3), 2) / (Math.pow(x, 5) - (1 / Math.tan(Math.PI * Math.pow(x, 3))))) * 1e6;
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", y)
          }
        }
        this.xx.push (x.toFixed(1));
        this.yy.push(parseFloat(y.toFixed(1)));
        let s = "x = " + x.toFixed(1) + "   y = " + y.toFixed(1);
        this.data1.push(s);
        x = x + this.h;
      }
      this.lineChartMethod();
    }
    catch (error){
      console.log(error);
    }
  }
}
