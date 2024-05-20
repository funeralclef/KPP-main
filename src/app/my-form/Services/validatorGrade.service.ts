import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorGradeService {

  validate_grade(value: number) {
    if (value > 0 && value <= 100) return true;
    else return false;
  }
  
  constructor() { }
}