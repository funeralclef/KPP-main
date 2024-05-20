import { TestBed, inject } from '@angular/core/testing';
import { TabService } from './tab.service';

describe('TabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabService]
    });
  });

  it('should be created', inject([TabService], (service: TabService) => {
    expect(service).toBeTruthy();
  }));

  it('should generate tabulation correctly', inject([TabService], (service: TabService) => {
    const xn = -Math.PI;
    const xk = Math.PI;
    const h = 0.01;
    const expectedSize = Math.ceil((xk - xn) / h);
    const tab = service.getTab(xn, xk, h);
    expect(tab.size).toBe(expectedSize);

    // Check if values are calculated correctly
    for (let x = xn; x <= xk; x += h) {
      let expectedValue = 0;
      let sign = 1;
      for (let n = 1; n <= 10; n++) {
        expectedValue += sign * Math.sin(n * x) / n;
        sign *= -1;
      }
      expectedValue *= 2;
      expect(tab.get(x)).toBeCloseTo(expectedValue, 4);
    }
  }));
});
