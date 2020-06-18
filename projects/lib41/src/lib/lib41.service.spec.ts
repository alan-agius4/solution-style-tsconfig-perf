import { TestBed } from '@angular/core/testing';

import { Lib41Service } from './lib41.service';

describe('Lib41Service', () => {
  let service: Lib41Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib41Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
