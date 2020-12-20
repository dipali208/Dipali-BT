import { TestBed } from '@angular/core/testing';

import { EncrdecrService } from './encrdecr.service';

describe('EncrdecrService', () => {
  let service: EncrdecrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncrdecrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
