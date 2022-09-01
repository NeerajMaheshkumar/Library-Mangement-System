import { TestBed } from '@angular/core/testing';

import { MembercreationService } from './membercreation.service';

describe('MembercreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembercreationService = TestBed.get(MembercreationService);
    expect(service).toBeTruthy();
  });
});
