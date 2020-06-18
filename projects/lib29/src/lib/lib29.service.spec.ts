import { TestBed } from '@angular/core/testing';

import { Lib29Service } from './lib29.service';

describe('Lib29Service', () => {
  let service: Lib29Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib29Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
