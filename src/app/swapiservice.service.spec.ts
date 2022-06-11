import { TestBed } from '@angular/core/testing';

import { SWAPIService } from './swapiservice.service';

describe('SWAPIServiceService', () => {
  let service: SWAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SWAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
