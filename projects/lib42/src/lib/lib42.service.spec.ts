import { TestBed } from '@angular/core/testing';

import { Lib42Service } from './lib42.service';

describe('Lib42Service', () => {
  let service: Lib42Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib42Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
