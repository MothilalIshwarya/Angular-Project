import { TestBed } from '@angular/core/testing';

import { ProductgroupService } from './productgroup.service';

describe('ProductgroupService', () => {
  let service: ProductgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
