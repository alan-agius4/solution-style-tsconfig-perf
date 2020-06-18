import { TestBed } from '@angular/core/testing';

import { Lib44Service } from './lib44.service';

describe('Lib44Service', () => {
  let service: Lib44Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib44Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
