import { TestBed } from '@angular/core/testing';

import { Lib36Service } from './lib36.service';

describe('Lib36Service', () => {
  let service: Lib36Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib36Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
