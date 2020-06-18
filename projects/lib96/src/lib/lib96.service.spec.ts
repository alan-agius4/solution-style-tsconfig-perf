import { TestBed } from '@angular/core/testing';

import { Lib96Service } from './lib96.service';

describe('Lib96Service', () => {
  let service: Lib96Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib96Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
