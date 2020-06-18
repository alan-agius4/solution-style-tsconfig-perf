import { TestBed } from '@angular/core/testing';

import { Lib58Service } from './lib58.service';

describe('Lib58Service', () => {
  let service: Lib58Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib58Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
