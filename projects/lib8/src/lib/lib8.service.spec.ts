import { TestBed } from '@angular/core/testing';

import { Lib8Service } from './lib8.service';

describe('Lib8Service', () => {
  let service: Lib8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
