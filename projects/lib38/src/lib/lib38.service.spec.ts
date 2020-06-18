import { TestBed } from '@angular/core/testing';

import { Lib38Service } from './lib38.service';

describe('Lib38Service', () => {
  let service: Lib38Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib38Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
