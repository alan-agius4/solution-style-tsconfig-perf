import { TestBed } from '@angular/core/testing';

import { Lib12Service } from './lib12.service';

describe('Lib12Service', () => {
  let service: Lib12Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib12Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
