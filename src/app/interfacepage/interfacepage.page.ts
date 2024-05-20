import { Component, OnInit } from '@angular/core';
import { Textbook } from './Class/Textbook';
import { Magazine } from './Class/Magazine';
@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show_grade_tbook: string = "";
  show_tbook:string = "";
  show_discouted:string = "";
  show_status:string = "";
  show_magazine: string ="";
  Inputx!:string;

  constructor() { }

  ngOnInit() {

  }

  info_tbook(a:string){
    let tbook:Textbook;
    tbook = new Textbook("'Література 8 клас'", 375, "Підручник", "О.М. Авраменко", 8);
    this.show_tbook = tbook.show();
    let grade = parseInt(a);
    if (tbook.IsGrade(grade)) this.show_grade_tbook = "Підручник підходить даному учню"
    else this.show_grade_tbook = "Підручник не підходить даному учню."
  }

  info_magazine(){
    let magazine:Magazine;
    let date = new Date (2024, 3, 16);
    magazine = new Magazine ("'Літературні вислови'", 100, date, "'Веселі брати'" ,"Журнал");
    this.show_magazine = magazine.show();
    this.show_status = magazine.status;
    this.show_discouted = "Ціна:" + magazine.getDiscouted;
  }


}
