import { TestBed } from '@angular/core/testing';

import { Lib45Service } from './lib45.service';

describe('Lib45Service', () => {
  let service: Lib45Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib45Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
