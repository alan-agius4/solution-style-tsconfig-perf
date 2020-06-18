import { TestBed } from '@angular/core/testing';

import { Lib7Service } from './lib7.service';

describe('Lib7Service', () => {
  let service: Lib7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
