import { TestBed } from '@angular/core/testing';

import { Lib95Service } from './lib95.service';

describe('Lib95Service', () => {
  let service: Lib95Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib95Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
