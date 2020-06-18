import { TestBed } from '@angular/core/testing';

import { Lib64Service } from './lib64.service';

describe('Lib64Service', () => {
  let service: Lib64Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib64Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
