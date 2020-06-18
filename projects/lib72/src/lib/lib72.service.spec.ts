import { TestBed } from '@angular/core/testing';

import { Lib72Service } from './lib72.service';

describe('Lib72Service', () => {
  let service: Lib72Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib72Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
