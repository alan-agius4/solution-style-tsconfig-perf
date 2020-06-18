import { TestBed } from '@angular/core/testing';

import { Lib19Service } from './lib19.service';

describe('Lib19Service', () => {
  let service: Lib19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
