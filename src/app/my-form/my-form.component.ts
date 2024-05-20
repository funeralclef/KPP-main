import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student, Discipline } from './Class/student';
import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { ValidatorGradeService } from './Services/validatorGrade.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  studentsForm!: FormGroup;
  @Output() StudentAdd: EventEmitter<Student> = new EventEmitter<Student>();
  
  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.studentsForm = this.fb.group({
      studentName: ['', [Validators.required]],
      studentGroup: ['', [Validators.required]],
      studentGrade: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      studentGrant: ['', [Validators.required, Validators.min(0)]],
      disciplines: this.fb.array([this.createDiscipline()])
    });
  }

  ngOnInit() {}

  createDiscipline(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      grade: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  getControls() {
    return (this.studentsForm.get('disciplines') as FormArray).controls;
  }

  addDiscp() {
    const control = <FormArray>this.studentsForm.controls['disciplines'];
    control.push(this.createDiscipline());
  }

  deleteDiscp(index: number) {
    const control = <FormArray>this.studentsForm.controls['disciplines'];
    control.removeAt(index);
  }

  OnSubmit() {
    const formValue = this.studentsForm.value;
    const student = new Student(
      formValue.studentName,
      formValue.studentGroup,
      formValue.studentGrade,
      formValue.studentGrant,
      formValue.disciplines.map((d: any) => new Discipline(d.name, d.grade))
    );

    this.StudentAdd.emit(student);
    console.log("Submitted Student:", student);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: "Середній бал повинен бути додатнім числом",
      buttons: ['OK'],
    });
    await alert.present();
  }
}