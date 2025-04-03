import { TestBed } from '@angular/core/testing';

import { HpapiService } from './hpapi.service';

describe('HpapiService', () => {
  let service: HpapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
