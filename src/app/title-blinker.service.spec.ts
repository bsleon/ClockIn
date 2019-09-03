import { TestBed } from '@angular/core/testing';

import { TitleBlinkerService } from './title-blinker.service';

describe('TitleBlinkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitleBlinkerService = TestBed.get(TitleBlinkerService);
    expect(service).toBeTruthy();
  });
});
