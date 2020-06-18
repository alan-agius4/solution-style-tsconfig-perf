import { TestBed } from '@angular/core/testing';

import { Lib22Service } from './lib22.service';

describe('Lib22Service', () => {
  let service: Lib22Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib22Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
