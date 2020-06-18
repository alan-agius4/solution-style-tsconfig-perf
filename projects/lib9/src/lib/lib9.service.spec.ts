import { TestBed } from '@angular/core/testing';

import { Lib9Service } from './lib9.service';

describe('Lib9Service', () => {
  let service: Lib9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
