import { TestBed } from '@angular/core/testing';

import { AddFavouriteService } from './add-favourite.service';

describe('AddFavouriteService', () => {
  let service: AddFavouriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFavouriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
