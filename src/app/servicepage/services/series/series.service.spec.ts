import { TestBed, inject } from '@angular/core/testing';
import { SeriesService } from './series.service';

describe('SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesService]
    });
  });

  it('should be created', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));

  it('should calculate series correctly', inject([SeriesService], (service: SeriesService) => {
    const x = 1;
    const expectedValue = 2 * (Math.sin(x) - Math.sin(2 * x) / 2 + Math.sin(3 * x) / 3 - Math.sin(4 * x) / 4 + Math.sin(5 * x) / 5 - Math.sin(6 * x) / 6 + Math.sin(7 * x) / 7 - Math.sin(8 * x) / 8 + Math.sin(9 * x) / 9 - Math.sin(10 * x) / 10);
    const result = service.getSeries(x);
    expect(result).toBeCloseTo(expectedValue, 4);
  }));

  it('should generate tabulation correctly', inject([SeriesService], (service: SeriesService) => {
    const xn = -Math.PI;
    const xk = Math.PI;
    const h = 0.01;
    const expectedSize = Math.ceil((xk - xn) / h);
    const tab = service.getTab(xn, xk, h);
    expect(tab.size).toBe(expectedSize);

    // Check if values are calculated correctly
    for (let x = xn; x <= xk; x += h) {
      const expectedValue = 2 * (Math.sin(x) - Math.sin(2 * x) / 2 + Math.sin(3 * x) / 3 - Math.sin(4 * x) / 4 + Math.sin(5 * x) / 5 - Math.sin(6 * x) / 6 + Math.sin(7 * x) / 7 - Math.sin(8 * x) / 8 + Math.sin(9 * x) / 9 - Math.sin(10 * x) / 10);
      expect(tab.get(x)).toBeCloseTo(expectedValue, 4);
    }
  }));
});
