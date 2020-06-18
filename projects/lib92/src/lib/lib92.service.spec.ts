import { TestBed } from '@angular/core/testing';

import { Lib92Service } from './lib92.service';

describe('Lib92Service', () => {
  let service: Lib92Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib92Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
