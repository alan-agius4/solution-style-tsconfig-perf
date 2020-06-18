import { TestBed } from '@angular/core/testing';

import { Lib26Service } from './lib26.service';

describe('Lib26Service', () => {
  let service: Lib26Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib26Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
