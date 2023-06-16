import { TestBed } from '@angular/core/testing';

import { CostModelService } from './cost-model.service';

describe('CostModelService', () => {
  let service: CostModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
