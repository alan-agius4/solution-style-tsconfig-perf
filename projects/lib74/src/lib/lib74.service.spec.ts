import { TestBed } from '@angular/core/testing';

import { Lib74Service } from './lib74.service';

describe('Lib74Service', () => {
  let service: Lib74Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib74Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
