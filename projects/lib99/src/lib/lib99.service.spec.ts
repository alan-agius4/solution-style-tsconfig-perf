import { TestBed } from '@angular/core/testing';

import { Lib99Service } from './lib99.service';

describe('Lib99Service', () => {
  let service: Lib99Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib99Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
