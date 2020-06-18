import { TestBed } from '@angular/core/testing';

import { Lib10Service } from './lib10.service';

describe('Lib10Service', () => {
  let service: Lib10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
