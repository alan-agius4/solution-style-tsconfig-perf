import { TestBed } from '@angular/core/testing';

import { Lib82Service } from './lib82.service';

describe('Lib82Service', () => {
  let service: Lib82Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib82Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
