import { TestBed } from '@angular/core/testing';

import { BookcreationService } from './bookcreation.service';

describe('BookcreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookcreationService = TestBed.get(BookcreationService);
    expect(service).toBeTruthy();
  });
});
