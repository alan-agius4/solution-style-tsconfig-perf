import { TestBed } from '@angular/core/testing';

import { Lib69Service } from './lib69.service';

describe('Lib69Service', () => {
  let service: Lib69Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib69Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
