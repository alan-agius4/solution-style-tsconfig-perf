import { TestBed } from '@angular/core/testing';

import { Lib97Service } from './lib97.service';

describe('Lib97Service', () => {
  let service: Lib97Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib97Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
