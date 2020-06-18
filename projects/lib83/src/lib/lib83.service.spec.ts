import { TestBed } from '@angular/core/testing';

import { Lib83Service } from './lib83.service';

describe('Lib83Service', () => {
  let service: Lib83Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib83Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
