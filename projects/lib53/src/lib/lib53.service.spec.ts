import { TestBed } from '@angular/core/testing';

import { Lib53Service } from './lib53.service';

describe('Lib53Service', () => {
  let service: Lib53Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib53Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
