import { TestBed } from '@angular/core/testing';

import { Lib5Service } from './lib5.service';

describe('Lib5Service', () => {
  let service: Lib5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
