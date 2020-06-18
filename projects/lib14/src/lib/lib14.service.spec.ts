import { TestBed } from '@angular/core/testing';

import { Lib14Service } from './lib14.service';

describe('Lib14Service', () => {
  let service: Lib14Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib14Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
