import { TestBed } from '@angular/core/testing';

import { Lib66Service } from './lib66.service';

describe('Lib66Service', () => {
  let service: Lib66Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib66Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
