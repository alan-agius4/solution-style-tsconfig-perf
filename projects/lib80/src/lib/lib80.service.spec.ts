import { TestBed } from '@angular/core/testing';

import { Lib80Service } from './lib80.service';

describe('Lib80Service', () => {
  let service: Lib80Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib80Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
