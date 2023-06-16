import { TestBed } from '@angular/core/testing';

import { UnitdefinitionService } from './unitdefinition.service';

describe('UnitdefinitionService', () => {
  let service: UnitdefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitdefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
