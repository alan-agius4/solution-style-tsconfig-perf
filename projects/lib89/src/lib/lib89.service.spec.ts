import { TestBed } from '@angular/core/testing';

import { Lib89Service } from './lib89.service';

describe('Lib89Service', () => {
  let service: Lib89Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib89Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
