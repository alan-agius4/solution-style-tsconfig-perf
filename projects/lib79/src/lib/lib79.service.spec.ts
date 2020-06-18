import { TestBed } from '@angular/core/testing';

import { Lib79Service } from './lib79.service';

describe('Lib79Service', () => {
  let service: Lib79Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib79Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
