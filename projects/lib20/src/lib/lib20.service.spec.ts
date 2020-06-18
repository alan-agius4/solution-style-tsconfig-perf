import { TestBed } from '@angular/core/testing';

import { Lib20Service } from './lib20.service';

describe('Lib20Service', () => {
  let service: Lib20Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib20Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
