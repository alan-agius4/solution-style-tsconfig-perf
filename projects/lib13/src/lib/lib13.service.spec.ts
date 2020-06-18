import { TestBed } from '@angular/core/testing';

import { Lib13Service } from './lib13.service';

describe('Lib13Service', () => {
  let service: Lib13Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib13Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
