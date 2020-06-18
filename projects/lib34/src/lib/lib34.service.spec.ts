import { TestBed } from '@angular/core/testing';

import { Lib34Service } from './lib34.service';

describe('Lib34Service', () => {
  let service: Lib34Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib34Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
