import { TestBed } from '@angular/core/testing';

import { Lib11Service } from './lib11.service';

describe('Lib11Service', () => {
  let service: Lib11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
