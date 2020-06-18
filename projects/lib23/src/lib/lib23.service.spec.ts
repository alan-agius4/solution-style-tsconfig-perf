import { TestBed } from '@angular/core/testing';

import { Lib23Service } from './lib23.service';

describe('Lib23Service', () => {
  let service: Lib23Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib23Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
