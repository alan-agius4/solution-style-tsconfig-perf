import { TestBed } from '@angular/core/testing';

import { Lib70Service } from './lib70.service';

describe('Lib70Service', () => {
  let service: Lib70Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib70Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
