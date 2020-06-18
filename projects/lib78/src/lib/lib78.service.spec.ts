import { TestBed } from '@angular/core/testing';

import { Lib78Service } from './lib78.service';

describe('Lib78Service', () => {
  let service: Lib78Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib78Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
