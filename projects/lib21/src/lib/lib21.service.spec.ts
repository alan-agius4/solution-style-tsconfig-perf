import { TestBed } from '@angular/core/testing';

import { Lib21Service } from './lib21.service';

describe('Lib21Service', () => {
  let service: Lib21Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib21Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
