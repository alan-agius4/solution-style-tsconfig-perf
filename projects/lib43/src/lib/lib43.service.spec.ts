import { TestBed } from '@angular/core/testing';

import { Lib43Service } from './lib43.service';

describe('Lib43Service', () => {
  let service: Lib43Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib43Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
