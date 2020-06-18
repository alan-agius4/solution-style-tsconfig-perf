import { TestBed } from '@angular/core/testing';

import { Lib85Service } from './lib85.service';

describe('Lib85Service', () => {
  let service: Lib85Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib85Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
