import { TestBed } from '@angular/core/testing';

import { ImporttypeService } from './importtype.service';

describe('ImporttypeService', () => {
  let service: ImporttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImporttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
