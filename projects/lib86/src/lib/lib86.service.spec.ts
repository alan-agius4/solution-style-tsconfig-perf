import { TestBed } from '@angular/core/testing';

import { Lib86Service } from './lib86.service';

describe('Lib86Service', () => {
  let service: Lib86Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib86Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
