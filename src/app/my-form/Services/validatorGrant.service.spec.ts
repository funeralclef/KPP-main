import { TestBed } from '@angular/core/testing';

import { ValidatorGrant } from './validatorGrant.service';

describe('ValidatorGrant', () => {
  let service: ValidatorGrant;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorGrant);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('перевірка чи стипендія більше нуля', () => {
    let s = service.validate_grant(-15);
    expect(s).toBe(false);
  });
  
  it('перевірка, що стипендія дорівнює нулю', () => {
    let s = service.validate_grant(0);
    expect(s).toBe(true);
  });

  it('перевірка, що стипендія додатня', () => {
    let s = service.validate_grant(15);
    expect(s).toBe(true);
  });
});
