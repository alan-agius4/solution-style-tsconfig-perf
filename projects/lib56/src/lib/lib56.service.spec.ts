import { TestBed } from '@angular/core/testing';

import { Lib56Service } from './lib56.service';

describe('Lib56Service', () => {
  let service: Lib56Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib56Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
