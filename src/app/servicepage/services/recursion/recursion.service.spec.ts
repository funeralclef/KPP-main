import { TestBed, inject } from '@angular/core/testing';
import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecursionService]
    });
  });

  it('should be created', inject([RecursionService], (service: RecursionService) => {
    expect(service).toBeTruthy();
  }));

  it('should calculate recursion term correctly', inject([RecursionService], (service: RecursionService) => {
    const x = 1;
    const n = 2;
    const expectedTerm = Math.sin(2 * x) / 2;
    const result = service['getRecursionTerm'](x, n);
    expect(result).toBe(expectedTerm);
  }));

  it('should generate tabulation correctly', inject([RecursionService], (service: RecursionService) => {
    const xn = 0;
    const xk = 1;
    const h = 0.1;
    const expectedSize = Math.ceil((xk - xn) / h) + 1;
    const tab = service.getTab(xn, xk, h);
    expect(tab.size).toBe(expectedSize);
  
    // Check if values are calculated correctly
    for (let x = xn; x <= xk; x += h) {
      const expectedValue = 2 * (Math.sin(x) - Math.sin(2 * x) / 2 + Math.sin(3 * x) / 3 - Math.sin(4 * x) / 4 + Math.sin(5 * x) / 5 - Math.sin(6 * x) / 6 + Math.sin(7 * x) / 7 - Math.sin(8 * x) / 8 + Math.sin(9 * x) / 9 - Math.sin(10 * x) / 10);
      expect(tab.get(x)).toBeCloseTo(expectedValue, 4);
    }
  }));   
});
