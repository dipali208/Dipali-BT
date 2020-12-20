import { TestBed } from '@angular/core/testing';

import { ShowCategoryService } from './show-category.service';

describe('ShowCategoryService', () => {
  let service: ShowCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
