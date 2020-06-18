import { TestBed } from '@angular/core/testing';

import { Lib49Service } from './lib49.service';

describe('Lib49Service', () => {
  let service: Lib49Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib49Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
