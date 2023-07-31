import { TestBed } from '@angular/core/testing';

import { SubscribeService } from './subscribe-service.service';

describe('SubscribeServiceService', () => {
  let service: SubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
