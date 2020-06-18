import { TestBed } from '@angular/core/testing';

import { Lib52Service } from './lib52.service';

describe('Lib52Service', () => {
  let service: Lib52Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib52Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
