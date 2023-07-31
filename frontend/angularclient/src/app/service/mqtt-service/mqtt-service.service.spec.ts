import { TestBed } from '@angular/core/testing';

import { MQService } from './mqtt-service.service';

describe('MQService', () => {
  let service: MQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
