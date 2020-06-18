import { TestBed } from '@angular/core/testing';

import { Lib16Service } from './lib16.service';

describe('Lib16Service', () => {
  let service: Lib16Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib16Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
