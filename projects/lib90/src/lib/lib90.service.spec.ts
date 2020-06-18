import { TestBed } from '@angular/core/testing';

import { Lib90Service } from './lib90.service';

describe('Lib90Service', () => {
  let service: Lib90Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib90Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
