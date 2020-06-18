import { TestBed } from '@angular/core/testing';

import { Lib91Service } from './lib91.service';

describe('Lib91Service', () => {
  let service: Lib91Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib91Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
