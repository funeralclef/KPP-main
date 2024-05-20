import { TestBed } from '@angular/core/testing';

import { ValidatorGradeService } from './validatorGrade.service';

//npm test

describe('ValidatorGradeService', () => {
  let service: ValidatorGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('перевірка чи бал не менше нуля', () => {
    let s = service.validate_grade(-15);
    expect(s).toBe(false);
  });

  it('перевірка, що бал не може дорівнювати нулю', () => {
    let s = service.validate_grade(0);
    expect(s).toBe(false);
  });

  it('перевірка балу на додатнє ціле число', () => {
    let s = service.validate_grade(15);
    expect(s).toBe(true);
  });

  it('перевірка балу на додатнє дійсне число', () => {
    let s = service.validate_grade(15.25);
    expect(s).toBe(false);
  }); 
});
