import { TestBed } from '@angular/core/testing';

import { Lib71Service } from './lib71.service';

describe('Lib71Service', () => {
  let service: Lib71Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib71Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
