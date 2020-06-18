import { TestBed } from '@angular/core/testing';

import { Lib68Service } from './lib68.service';

describe('Lib68Service', () => {
  let service: Lib68Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib68Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
