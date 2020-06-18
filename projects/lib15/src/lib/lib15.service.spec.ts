import { TestBed } from '@angular/core/testing';

import { Lib15Service } from './lib15.service';

describe('Lib15Service', () => {
  let service: Lib15Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib15Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
