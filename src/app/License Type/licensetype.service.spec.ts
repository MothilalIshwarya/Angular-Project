import { TestBed } from '@angular/core/testing';

import { LicensetypeService } from './licensetype.service';

describe('LicensetypeService', () => {
  let service: LicensetypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicensetypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
