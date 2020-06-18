import { TestBed } from '@angular/core/testing';

import { Lib55Service } from './lib55.service';

describe('Lib55Service', () => {
  let service: Lib55Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib55Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
