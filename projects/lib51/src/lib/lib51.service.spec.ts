import { TestBed } from '@angular/core/testing';

import { Lib51Service } from './lib51.service';

describe('Lib51Service', () => {
  let service: Lib51Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib51Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
