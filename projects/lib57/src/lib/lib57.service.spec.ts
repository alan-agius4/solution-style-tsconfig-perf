import { TestBed } from '@angular/core/testing';

import { Lib57Service } from './lib57.service';

describe('Lib57Service', () => {
  let service: Lib57Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib57Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
