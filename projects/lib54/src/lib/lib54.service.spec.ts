import { TestBed } from '@angular/core/testing';

import { Lib54Service } from './lib54.service';

describe('Lib54Service', () => {
  let service: Lib54Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib54Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
