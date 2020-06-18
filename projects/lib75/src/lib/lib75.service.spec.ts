import { TestBed } from '@angular/core/testing';

import { Lib75Service } from './lib75.service';

describe('Lib75Service', () => {
  let service: Lib75Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib75Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
