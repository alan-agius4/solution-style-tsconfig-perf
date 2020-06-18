import { TestBed } from '@angular/core/testing';

import { Lib61Service } from './lib61.service';

describe('Lib61Service', () => {
  let service: Lib61Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib61Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
