import { TestBed } from '@angular/core/testing';

import { Lib25Service } from './lib25.service';

describe('Lib25Service', () => {
  let service: Lib25Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib25Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
