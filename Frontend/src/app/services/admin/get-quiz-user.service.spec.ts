import { TestBed } from '@angular/core/testing';

import { GetQuizUserService } from './get-quiz-user.service';

describe('GetQuizUserService', () => {
  let service: GetQuizUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetQuizUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
