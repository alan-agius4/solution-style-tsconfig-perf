import { TestBed } from '@angular/core/testing';

import { Lib93Service } from './lib93.service';

describe('Lib93Service', () => {
  let service: Lib93Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib93Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
