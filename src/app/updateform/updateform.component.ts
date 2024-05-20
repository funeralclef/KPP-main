import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../my-form/Class/student';
import { Discipline } from '../my-form/Class/discipline'; 
import { ValidatorGradeService } from '../my-form/Services/validatorGrade.service';
import { ValidatorGrant } from '../my-form/Services/validatorGrant.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {
  @Input() student!: Student;
  @Input() show: boolean = true;
  @Output() studentChange: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() showChange = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  validate_grant(d: number): boolean {
    let validator = new ValidatorGrant();
    return d >= 0 && validator.validate_grant(d);
  }

  save(n: any, c: any, u: any, p: any) {
    let updatedDisciplines = this.student.disciplines.map(d => new Discipline(d.name, d.grade));

    if (!this.validate_grant(p)) {
      console.error("Error of grant");
      return;
    }

    let gradeService = new ValidatorGradeService();
    if (!gradeService.validate_grade(u)) {
      console.error("Error of grade");
      return;
    }

    const updatedStudent = new Student(n, c, u, p, updatedDisciplines);
    this.studentChange.emit(updatedStudent);
    this.showChange.emit(false);
  }
}