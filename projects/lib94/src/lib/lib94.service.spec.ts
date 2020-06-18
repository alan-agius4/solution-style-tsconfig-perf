import { TestBed } from '@angular/core/testing';

import { Lib94Service } from './lib94.service';

describe('Lib94Service', () => {
  let service: Lib94Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib94Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
