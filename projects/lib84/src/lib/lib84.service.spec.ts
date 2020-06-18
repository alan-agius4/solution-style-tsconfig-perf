import { TestBed } from '@angular/core/testing';

import { Lib84Service } from './lib84.service';

describe('Lib84Service', () => {
  let service: Lib84Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib84Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
