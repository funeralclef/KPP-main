import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorGrant {

  validate_grant(value: number) {
    if (value >= 0) return true;
    else return false;
  }
  
  constructor() { }
}