import { TestBed } from '@angular/core/testing';

import { Lib59Service } from './lib59.service';

describe('Lib59Service', () => {
  let service: Lib59Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib59Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
