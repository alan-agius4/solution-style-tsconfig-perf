import { TestBed } from '@angular/core/testing';

import { Lib31Service } from './lib31.service';

describe('Lib31Service', () => {
  let service: Lib31Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib31Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
