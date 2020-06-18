import { TestBed } from '@angular/core/testing';

import { Lib76Service } from './lib76.service';

describe('Lib76Service', () => {
  let service: Lib76Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib76Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
