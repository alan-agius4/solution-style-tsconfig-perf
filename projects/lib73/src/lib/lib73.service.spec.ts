import { TestBed } from '@angular/core/testing';

import { Lib73Service } from './lib73.service';

describe('Lib73Service', () => {
  let service: Lib73Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib73Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
