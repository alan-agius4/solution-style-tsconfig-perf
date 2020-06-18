import { TestBed } from '@angular/core/testing';

import { Lib81Service } from './lib81.service';

describe('Lib81Service', () => {
  let service: Lib81Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib81Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
