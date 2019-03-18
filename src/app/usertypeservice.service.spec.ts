import { TestBed } from '@angular/core/testing';

import { USERtypeserviceService } from './usertypeservice.service';

describe('USERtypeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: USERtypeserviceService = TestBed.get(USERtypeserviceService);
    expect(service).toBeTruthy();
  });
});
