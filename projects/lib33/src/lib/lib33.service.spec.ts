import { TestBed } from '@angular/core/testing';

import { Lib33Service } from './lib33.service';

describe('Lib33Service', () => {
  let service: Lib33Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib33Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
