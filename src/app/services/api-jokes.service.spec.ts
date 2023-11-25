import { TestBed } from '@angular/core/testing';

import { ApiJokesService } from './api-jokes.service';

describe('ApiJokesService', () => {
  let service: ApiJokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
