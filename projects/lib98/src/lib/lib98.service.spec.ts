import { TestBed } from '@angular/core/testing';

import { Lib98Service } from './lib98.service';

describe('Lib98Service', () => {
  let service: Lib98Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib98Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
