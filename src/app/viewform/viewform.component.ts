import { Component, OnInit } from '@angular/core';
import { Student } from '../my-form/Class/student';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {
  show_update: boolean = false;
  students: Student[] = [];

  constructor() { }
  
  ngOnInit() {}

  addStudent(student: Student) {
    this.students.push(student);
    console.log("Students List Updated:", this.students);
  }

  update() {
    this.show_update = true;
  }

  showUp(event: boolean) {
    this.show_update = event;
  }

  update_save(student: Student, index: number) {
    this.students[index] = student;
    this.show_update = false;
    console.log("Updated Student:", student);
  }
}