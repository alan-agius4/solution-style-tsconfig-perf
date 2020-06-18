import { TestBed } from '@angular/core/testing';

import { Lib47Service } from './lib47.service';

describe('Lib47Service', () => {
  let service: Lib47Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib47Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
