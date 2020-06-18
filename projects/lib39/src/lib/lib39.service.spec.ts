import { TestBed } from '@angular/core/testing';

import { Lib39Service } from './lib39.service';

describe('Lib39Service', () => {
  let service: Lib39Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib39Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
