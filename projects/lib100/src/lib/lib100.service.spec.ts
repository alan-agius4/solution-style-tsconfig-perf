import { TestBed } from '@angular/core/testing';

import { Lib100Service } from './lib100.service';

describe('Lib100Service', () => {
  let service: Lib100Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib100Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
