import { TestBed } from '@angular/core/testing';

import { ModcontractService } from './modcontract.service';

describe('ModcontractService', () => {
  let service: ModcontractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModcontractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
