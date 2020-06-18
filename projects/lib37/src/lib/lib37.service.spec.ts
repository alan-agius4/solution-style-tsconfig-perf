import { TestBed } from '@angular/core/testing';

import { Lib37Service } from './lib37.service';

describe('Lib37Service', () => {
  let service: Lib37Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib37Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
