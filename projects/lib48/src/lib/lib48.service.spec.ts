import { TestBed } from '@angular/core/testing';

import { Lib48Service } from './lib48.service';

describe('Lib48Service', () => {
  let service: Lib48Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib48Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
