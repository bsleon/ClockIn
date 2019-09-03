import { TestBed } from '@angular/core/testing';

import { ServeTimeService } from './serve-time.service';

describe('ServeTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServeTimeService = TestBed.get(ServeTimeService);
    expect(service).toBeTruthy();
  });
});
