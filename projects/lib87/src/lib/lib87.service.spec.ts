import { TestBed } from '@angular/core/testing';

import { Lib87Service } from './lib87.service';

describe('Lib87Service', () => {
  let service: Lib87Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib87Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
