import { TestBed } from '@angular/core/testing';

import { Lib60Service } from './lib60.service';

describe('Lib60Service', () => {
  let service: Lib60Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib60Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
