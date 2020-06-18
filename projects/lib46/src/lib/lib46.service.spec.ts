import { TestBed } from '@angular/core/testing';

import { Lib46Service } from './lib46.service';

describe('Lib46Service', () => {
  let service: Lib46Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib46Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
