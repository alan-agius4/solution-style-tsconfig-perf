import { TestBed } from '@angular/core/testing';

import { Lib24Service } from './lib24.service';

describe('Lib24Service', () => {
  let service: Lib24Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib24Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
