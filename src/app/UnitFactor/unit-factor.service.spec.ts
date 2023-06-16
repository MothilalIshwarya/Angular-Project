import { TestBed } from '@angular/core/testing';

import { UnitFactorService } from './unit-factor.service';

describe('UnitFactorService', () => {
  let service: UnitFactorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitFactorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
