import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RecursionService } from './services/recursion/recursion.service';
import { SeriesService } from './services/series/series.service';
import { TabService } from './services/tab/tab.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})

export class ServicepagePage implements OnInit {
  @ViewChild('lineCanvasTab') private lineCanvasTab?: ElementRef; 
  @ViewChild('lineCanvasSeries') private lineCanvasSeries?: ElementRef;
  @ViewChild('lineCanvasRecursion') private lineCanvasRecursion?: ElementRef;
  lineChart: any;
  xx: string[] =[];
  yy: number[] = [];
  data1: string[] = [];
  
  Inputxn!: string;
  Inputxk!: string;
  Inputh!: string;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;

  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();

  constructor(private tabServise:TabService,
    private seriesService:SeriesService,
    private recursionService:RecursionService) {
    Chart.register(...registerables) 
  }

  calculation(xn: any = -2, xk: any = 2, h: any = 0.5) {
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h);
    console.log("Табулювання");
    this.xyTab = this.tabServise.getTab(this.xn, this.xk, this.h);
    console.log("Ряд");
    this.xySeries = this.seriesService.getTab(this.xn, this.xk, this.h);
    console.log("Рекурсія");
    this.xyRecursion = this.recursionService.getTab(this.xn, this.xk, this.h);
    this.input();
    this.buildGraphs(); // Викликаємо побудову графіків після отримання даних для всіх трьох методів
  }

  input(){
    this.xyTab.forEach((value, key, map)=>{
      let s=' ';
      let y:number = 0;
      y=value;
      s=y.toFixed(4)+" --- ";
      y=this.xySeries.get(key);
      s=s+y.toFixed(4)+" --- ";
      y=this.xyRecursion.get(key);
      s=s+y.toFixed(4)+" --- ";
      let x = key;
      this.xyInput.set(x.toFixed(2),s);
    })
  }

  buildGraphs() {
    this.buildGraph(this.xyTab, 'Табулювання', this.lineCanvasTab);
    this.buildGraph(this.xySeries, 'Ряд', this.lineCanvasSeries);
    this.buildGraph(this.xyRecursion, 'Рекурсія', this.lineCanvasRecursion);
  }
  
  buildGraph(data: Map<number, number>, label: string, canvas: ElementRef | undefined) {
    if (!canvas) return; // Перевірка, чи елемент canvas існує
  
    let xx: string[] = [];
    let yy: number[] = [];
    data.forEach((value, key) => {
      xx.push(key.toFixed(2));
      yy.push(value);
    });
  
    // Створення нового графіка
    const lineChart = new Chart(canvas.nativeElement, {
      type:'line', 
      data: { 
        labels: xx, 
        datasets: [ 
          {
            label: label, 
            fill:false, 
            borderColor: 'rgba(75,192,192,1)',
            pointRadius: 1, 
            data: yy, 
          }
        ]
      }
    });
  }
  
  graph(xn: string = "-2", xk: string = "2", h: string = "0.5") {
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h);

    // Отримуємо дані для всіх трьох методів
    this.xyTab = this.tabServise.getTab(this.xn, this.xk, this.h);
    this.xySeries = this.seriesService.getTab(this.xn, this.xk, this.h);
    this.xyRecursion = this.recursionService.getTab(this.xn, this.xk, this.h);

    // Побудова графіків
    this.buildGraphs();
  }

  ngOnInit() {
  }

}
