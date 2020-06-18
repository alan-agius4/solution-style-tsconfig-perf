import { TestBed } from '@angular/core/testing';

import { Lib63Service } from './lib63.service';

describe('Lib63Service', () => {
  let service: Lib63Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib63Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
