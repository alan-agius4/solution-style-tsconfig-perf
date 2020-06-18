import { TestBed } from '@angular/core/testing';

import { Lib67Service } from './lib67.service';

describe('Lib67Service', () => {
  let service: Lib67Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib67Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
