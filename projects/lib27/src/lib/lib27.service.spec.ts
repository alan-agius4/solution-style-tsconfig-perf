import { TestBed } from '@angular/core/testing';

import { Lib27Service } from './lib27.service';

describe('Lib27Service', () => {
  let service: Lib27Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib27Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
