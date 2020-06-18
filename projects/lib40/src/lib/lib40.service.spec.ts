import { TestBed } from '@angular/core/testing';

import { Lib40Service } from './lib40.service';

describe('Lib40Service', () => {
  let service: Lib40Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib40Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
