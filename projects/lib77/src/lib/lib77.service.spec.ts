import { TestBed } from '@angular/core/testing';

import { Lib77Service } from './lib77.service';

describe('Lib77Service', () => {
  let service: Lib77Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib77Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
